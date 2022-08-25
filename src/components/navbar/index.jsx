import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css'
import logo from '../../assets/img/jornal.png';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                <Link className='Link' to={"/"}>
                    <img src={logo} alt="Logo" />
                    <h2 className='h2'>Pics Blog</h2>
                </Link>
            </div>
            <div className='links'>
                <Link className='navlink' to={"/"}>Home</Link>
                <Link className='navlink' to={"/sobre"}>Sobre</Link>
            </div>
        </nav>
    )
}