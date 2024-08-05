import React from 'react';

function Pfp({ src }) {
    return (
        <div className="relative w-52 h-52 flex justify-center items-center">

            <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="absolute z-10 neon-base"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="white"
                    strokeWidth="5"
                    fill="none"
                />
            </svg>

            <img
                src={src}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{
                    clipPath: 'circle(80px at center)'
                }}
            />

        </div>
    );
}

export default Pfp;
