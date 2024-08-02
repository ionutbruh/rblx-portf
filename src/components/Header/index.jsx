import { useRef, useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import anime from "animejs";

function Header() {
    const typewriterTextRef = useRef();

    useEffect(() => {
        // Initialize Typewriter effect
        new Typewriter(typewriterTextRef.current, {
            strings: [
                'Roblox Developer.',
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
    }, []);

    return (
        <div className="w-full flex flex-col items-center space-y-5 bg-background p-20">
            <div className="flex flex-col items-start space-y-3 text-white w-full">
                <p className="font-caviar text-xs ">Hi, my name is</p>
                <h1 className="font-vhs text-6xl">Andrei Dev.</h1>
                <div className="flex items-start text-white space-x-4">
                    <h1 className="font-vhs text-6xl">I am a</h1>
                    <h1 ref={typewriterTextRef} className="font-vhs text-6xl neon-accent">.</h1>
                </div>
            </div>
            <div className="flex justify-start">
                <p className="w-1/3 font-caviar text-sm text-white">
                    Velit do cillum sunt culpa. Velit anim velit laborum nostrud voluptate voluptate Lorem voluptate sit. Voluptate est aliqua laborum tempor laboris consectetur incididunt reprehenderit ullamco sint. Ea id incididunt consectetur aute est ad nulla eiusmod. Nulla mollit tempor amet pariatur. Fugiat reprehenderit pariatur aute velit ea sit anim ad est aliqua cillum exercitation sit. Sint consectetur non nulla officia duis.
                </p>
            </div>
        </div>
    );
}

export default Header;
