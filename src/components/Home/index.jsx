import React, { useRef, useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import anime from 'animejs';

function Home() {
    const typewriterTextRef = useRef();
    const headerRef = useRef();
    const bottomDivRef = useRef(); // New reference for the bottom div

    useEffect(() => {
        // Initialize Typewriter effect
        new Typewriter(typewriterTextRef.current, {
            strings: [
                'Roblox Scripter',
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

        // New animation for the bottom div
        anime({
            targets: bottomDivRef.current,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1500,
            easing: 'easeOutExpo',
            delay: 500 // Add delay for the bottom div to appear after the buttons
        });

        // Blob path animation
        anime({
            targets: ".blob-pfp-path",
            d: [
                { value: "M55.6,-18C63,4.9,53.9,33.2,33.1,49.1C12.4,65.1,-20,68.6,-36.9,55.3C-53.9,41.9,-55.4,11.7,-46.6,-12.9C-37.9,-37.6,-18.9,-56.7,2.6,-57.5C24,-58.4,48.1,-40.9,55.6,-18Z" },
            ],
            easing: function(el, i, total) {
                return function(t) {
                    // Introduce a dynamic phase shift and amplitude based on the index
                    const phaseShift = (i / total) * Math.PI * 2; // Creates a wave effect
                    const amplitude = Math.pow(0.8 + (i / total) * 0.2, 2); // Smoother amplitude scaling
                    return Math.pow(Math.sin(t * Math.PI + phaseShift), 3) * amplitude; // Smooth transition with easing
                }
            },            
            duration: 10000,
            loop: true,
            direction: 'alternate'
        });

    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-background h-screen">
            <div className="flex flex-col items-center space-y-10" ref={headerRef}>

                <div className="space-y-3 mb-52 p-10">

                    <div className="flex justify-center">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
                            <defs>
                                <clipPath id="blobClip">
                                    <path className="blob-pfp-path" d="M66.1,-17.8C74.3,3.6,61.6,35.5,41.9,47.4C22.1,59.3,-4.6,51.3,-22.4,37C-40.1,22.6,-48.8,2,-43.5,-15.4C-38.3,-32.8,-19.1,-47,4.9,-48.6C29,-50.2,58,-39.2,66.1,-17.8Z" transform="translate(100 100)" />
                                </clipPath>
                            </defs>

                            <image href="https://img6.arthub.ai/64a007fc-a355.webp" x="25" y="25" width="150" height="150" clip-path="url(#blobClip)" />


                            <path className="blob-pfp-path" fill="none" stroke="#FFFFFF" strokeWidth="2" d="M66.1,-17.8C74.3,3.6,61.6,35.5,41.9,47.4C22.1,59.3,-4.6,51.3,-22.4,37C-40.1,22.6,-48.8,2,-43.5,-15.4C-38.3,-32.8,-19.1,-47,4.9,-48.6C29,-50.2,58,-39.2,66.1,-17.8Z" transform="translate(100 100)" />
                            <path className="blob-pfp-path" fill="none" stroke="#FFFFFF" strokeWidth="1" d="M66.1,-17.8C74.3,3.6,61.6,35.5,41.9,47.4C22.1,59.3,-4.6,51.3,-22.4,37C-40.1,22.6,-48.8,2,-43.5,-15.4C-38.3,-32.8,-19.1,-47,4.9,-48.6C29,-50.2,58,-39.2,66.1,-17.8Z" transform="translate(100 100)" />
                            <path className="blob-pfp-path" fill="none" stroke="#FFFFFF" strokeWidth=".5" d="M66.1,-17.8C74.3,3.6,61.6,35.5,41.9,47.4C22.1,59.3,-4.6,51.3,-22.4,37C-40.1,22.6,-48.8,2,-43.5,-15.4C-38.3,-32.8,-19.1,-47,4.9,-48.6C29,-50.2,58,-39.2,66.1,-17.8Z" transform="translate(100 100)" />
                            <path className="blob-pfp-path" fill="none" stroke="#FFFFFF" strokeWidth=".5" d="M66.1,-17.8C74.3,3.6,61.6,35.5,41.9,47.4C22.1,59.3,-4.6,51.3,-22.4,37C-40.1,22.6,-48.8,2,-43.5,-15.4C-38.3,-32.8,-19.1,-47,4.9,-48.6C29,-50.2,58,-39.2,66.1,-17.8Z" transform="translate(100 100)" />
                            <path className="blob-pfp-path" fill="none" stroke="#FFFFFF" strokeWidth=".5" d="M66.1,-17.8C74.3,3.6,61.6,35.5,41.9,47.4C22.1,59.3,-4.6,51.3,-22.4,37C-40.1,22.6,-48.8,2,-43.5,-15.4C-38.3,-32.8,-19.1,-47,4.9,-48.6C29,-50.2,58,-39.2,66.1,-17.8Z" transform="translate(100 100)" />

                        </svg>
                    </div>


                    <div className="w-full">
                        <h1 className="text-text font-vhs text-7xl text-center sm:text-start ">👋 Hi, I'm hatelua</h1>
                    </div>

                    <p className="font-caviar text-xl text-text">
                        My name is Andrei, I am a <span ref={typewriterTextRef} className="inline text-text font-caviar"></span> based in Romania.
                    </p>

                    <p className="font-caviar text-xl text-text">
                        When you work with me, it's all about passion, quality and speed. ⚡
                    </p>

                </div>
            </div>

            <div className="absolute bottom-4 flex flex-col items-center" ref={bottomDivRef}>
                <p className="font-caviar text-text">View my work</p>
                <svg className="w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 408.061 408.061" xmlSpace="preserve">
                    <path d="M384.667,32.959c-15.11-15.11-35.2-23.432-56.569-23.432c-21.368,0-41.458,8.322-56.568,23.432L19.446,285.042  c-25.928,25.928-25.928,68.117,0,94.045c12.965,12.964,29.994,19.446,47.022,19.446c17.029,0,34.059-6.482,47.023-19.446  l222.386-222.385c20.273-20.275,20.273-53.264-0.001-73.539c-9.821-9.822-22.88-15.23-36.77-15.23s-26.948,5.409-36.77,15.23  L122.33,223.171l9.9,9.899L272.238,93.063c7.177-7.177,16.719-11.13,26.869-11.13s19.693,3.953,26.87,11.13  c14.816,14.816,14.816,38.924,0,53.74L103.592,369.188c-20.47,20.468-53.776,20.469-74.246,0c-20.471-20.47-20.471-53.777,0-74.247  L281.43,42.858c12.465-12.466,29.039-19.331,46.668-19.331s34.203,6.865,46.669,19.331c25.733,25.733,25.733,67.605,0,93.338  L205.061,305.902l9.9,9.899l169.706-169.706C415.859,114.904,415.859,64.151,384.667,32.959z" />
                </svg>
            </div>

        </div>
    );
}

export default Home;
