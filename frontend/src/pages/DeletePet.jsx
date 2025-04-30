import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const DeletePet = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // function to delete the current pet
  const handleDeletePet = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/pets/${id}`)
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
      <h1 className='text-3xl my-4'>Details</h1>
      {
        loading ? (
          <Spinner />
        ) : (
          <div className='flex flex-col border-2 p-4 w-fit rounded-xl'>
            <h3 className='flex flex-col items-center p-8'>Are you sure you want to delete this pet?</h3>
            <button
              onClick={handleDeletePet}
              className='p-4 m-8 w-full'>
              Delete
            </button>
          </div>
        )
      }
    </div>
  )
}

export default DeletePet