import React, { useRef, useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import anime from 'animejs';
import Button from "src/components/Button";

function Header() {
    const typewriterTextRef = useRef();
    const headerRef = useRef();
    const buttonsRef = useRef();

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

        // Apply anime.js animations
        anime({
            targets: headerRef.current,
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 1500,
            easing: 'easeOutExpo'
        });

        anime({
            targets: buttonsRef.current.children,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1500,
            delay: 300,
            easing: 'easeOutExpo'
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-background h-screen">
            <div className="w-2/3 flex flex-col items-center space-y-10" ref={headerRef}>
                <div className="space-y-3">
                    <div className="flex items-start w-full">
                        <h1 className="text-text font-vhs text-7xl">👋 Hi, I'm hatelua</h1>
                    </div>
                    <p className="font-caviar text-xl text-text">
                        My name is Andrei, I am a <span ref={typewriterTextRef} className="inline text-text font-caviar"></span> based in Romania.
                    </p>
                    <p className="font-caviar text-xl text-text">
                        When you work with me, it's all about passion, quality and speed. ⚡
                    </p>
                </div>
                <div className="flex justify-between gap-4 text-lg" ref={buttonsRef}>
                    <Button text="My work" />
                    <Button text="Discord" />
                </div>
            </div>
        </div>
    );
}

export default Header;
