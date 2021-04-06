import React from 'react'
import './Skills.css';
import profile from './img/personal-photo_small.jpg'
import html from './img/html5-white.png'
import css from './img/css3-white.png'
import jscript from './img/JS-white.png'
import reactjs from './img/react-js.png'
import sass from './img/sass-white.png'
import csharp from './img/c-white.png'
import asp from './img/asp-white.png'
import timemanagement from './img/manometer.png'
import conversation from './img/conversation.png'
import commskills from './img/commskills.jpg'
import destination from './img/destination.png'


function Skills() {
    return (

        <div className="skills">

            <div className="skills__profile">
                <h1>Profile</h1>
                    <div className="skills__lead">
                        <img src={profile} className="skills__photo" alt="" />
                        <p className="skills__text">
                        My name is Alberto Vela Castelan. I am a Front End Developer
                        specialised in the three core languages: HTML5, CSS3 and Javascript.
                        I learned principles of programming (Pascal and Basic) and HTML in
                        high school. Four years ago,I had the privilege of rediscovering the
                        world of programming thanks to a friend of mine and I started once
                        again by refreshing my knowledge on HTML and learn CSS and
                        JavaScript. I soon realised that something that I did as a hobby
                        could turn up to become a new challenge in life as I was looking
                        forward to change my career in the IT industry for a long time.
                        </p>
                    </div>
            </div>

            <div className="skills__it">
                <h2>Software Skills</h2>
                <div className="skills__row">
                    <img src={html} alt=""/>
                    <img src={css} alt=""/>
                    <img src={jscript} alt=""/>
                    <img src={reactjs} alt=""/>
                    <img src={sass} alt=""/>
                    <img src={csharp} alt=""/>
                    <img src={asp} alt=""/>
                </div>
                
                <div className="skills__other">
                    <h2>Other Skills</h2>
                    <div className="skills__row">
                        <div className="skills__col">
                            <img src={timemanagement} alt=""/>
                            <p>Time management</p>
                        </div>
                        <div className="skills__col">
                            <img src={conversation} alt=""/>
                            <p>Team working</p>
                        </div>
                        <div className="skills__col">
                            <img src={commskills} alt=""/>
                            <p>Communication Skills</p>
                        </div>
                        <div className="skills__col">
                            <img src={destination} alt=""/>
                            <p>Flexible To Work Abroad</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
