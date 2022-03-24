import mongoose from "mongoose";

const businessSchema = mongoose.Schema({
    name: String,
    userID: String,
});

const business = mongoose.model('business', businessSchema);

export default business;