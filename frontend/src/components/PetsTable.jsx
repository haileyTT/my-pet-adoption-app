import React from 'react'

const PetsTable = ({ pets }) => {
    return (
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
    )
}

export default PetsTable