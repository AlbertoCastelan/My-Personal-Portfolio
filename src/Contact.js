import React, { useState } from 'react'
import './Contact.css'
import { db } from './firebase'
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    

    const handleSubmit = (e) => {
        e.preventDefault();
        

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message
        })
        .then(() => {
            alert("Thank you, your message has been submitted. I will contact you as soon as possible");
            
        })
        .catch(error => {
            alert(error.message);
            
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact">
           
                    <h1>Contact</h1>
                    
                    <div className="contact__form">
                        
                        <h3>Please feel free to contact me for any further information you may require about myself</h3>
                        <form className="form" onSubmit={handleSubmit}>
                            <input 
                            className="contact__input" 
                            type="text" 
                            placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                            <input 
                            className="contact__input" 
                            type="email" 
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                            <textarea 
                            className="contact__message" 
                            type="textarea" 
                            placeholder="Please type your message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            />

                            <button type="submit" className="contact__button--active">Contact</button>
                        </form>
                    </div>

                    <div className="contact__info">
                        <p><EmailIcon id="contact__icon"/>albertovelacastelan@gmail.com</p>
                        <p><PhoneAndroidIcon id="contact__icon"/>07514952220</p>
                    </div>

                    <div className="contact__social">
                        <a 
                        href="https://www.facebook.com/alberto.castelan.5876/" 
                        target="_blank"
                        rel="noreferrer"
                        >
                            <FacebookIcon id="contact__social--icon"/>
                        </a>

                        <a 
                        href="https://www.instagram.com/faustvandrake/" 
                        target="_blank" 
                        rel="noreferrer">
                            <InstagramIcon id="contact__social--icon"/>
                        </a>

                        <a 
                        href="https://www.linkedin.com/in/alberto-vela-castelan-1a285112a/" 
                        target="_blank"
                        rel="noreferrer"
                        >
                            <LinkedInIcon id="contact__social--icon"/>
                        </a>

                        <a 
                        href="https://github.com/AlbertoCastelan" 
                        target="_blank"
                        rel="noreferrer"
                        >
                            <GitHubIcon id="contact__social--icon"/>
                        </a>
                    </div>

                    <div className="contact__map">
                        <iframe 
                        title="My Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.2387535880384!2d-0.15734908434468814!3d51.47213172110231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605a785240947%3A0x482ad7cb1f843f13!2sBattersea%2C+London+SW11+5BZ!5e0!3m2!1sen!2suk!4v1554810691820!5m2!1sen!2suk">
                        </iframe>
                    </div>
           
        </div>
    )
}

export default Contact
