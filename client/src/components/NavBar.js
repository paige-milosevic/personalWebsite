import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@fontsource/roboto/400.css';


const NavBar = () => {







    return (

        <nav className='nav'>
            <a href='/' className='siteTitle'>Paige Milosevic</a>
            <ul className='nav'>
                <li className='active'>
                    <a href='mailto: milosevicpaige@gmail.com'>milosevicpaige@gmail.com</a>
                </li>
                <li>
                    <a href='/phone'>515-209-9343</a>
                </li>
            </ul>
        </nav>


    )


}

export default NavBar;