const express = require("express");
const router = express.Router();

//Posts
//Index 
router.get("/", (req, res) => {
    res.send("GET for posts");
});

//show 
router.get("/:id", (req, res) => {
    res.send("GET for show posts id");
});

//POST 
router.get("/", (req, res) => {
    res.send("POST for posts ");
});

//DELETE 
router.get("/:id", (req, res) => {
    res.send("DELETE for posts id");
});

module.exports = router;