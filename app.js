const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch(err => console.log(err));
    
async function main() {
  await mongoose.connect(MONGO_URL);

}

app.get("/",(req,res)=>{
    res.send("root");
})

app.get("/testListing",async(req,res)=>{
    let sampleListing = new Listing({
        title : "My New Villa",
        description : "By the beach",
        price : 1200,
        location : "Calanguta ,Goa",
        country : "India",
    });

    await sampleListing.save();
    console.log("Smaple was saved");
    res.send("successful testing");
});

app.get("/listings",async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
})

app.listen(8080,()=>{
    console.log("Server is listening to port 8080");
})
