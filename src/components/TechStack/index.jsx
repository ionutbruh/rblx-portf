import React from 'react';
import icons from './icons';

function TechStack() {
    return (
        <div>
            <div className="flex flex-col">
                <div className="p-4">
                    <h1 className="font-vhs text-3xl"> 0.1 My Tech Stack</h1>
                </div>

                <div className="flex space-between space-x-10">
                    {
                        icons.map((icon, index) => (
                            <img key={index} width={100} height={100} src={icon} alt={`Icon ${index}`} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TechStack;
