"use client";
import Button from "@/components/Button";
import designToolImage1 from "@/assets/images/design-example-1.png";
import designToolImage2 from "@/assets/images/design-example-2.png";
import cursorYouImage from "@/assets/images/cursor-you.svg";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();
    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, 16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { y: [0, 20, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, []);
    return (
        <section
            className="py-24 overflow-x-clip"
            id="hero"
            style={{
                cursor: `url(${cursorYouImage.src}), auto`,
            }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    drag
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    className=" hidden lg:block absolute top-16 -left-32"
                >
                    <Image
                        src={designToolImage1}
                        alt="Design Tool image 1"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    drag
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    className="hidden lg:block absolute -top-16 -right-64"
                >
                    <Image
                        src={designToolImage2}
                        alt="Design Tool image 2"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute hidden lg:block top-96 left-56"
                >
                    <Pointer color={"red"} name={"Muhammed"} />
                </motion.div>

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, y: 100, x: 275 }}
                    className="absolute hidden lg:block -top-4 right-80"
                >
                    <Pointer color={"blue"} name={"Andrew"} />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full text-neutral-950 font-semibold">
                        $5.3M seed round raised
                    </div>
                </div>
                <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-medium mt-6  lg:max-w-[800px] mx-auto">
                    Impactful design tools, created for everyone efficiently
                </h1>
                <p
                    className="text-center text-xl
                 text-white/50 mt-6 max-w-2xl mx-auto"
                >
                    Our platform empowers creators to build stunning designs
                    with ease, making high-quality visual content accessible to
                    everyone.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent outline-none pl-[2px] md:flex-1 w-full"
                    />
                    <Button
                        variant={"primary"}
                        type="submit"
                        size={"sm"}
                        className="whitespace-nowrap px-5"
                    >
                        Sign up
                    </Button>
                </form>
            </div>
        </section>
    );
}
