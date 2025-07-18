import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar py-2 px-10 flex justify-between items-center md:grid md:grid-cols-5">
            <Link to='/'>Logo</Link>
            {/* hamburger menu */}
            <button onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none md:hidden">
                    {isOpen ? (
                        <div><BsXLg/></div>) : (<div><BsList/></div>)
                    }
            </button>
            <div className={`w-full h-full md:flex md:items-center md:w-auto 
                    md:justify-between absolute md:relative top-16 left-0 md:top-0 
                    md:left-0 p-4 md:p-0 md:bg-inherit bg-inherit col-start-4 col-end-6
                    transition-all z-20 duration-500 ease-in-out transform ${isOpen ? 
                    'translate-x-0' : 'translate-x-full hidden'
                        } md:translate-x-0`}>
                <NavLink onClick={() => setIsOpen(!isOpen)} className="block text-center font-medium my-10 md:m-0" to='./'>Home</NavLink>
                <NavLink onClick={() => setIsOpen(!isOpen)} className="block text-center font-medium my-10 md:m-0" to='./mission'>Mission</NavLink>
                <NavLink onClick={() => setIsOpen(!isOpen)} className="block text-center font-medium my-10 md:m-0" to='./connect'>Get Involved</NavLink>
                <button onClick={() => setIsOpen(!isOpen)} className="border-pink-300 border-2 pinkfill rounded-md py-1 px-4 text-white">DONATE</button>

            </div>

        </nav>
    );
};

export default Navbar;