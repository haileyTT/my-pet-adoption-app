import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

const CreatePet = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();
    const handleSavePet = () => {
        const data = {
            name,
            age,
            breed
        };
        setLoading(true);
        axios.post(`http://localhost:5555/pets`, data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            })
    }
    return (
        <div>CreatePet</div>
    )
}

export default CreatePet