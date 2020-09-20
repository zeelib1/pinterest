import React, {useState, useEffect} from 'react';
import '../Styles/Nav.css';
import { Link } from 'react-router-dom';
function Nav (){
    return(
        <nav>
            <Link className="navLink" to='/'>
             <li className="homeNavigationLink font-effect-anaglyph">Home</li>
            </Link>

            <Link className="navLink" to='/profile'>
             <li className="font-effect-anaglyph">Profile</li>
            </Link>

            <Link className="navLink" to='chart'>

             <li className="font-effect-anaglyph">Ratings</li>

            </Link>
            
            
        </nav>
    )
}

export default Nav;