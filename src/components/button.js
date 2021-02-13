import React from 'react';
import { Link } from 'gatsby'

const Button = ({text, link, className, id}) => {
    return (
        <Link 
            className={className} 
            to={link} 
            aria-label="about"
            id={id}
        >
        {text}
        </Link>
    )
}

export default Button;
