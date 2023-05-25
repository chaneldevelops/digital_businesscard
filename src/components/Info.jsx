import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faLinkedin } from "@fortawesome/free-solid-svg-icons";




export default function Info() {
   return (<div className="info">
        <img src="/chanel-photo.jpg" alt="photo of Chanel" />
        <h1>Chanel Waters</h1>
        <h5>Creative Front-End Developer</h5>
        
        <div className="contact-btns">
            <button>
            {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
                 Email<a href="mailto:chanel.developsdesigns@gmail.com">
                </a>
            </button>

            <button>
            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                 Connect<a href="#">
                </a>
            </button>
        </div>
    </div>)
}