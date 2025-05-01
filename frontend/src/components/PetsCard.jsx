import React from 'react';
import PetCard from './PetCard';

const PetsCard = ({ pets }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {
            pets.map(pet => (
                <PetCard key={pet._id} pet={pet} />
            ))
        }    
        </div>
        
    )
}

export default PetsCard