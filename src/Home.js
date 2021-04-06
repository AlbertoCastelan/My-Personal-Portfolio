import React from 'react'
import './Home.css'
import logo from './img/logo-blanco.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <Link to="/skills">
                <img 
                    src={logo}
                    className="home__logo"
                    alt=""
                />
            </Link>
        </div>
    )
}

export default Home
