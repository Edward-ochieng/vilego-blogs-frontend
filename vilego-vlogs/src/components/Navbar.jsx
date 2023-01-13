import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
        <div className="absolute inset-y-0 w-16 ...">
        <nav className="float-left ...">
            <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10'>
                <li class="text-pink-600 hover:text-black hover:underline ..."><Link to='/'>Home</Link></li>
                <li class="text-pink-600 hover:text-black hover:underline ..."><Link to='/signup'>Signup</Link></li>
                <li class="text-pink-600 hover:text-black hover:underline ..."><Link to='/about'>About</Link></li>
                <li class="text-pink-600 hover:text-black hover:underline ..."><Link to='/login'>Login</Link></li>
                <li class="text-pink-600 hover:text-black hover:underline ..."><Link to='/blog'>Blog</Link></li>
            </ul>
            </nav>
      </div>
);
}

