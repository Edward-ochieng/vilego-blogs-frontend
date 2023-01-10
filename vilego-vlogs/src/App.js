import react from 'react';
import ReactDOM from'react-dom';
import Article from './components/Article'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article" element={<Article/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
        </BrowserRouter>
  )
    

}

export default App;