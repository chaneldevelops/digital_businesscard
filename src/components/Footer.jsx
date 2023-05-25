import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/chaneldevelops" 
            target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/chanel-thedesigner/" 
            target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            </a>
        </div>
    )
}