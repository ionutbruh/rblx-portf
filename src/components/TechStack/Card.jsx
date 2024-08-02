import React from 'react';

function Card({src, title }) {
    return (
        <div className="flex flex-col items-center p-2">
            <img className='w-20 h-20' src={src} alt="" />
            <p className='font-vhs'>{title}</p>
        </div>
    );
}

export default Card;
