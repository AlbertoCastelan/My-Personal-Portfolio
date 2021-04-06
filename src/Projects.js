import React from 'react'
import './Projects.css'
import bacartegia from './img/bacartegia.png'
import bodymass from './img/bodymasscalculator.png'
import bookapp from './img/bookapp.png'
import macondo from './img/macondo.png'
import videogame from './img/videogame.png'

function Projects() {
    return (
    <div className="projects">
        <h1>Projects</h1>

        <div className="projects__row">
            <div className="projects__box">
                <a
                    href="http://albertocastelan.co.uk/Bacartegia/index.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={bacartegia} alt="Bacartegia Studios" />
                </a>
                <h3>Coworking space and web design</h3>
                <p>Built with HTML5, CSS3 and Vanilla Javascript and AJAX</p>
            </div>

            <div className="projects__box">
                    <a
                    href="http://albertocastelan.co.uk/BMICalc/index.html"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img src={bodymass} alt="BMI Calculator" />
                    </a>
                <h3>Calculate your Body Mass with this practical calculator</h3>
                <p>Built with HTML5, CSS3 and Vanilla Javascript</p>
            </div>

            <div className="projects__box">
                    <a
                    href="http://albertocastelan.co.uk/bookshop/index.html#/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img src={bookapp} alt="Bookshop App" />
                    </a>
                <h3>A simple library React App </h3>
                <p>Built with HTML5, CSS3, Bootstrap and React JS</p>
            </div>

            <div className="projects__box">
                    <a
                    href="http://albertocastelan.co.uk/CafeMacondo/index.html"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img src={macondo} alt="Gran Cafe Macondo" />
                    </a>
                <h3>Traditional Colombian Coffee Shop and Library</h3>
                <p>Built with HTML5, CSS3 and Vanilla Javascript</p>
            </div>

            <div className="projects__box">
                    <a 
                    href="http://myportfolio.albertocastelan.com" 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img src={videogame} alt="Videogame DB" />
                    </a>
                <h3>Videogame Database file App</h3>
                <p>Built with Razor and ASP.NET</p>
            </div>
        </div>
    </div>
    )
}

export default Projects
