import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowPet = () => {
    const [pet, setPet] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/pets/${id}`)
            .then((response) => {
                setPet(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [id])

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="flex flex-col items-start p-4 w-fit">

                <BackButton />
                <h1 className='text-3xl my-4'>Details</h1>
                {
                    loading ? (
                        <Spinner />
                    ) : (
                        <div className='flex flex-col border-2 p-4 w-fit rounded-xl'>
                            <div className='my-4'>
                                <span className='mr-4 text-xl'>Id</span>
                                <span>{pet._id}</span>
                            </div>
                            <div className='my-4'>
                                <span className='mr-4 text-xl'>Name</span>
                                <span>{pet.name}</span>
                            </div>
                            <div className='my-4'>
                                <span className='mr-4 text-xl'>Age</span>
                                <span>{pet.age}</span>
                            </div>
                            <div className='my-4'>
                                <span className='mr-4 text-xl'>Breed</span>
                                <span>{pet.breed}</span>
                            </div>
                            <div className='my-4'>
                                <span className='mr-4 text-xl'>Create Time</span>
                                <span>{new Date(pet.createdAt).toLocaleString()}</span>
                            </div>
                            <div className='my-4'>
                                <span className='mr-4 text-xl'>Last Updated</span>
                                <span>{new Date(pet.updatedAt).toLocaleString()}</span>
                            </div>
                            <img
                                className="w-full h-48 object-cover"
                                src={`http://localhost:5555/${pet.imageUrl}`}
                                alt={pet.name}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ShowPet