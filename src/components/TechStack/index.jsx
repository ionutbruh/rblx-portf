import React, { useEffect, useRef } from 'react';
import Card from './Card';
import card_data from "./card_data";
import anime from 'animejs';

function TechStack() {
    const cardsRef = useRef([]);

    useEffect(() => {

        anime({
            targets: cardsRef.current,
            translateY: -5,
            delay: anime.stagger(100) // increase delay by 100ms for each elements.
        });

    }, []);

    return (
        <div className='bg-primary'>
            <div className="flex flex-wrap justify-center p-10 space-x-10">
                {
                    card_data.map((data, index) => (
                        <Card
                            className="ts-card"
                            key={index}
                            src={data.src}
                            title={data.title}
                            ref={el => cardsRef.current[index] = el}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default TechStack;
