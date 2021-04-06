import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {

    const [click, setClick] = useState();
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <div className="header">
            
            <div class="header__nav">

                
                <div className="header__toggle" onClick={handleClick}>
                    <span className={click ? "header__bars open" : "header__bars"}></span>    
                    <span className={click ? "header__bars open" : "header__bars"}></span>
                    <span className={click ? "header__bars open" : "header__bars"}></span>   
                </div>

                <ul className={click ? "header__list responsive" : "header__list"}>
                    <li onClick={closeMobileMenu}>
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
               
            </div>

       </div>
    )
}

export default Header
