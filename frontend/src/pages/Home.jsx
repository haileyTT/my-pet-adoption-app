import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/pets')
            .then((response) => {
                setPets(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Pets List</h1>
                <Link to='/pets/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>Name</th>
                            <th className='border border-slate-600 rounded-md'>Age</th>
                            <th className='border border-slate-600 rounded-md'>Breed</th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pets.map((pet, index) => (
                                <tr key={pet._id} className='h_8'>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {pet.name}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {pet.age}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {pet.breed}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        <div className='flex justify-center gap-x-4'>
                                            <Link to={`/pets/details/${pet._id}`} >
                                                <BsInfoCircle className='text-2xl' />
                                            </Link>
                                            <Link to={`/pets/update/${pet._id}`} >
                                                <AiOutlineEdit className='text-2xl' />
                                            </Link>
                                            <Link to={`/pets/delete/${pet._id}`} >
                                                <MdOutlineDelete className='text-2xl' />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Home