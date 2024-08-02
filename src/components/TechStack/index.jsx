import React from 'react';
import Card from './Card';

import card_data from "./card_data"

function TechStack() {
    return (
        <div className='bg-primary'>
            <div className="flex flex-wrap justify-center space-x-10">
                {
                    card_data.map((data, index) => (
                        <Card src={data.src} title={data.title}/>
                    ))
                }
            </div>
        </div>
    );
}

export default TechStack;
