import React, { useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const DeletePet = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

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
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <BackButton />
      {
        loading ? (
          <Spinner />
        ) : (
          <div className="border-2 rounded-lg p-8 shadow-lg flex flex-col items-center mt-6">
            <h3 className="text-xl mb-6 text-center">
              Are you sure you want to delete this pet?
            </h3>
            <button
              onClick={handleDeletePet}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
              Delete
            </button>
          </div>
        )
      }
    </div>
  );
};

export default DeletePet;
