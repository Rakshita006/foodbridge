import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import PostFood from './pages/PostFood.jsx';
import ClaimedFood from './pages/ClaimedFood.jsx';
import { Toaster } from 'react-hot-toast';
import MyPosts from './pages/MyPosts.jsx';
import About from './pages/About.jsx';

const App = () => {

  const [userName, setUserName]=useState('')
  

  useEffect(()=>{
    const storedName=localStorage.getItem('foodbridge_user')
    if(storedName){
      setUserName(storedName)
    }else{
      const name=prompt('Welcome to FoodBridge! Please enter your name:')
      if(name){
        localStorage.setItem('foodbridge_user', name)
        setUserName(name)
      }
    }
  },[])

  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#111827',
            color: '#fff',
            border: '1px solid #374151',
            fontSize: '14px'
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff'
            }
          }
        }}
      />
      <Navbar userName={userName} />
      <Routes>
        <Route path='/' element={<Home userName={userName} />} />
        <Route path='/post' element={<PostFood userName={userName} />} />
        <Route path='/claimed' element={<ClaimedFood />} />
        <Route path='/myposts' element={<MyPosts />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App