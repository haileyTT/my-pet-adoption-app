import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePet = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  // get the current pet first
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/pets/${id}`)
      .then((response) => {
        setName(response.data.name);
        setAge(response.data.age);
        setBreed(response.data.breed);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [id])

  // function to update the current pet
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
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Pet</h1>
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
            <button className='p-2 m-8' onClick={handleSavePet}>
              Save
            </button>
          </div>
        )
      }
    </div>
  )
}

export default UpdatePet