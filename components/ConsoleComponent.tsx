"use client";

import {SimpleDescription} from "@/data/simple-description"
import Typewriter from "typewriter-effect";

export default function ConsoleComponent(
    {data}: { data: SimpleDescription }
) {
    const fakeCommandName: string = "\\> echo introduction.txt";
    const windowTitle: string = "bash — introduction.txt";
    return (
        <div className="text-justify bg-main mx-auto text-white rounded-lg my-12 overflow-hidden max-w-240">
            <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] select-none">
                {/* Traffic Light Buttons */}
                <div className="flex space-x-2">
                    <span className="w-3 h-3 bg-[#ff5f56] rounded-full inline-block"></span>
                    <span className="w-3 h-3 bg-[#ffbd2e] rounded-full inline-block"></span>
                    <span className="w-3 h-3 bg-[#27c93f] rounded-full inline-block"></span>
                </div>

                {/* Center Column: Title */}
                <div className="text-center">
                    <span className="text-xs text-neutral-400 font-mono">{windowTitle}</span>
                </div>

                {/* Right Column: Empty spacer to balance the grid */}
                <div></div>
            </div>

            <div className="py-6 px-8 max-w-prose mx-auto md:py-8 lg:py-16">
                <p>{fakeCommandName}</p>
                <br/>
                <div className="grid grid-cols-1 grid-rows-1">
                    {/* Invisible Placeholder */}
                    <div className="col-start-1 row-start-1 opacity-0 aria-hidden select-none">
                        {data.description}
                    </div>

                    {/* Typewriter */}
                    <div className="col-start-1 row-start-1">
                        <Typewriter
                            options={{
                                strings: data.description,
                                autoStart: true,
                                loop: false, // Don't loop the text
                                cursor: "_", // Set the cursor character
                                delay: 50,
                            }}
                        />
                    </div>
                </div>
            </div>


        </div>

    )
}