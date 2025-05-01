import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const PetCard = ({ pet }) => {
    const { name, imageUrl, breed, age } = pet;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                className="w-full h-48 object-cover"
                src={`http://localhost:5555/${imageUrl}`}
                alt={name}
            />
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="font-bold text-xl mb-2">{name}</div>
                <div className='flex gap-x-4'>
                    <Link to={`/pets/details/${pet._id}`} >
                        <BsInfoCircle className='text-xl' />
                    </Link>
                    <Link to={`/pets/update/${pet._id}`} >
                        <AiOutlineEdit className='text-xl' />
                    </Link>
                    <Link to={`/pets/delete/${pet._id}`} >
                        <MdOutlineDelete className='text-xl' />
                    </Link>
                </div>
                {/* <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet.
                </p> */}
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{breed}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{age} years old</span>
            </div>
        </div>
    )
}

export default PetCard