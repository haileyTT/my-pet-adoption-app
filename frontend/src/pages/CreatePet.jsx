import React, { useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

const CreatePet = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [loading, setLoading] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const handleSavePet = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('age', age);
        formData.append('breed', breed);
        if (image) {
            formData.append('image', image);
        }

        setLoading(true);
        axios.post(`http://localhost:5555/pets`, formData)
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
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="flex flex-col items-start p-4 w-fit">

                <BackButton />
                <h1 className='text-3xl my-4'>Create Pet</h1>
                {
                    loading ? (
                        <Spinner />
                    ) : (
                        <div className='flex flex-col border-2 p-4 w-fit rounded-xl'>
                            <div className='my-4'>
                                <label className='mr-4 text-xl'>Name</label>
                                <input
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='border-2 p-4 w-full' />
                            </div>
                            <div className='my-4'>
                                <label className='mr-4 text-xl'>Age</label>
                                <input
                                    type='text'
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className='border-2 p-4 w-full' />
                            </div>
                            <div className='my-4'>
                                <label className='mr-4 text-xl'>Breed</label>
                                <input
                                    type='text'
                                    value={breed}
                                    onChange={(e) => setBreed(e.target.value)}
                                    className='border-2 p-4 w-full' />
                            </div>
                            <div className='my-4'>
                                <label className='mr-4 text-xl'>Image</label>
                                <input
                                    type='file'
                                    accept='image/*'
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className='border-2 p-2'
                                />
                            </div>
                            <button className='p-2 m-8' onClick={handleSavePet}>
                                Save
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CreatePet