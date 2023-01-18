import React from 'react';
import Blog from './components/Blog'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <Footer/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
    

}

export default App;
