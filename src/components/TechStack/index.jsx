import React from 'react';
import Card from './Card';

import card_data from "./card_data"

function TechStack() {
    return (
        <div>
            <div className="flex flex-col">
                <div className="p-4">
                    <h1 className="font-vhs text-3xl"> 0.1 My Tech Stack</h1>
                </div>

                <div className="flex space-between space-x-10 p-4">
                    {
                        card_data.map((icon, index) => (
                            <Card icon={icon} title={"css"} description={"css"}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TechStack;
