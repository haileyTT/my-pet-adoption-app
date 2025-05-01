import React from 'react';


const PetCard = ({ pet }) => {
    const { name, imageUrl, breed, age } = pet;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                className="w-full h-48 object-cover"
                src={`http://localhost:5555/${imageUrl}`}
                alt={name}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{breed}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{age} years old</span>
            </div>
        </div>
    )
}

export default PetCard