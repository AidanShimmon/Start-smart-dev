import React from "react";
import Img from "gatsby-image";

const Project = ({imageUrl, imageAlt, title, content, link}) => {
    return(
        <a href={link} target="_blank" className="projects__tile">
            <div className="projects__tile__content">
                <Img 
                    className="projects__tile__image"
                    fluid={imageUrl}
                    alt={imageAlt}
                />

                <div className="projects__tile__text">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </a>
    )
}

export default Project;