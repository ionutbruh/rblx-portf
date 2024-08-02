import React, { forwardRef } from 'react';

const Card = forwardRef(({src, title }, ref) => (
    <div className="flex flex-col items-center p-3 space-y-2" ref={ref}>
        <img className='w-20 h-20' src={src} alt={title} />
        <h3 className='font-vhs'>{title}</h3>
    </div>
));

export default Card;
