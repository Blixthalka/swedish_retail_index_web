import React from 'react';

const Button = ({ className, onClick, text}) => {


    return (
        <button className={`text-white text-sm py-2 px-4 border border-gray-800  hover:bg-gray-800 rounded-full ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
