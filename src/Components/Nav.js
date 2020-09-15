import React, {useState, useEffect} from 'react';
import '../Styles/Nav.css';
import { Link } from 'react-router-dom';
function Nav (){
    return(
        <nav>
            <Link to='/'>
             <li>Home</li>
            </Link>

            <Link to='/post'>
             <li>Post</li>
            </Link>

            <Link to='chart'>
             <li>Chart</li>
            </Link>
            
            
        </nav>
    )
}

export default Nav;