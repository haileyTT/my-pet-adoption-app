import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreatePet from './pages/CreatePet';
import DeletePet from './pages/DeletePet';
import ShowPet from './pages/ShowPet';
import UpdatePet from './pages/UpdatePet';


const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/pets/create' element = {<CreatePet />} />
      <Route path='/pets/delete/:id' element = {<DeletePet />} />
      <Route path='/pets/update/:id' element = {<UpdatePet />} />
      <Route path='/pets/details/:id' element = {<ShowPet />} />
    </Routes>
  )
}

export default App