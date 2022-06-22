import React from 'react';
import './Footer.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



const Footer = () => {
    return (
        <>
         <footer className='footer'>
             <p>
             <Link className='link1' to="user">go to user</Link>
             <br></br>
             <Link className='link2' to="admin">go to admin</Link></p>
          </footer>   
        </>
    );
};

export default Footer;