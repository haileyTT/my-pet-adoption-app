import express from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
// import { Pet } from './models/petModel.js';
import petsRoute from './routes/petsRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for hadling CORS policy
// simply allow all origins
app.use(cors());

// route for default GET
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('server listening');
});

app.use('/pets', petsRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        // only listen if successfully connected to database
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

