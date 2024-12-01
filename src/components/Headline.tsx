import React from "react";
import { twMerge } from "tailwind-merge";

interface HeadlineProps {
    text: string;
    highlight: string;
    className?: string;
}

const Headline: React.FC<HeadlineProps> = ({ text, highlight, className }) => {
    return (
        <h2
            className={twMerge(
                "text-6xl text-center font-medium mt-10 max-w-2xl mx-auto",
                className,
            )}
        >
            {text} <span className="text-lime-400">{highlight}</span>
        </h2>
    );
};

export default Headline;
