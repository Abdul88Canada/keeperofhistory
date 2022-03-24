import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import businessRoutes from './routes/business.js';
import userRoutes from './routes/users.js';


const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors);

app.use('/business', businessRoutes);
app.use('/user', userRoutes);

const DB_CONNECTION_URL = 'mongodb+srv://3li:Tumbis@cluster0.ccb75.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => 
app.listen(PORT, () => {
    console.log('Listing on port: ' + PORT);
})
).catch((error) => console.log(error.message));

