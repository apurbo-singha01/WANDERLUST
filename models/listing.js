const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image : {
        type : String,
        default : "https://unsplash.com/photos/alpine-village-on-lake-with-church-and-mountains--tgfpopqIV4", // if link is undefined then it is used
        set : (v) =>  // if link is empty
             v === "" 
          ?"https://unsplash.com/photos/alpine-village-on-lake-with-church-and-mountains--tgfpopqIV4"
           : v,

    },
    price : Number,
    location : String,
    country : String,
})

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;