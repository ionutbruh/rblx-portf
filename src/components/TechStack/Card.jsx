import React from 'react';

function Card({ icon, title }) {
    return (
        <div className="flex flex-col bg-black p-4 items-center">
            <svg className='w-20 h-20' src={icon} alt="" />
            <p className=''>213</p>
        </div>
    );
}

export default Card;
