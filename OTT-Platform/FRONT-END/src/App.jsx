import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Router, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import Tv from './pages/tv/Tv'
import Movies from './pages/movies/Movies'
import List from './pages/List/List'
import Popular from './pages/popular/Popular'
import Language from './pages/language/Language'


const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate('/');
      } else {
        console.log("Logged Out");
        navigate('/login');
      }
    })
  }, [])

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/t' element={<Tv />} />
        <Route path='/l' element={<Language />} />
        <Route path='/m' element={<Movies />} />
        <Route path='/list' element={<List />} />
        <Route path='/p' element={<Popular />} />

        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />


      </Routes>

    </div>
  )
}

export default App