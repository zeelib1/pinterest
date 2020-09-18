import React, {useState, useEffect} from 'react';
import '../Styles/Nav.css';
import { Link } from 'react-router-dom';
function Nav (){
    return(
        <nav>
            <Link className="navLink" to='/'>
             <li className="homeNavigationLink">Home</li>
            </Link>

            <Link className="navLink" to='/profile'>
             <li>Profile</li>
            </Link>

            <Link className="navLink" to='chart'>
             <li>Top Rated</li>
            </Link>
            
            
        </nav>
    )
}

export default Nav;