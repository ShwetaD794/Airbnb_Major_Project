const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));  //cookieparser- middleware


app.get("/getsignedcookie", (req, res) => {
    res.cookie("made-in", "India", {signed: true});
    res.send("signed cookie send");
});

app.get("/verify", (req, res) => {
    // console.log(req.cookies);
    console.log(req.signedCookies);

    res.send("verified");
});

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello");  //cookies has name value pair
    res.cookie("India", "namaste");  
    res.send("sent you some cookies");
});

app.get("/greet", (req, res) => {
    let{name = "anonymous"} = req.cookies;
    res.send(`hi, ${name}`);
});

//all routes matches with users
app.use("/users", users);
app.use("/posts", posts);

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("hi, i am root!");
});




app.listen(3000, () => {
    console.log("server is listening to 3000");
});