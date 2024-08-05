import { useRef, useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';

import Button from "src/components/Button";

function Header() {
    const typewriterTextRef = useRef();

    useEffect(() => {
        // Initialize Typewriter effect
        new Typewriter(typewriterTextRef.current, {
            strings: [
                'Scripter',
                'Web Developer',
                'Bot Programmer',
            ],
            autoStart: true,
            loop: true
        });

    }, []);

    return (

        <div className="flex flex-col items-center justify-center bg-background h-screen">

            <div className="w-2/3 flex flex-col items-center space-y-10">

                <div className="space-y-3">
                    <div className="flex items-start w-full">
                        <h1 className="text-text font-vhs text-7xl">👋 Hi, I'm hatelua</h1>
                    </div>

                    <p className="font-caviar text-xl text-text">
                        My name is Andrei, I am a <p ref={typewriterTextRef} className="inline text-text font-caviar"></p> based in Romania.
                    </p>

                    <p className="font-caviar text-xl text-text">
                        When you work with me, it's all about passion, quality and speed. ⚡
                    </p>
                </div>

                <div className="flex flex-wrap justify-between gap-4 text-lg">
                    <Button text="My work" />
                    <Button text="Discord" />
                </div>

            </div>

        </div>

    );
}

export default Header;
