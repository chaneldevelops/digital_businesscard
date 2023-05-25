import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Info() {
   return (<div className="info">
        <img src="/chanel-photo.jpg" alt="photo of Chanel" />
        <h1 className="info-name">Chanel Waters</h1>
        <h5 className="info-role">Creative Front-End Developer</h5>
        <p className="info-website">
            <a href="https://chaneldevelops.github.io" 
            target="_blank"></a>
        </p>
        
        <div className="contact-btns">
            <a href="mailto:chanel.developsdesigns@gmail.com">
                <button>
            <FontAwesomeIcon icon={faEnvelope} className="email-icon" /> {/* email icon */}
                 Email
            </button>
            </a>
            <a href="https://www.linkedin.com/in/chanel-thedesigner/">
                <button>
            <FontAwesomeIcon icon={faLinkedin} />
                 Connect
            </button>
            </a>

            
        </div>
    </div>)
}