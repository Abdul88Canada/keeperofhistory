import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fName: String,
    lName: String,
    email: {
        type: String,
        unique: true
    }
});

const user = mongoose.model('user', userSchema);

export default user;