import React from 'react';
import Blog from './components/Blog'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/homepage" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  )
    

}

export default App;
