const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        set: (v) => 
            v === "" ? "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
        default: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;