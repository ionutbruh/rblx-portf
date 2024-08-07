import React, { useRef, useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import anime from 'animejs';

function Header() {
    const typewriterTextRef = useRef();
    const headerRef = useRef();
    const buttonsRef = useRef();

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

        anime({
            targets: buttonsRef.current,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1500,
            easing: 'easeOutExpo',
            delay: 500 // Add delay for the buttons to appear after the header
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
                    <div className="space-y-3" ref={buttonsRef}>
                        <p className="font-caviar text-xl text-text pt-14">
                            You can view my work and prices in my Discord Server
                        </p>
                        <a className="inline-block">
                            <button className="flex items-center justify-center border-2 w-28 sm:w-48 md:w-64 h-10 font-caviar text-white transition-all duration-300 transform hover:bg-discord-dark-blue hover:-translate-y-1">
                                <svg className="w-6 h-6 mr-2" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="white" fill-rule="nonzero"> </path> </g> </g></svg>                            Join the Discord
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
