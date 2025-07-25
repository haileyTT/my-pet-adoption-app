import express from 'express';
import { Pet } from '../models/petModel.js';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Configure Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// route for saving a pet
router.post('/', upload.single('image'), async (request, response) => {
    try {
        if (!request.body.name) {
            return response.status(400).send({
                message: 'Send all required fields: name',
            });
        }
        
        const imageUrl = request.file ? request.file.path : '';
        const newPet = {
            name: request.body.name,
            breed: request.body.breed,
            age: request.body.age,
            imageUrl
        }

        const pet = await Pet.create(newPet);

        return response.status(201).send(pet);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// route for getting all pets from database
router.get('/', async (request, response) => {
    try {
        const pets = await Pet.find({});

        return response.status(200).json({
            count: pets.length,
            data: pets
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
    console.log(request);
    return response.status(234).send('get working successfully');
});

// route for getting one pet from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const pet = await Pet.findById(id);

        if (!pet) {
            return response.status(404).json({ message: 'Pet not found' });
        }

        return response.status(200).json(pet);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// route for updating a pet
router.put('/:id', upload.single('image'), async (request, response) => {
    try {
        if (!request.body.name) {
            return response.status(400).send({
                message: 'Send all required fields: name',
            });
        }

        const { id } = request.params;
        const pet = await Pet.findByIdAndUpdate(id, request.body);

        if (!pet) {
            return response.status(404).json({ message: 'Pet not found' });
        }

        return response.status(200).send({ message: 'Pet updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// route for deleting a pet
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const pet = await Pet.findByIdAndDelete(id);

        if (!pet) {
            return response.status(404).json({ message: 'Pet not found' });
        }

        return response.status(200).json({ message: 'Pet deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;