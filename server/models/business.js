import mongoose from "mongoose";

const businessSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    userEmail: String,
});

const business = mongoose.model('business', businessSchema);

export default business;