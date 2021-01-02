import React from 'react'
import './SocialMedia.css';
const SocialMedia = ({display}) => {
    return (
        <div className={`d-flex ${display} socialMedia`}>
           <i className="fab fa-facebook-f"></i>
           <i className="fab fa-instagram"></i>
           <i className="fab fa-youtube"></i>
           <i className="fab fa-linkedin-in"></i>
           <i className="fab fa-github-alt"></i>
        </div>
    )
}

export default SocialMedia
