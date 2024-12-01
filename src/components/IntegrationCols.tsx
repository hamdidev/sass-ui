"use client";
import Image from "next/image";
import { IntegrationsType } from "@/sections/Integrations";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

const IntegrationCols = (props: {
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;
}) => {
    const { integrations, className, reverse } = props;
    return (
        <>
            <motion.div
                initial={{
                    y: reverse ? "-50%" : 0,
                }}
                animate={{
                    y: reverse ? 0 : "-50%",
                }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
                className={twMerge("flex flex-col gap-4 mb-4", className)}
            >
                {Array.from({ length: 2 }).map((_, i) => (
                    <Fragment key={i}>
                        {integrations.map((integration) => (
                            <div
                                key={integration.name}
                                className="bg-neutral-900 border border-white/10 p-6 rounded-2xl"
                            >
                                <div className="flex justify-center">
                                    <Image
                                        src={integration.icon}
                                        alt={`${integration.name} icon`}
                                        className="size-24"
                                    />
                                </div>
                                <h3 className="text-3xl mt-6 text-center">
                                    {integration.name}
                                </h3>
                                <p className="text-center text-white/50 mt-2 ">
                                    {integration.description}
                                </p>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </motion.div>
        </>
    );
};
export default IntegrationCols;
