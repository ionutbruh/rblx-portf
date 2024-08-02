import { useRef } from "react";
import { useEffect } from "react";

import Typewriter from 'typewriter-effect/dist/core';
import anime from "animejs";

function Header() {

    const typewriter_text = useRef();
    useEffect(() => {
        new Typewriter(typewriter_text.current, {
            strings: [
                'a Roblox Developer.',
                'a Web Developer.',
                'a Freelancer.',
                'a Problem-Solver.',
            ],
            autoStart: true,
            loop: true
        });
    }, [])

    return (<>
        <div className="w-full flex flex-col items-center space-y-5 bg-black p-20">

            <div className="flex flex-col items-start space-y-3 text-white w-full">
                <p className="font-caviar text-xs">Hi, my name is</p>
                <h1 className="font-vhs text-6xl">Andrei Dev.</h1>
                <div className="flex items-start text-white space-x-3">
                    <h1 className="font-vhs text-6xl">I am</h1>
                    <h1 ref={typewriter_text} className="font-vhs text-6xl">.</h1>
                </div>
            </div>

            <div className="flex justify-start">
                <p className="w-1/3 font-caviar text-sm text-white">
                    Velit do cillum sunt culpa. Velit anim velit laborum nostrud voluptate voluptate Lorem voluptate sit. Voluptate est aliqua laborum tempor laboris consectetur incididunt reprehenderit ullamco sint. Ea id incididunt consectetur aute est ad nulla eiusmod. Nulla mollit tempor amet pariatur. Fugiat reprehenderit pariatur aute velit ea sit anim ad est aliqua cillum exercitation sit. Sint consectetur non nulla officia duis.
                </p>
            </div>

        </div>
    </>);
}

export default Header;