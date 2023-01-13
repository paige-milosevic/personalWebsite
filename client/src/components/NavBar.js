import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@fontsource/roboto/400.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


export default function NavBar() {







    return (

        <nav className='nav'>
            <div>
                <Link to='/' className='siteTitle'>
                    Paige Milosevic
                </Link>
            </div>
            <ul className='nav'>
                <CustomLink to='/projects'>Projects</CustomLink>
                <CustomLink to='/resume'>Resume</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
            </ul>
        </nav>


    )



}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});

    return (
        <li className={isActive? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>

        </li>
    )
}