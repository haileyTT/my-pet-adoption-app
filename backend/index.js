import express from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
// import { Pet } from './models/petModel.js';
import petsRoute from './routes/petsRoute.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

