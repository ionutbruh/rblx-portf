import { useRef, useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import anime from "animejs";

import Button from "src/components/Button.jsx";

function Header() {
    const typewriterTextRef = useRef();
    const pfpRef = useRef();

    useEffect(() => {
        // Initialize Typewriter effect
        new Typewriter(typewriterTextRef.current, {
            strings: [
                'Scripter.',
                'Web Developer.',
                'Freelancer.',
                'Problem-Solver.',
            ],
            autoStart: true,
            loop: true
        });

        // Initialize Anime.js animation for the neon effect
        anime({
            targets: typewriterTextRef.current,
            textShadow: [
                '0 0 2px #fff, 0 0 4px #fff, 0 0 6px #7592A1, 0 0 8px #7592A1, 0 0 12px #7592A1, 0 0 16px #7592A1, 0 0 20px #7592A1',
                '0 0 4px #fff, 0 0 8px #fff, 0 0 12px #7592A1, 0 0 16px #7592A1, 0 0 24px #7592A1, 0 0 32px #7592A1, 0 0 40px #7592A1',
            ],
            duration: 2000,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true
        });

        function tweeen_pfp() {
            anime({
                targets: pfpRef.current,
                translateX: function () {
                    return anime.random(-2, 2);
                },
                translateY: function () {
                    return anime.random(-4, 4);
                },
                easing: 'easeInOutQuad',
                duration: 750,
                complete: tweeen_pfp
            });
        }
        tweeen_pfp();

    }, []);

    return (
        <div className="flex flex-col bg-background space-x-20 items-center justify-center p-10 md:p-20">

            <div className="flex flex-col bg-background space-y-6">

                <div className="flex flex-col space-y-3 text-white">
                    <p className="font-caviar text-xs">Hi, my name is</p>
                    <h1 className="font-vhs text-4xl md:text-6xl">JohnCode</h1>
                    <div className="flex items-start text-white space-x-4">
                        <h1 className="font-vhs text-4xl md:text-6xl">I'm a</h1>
                        <h1 ref={typewriterTextRef} className="font-vhs text-4xl md:text-6xl neon-accent">.</h1>
                    </div>
                </div>

                <p className="font-caviar text-xs md:text-sm text-white lg:w-2/3">
                    Velit do cillum sunt culpa. Velit ansim velit laborum nostrud voluptate voluptate Lorem voluptate sit. Voluptate est aliqua laborum tempor laboris consectetur incididunt reprehenderit ullamco sint. Ea id incididunt consectetur aute est ad nulla eiusmod. Nulla mollit tempor amet pariatur. Fugiat reprehenderit pariatur aute velit ea sit anim ad est aliqua cillum exercitation sit. Sint consectetur non nulla officia duis.
                </p>

                
            </div>

        </div>

    );
}

export default Header;
