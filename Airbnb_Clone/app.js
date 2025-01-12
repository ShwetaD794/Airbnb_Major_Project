const express = require("express");
const app = express();
const port = 5050;
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

main()
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.get("/", (req, res) => {
    res.send("Hello from root");
});


app.use("/listings",listings);
app.use("/listings/:id/reviews", reviews);


app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
})

app.use((err, req, res, next) => {
    let {statusCode=500, message="something went wrong!"} = err;
    res.status(statusCode).render("error.ejs", { err});
    // res.status(statusCode).send(message);
});

app.listen(port, (req, res) => {
    console.log(`App is listing at port ${port}`);
});
