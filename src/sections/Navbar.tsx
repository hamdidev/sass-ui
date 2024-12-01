"use client";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];
import logoImage from "@/assets/images/logo.svg";
import Link from "next/link";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50 shadow-md">
                <div className={" container max-w-5xl"}>
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className=" grid grid-cols-2 lg:grid-cols-3  p-2 px-4 md:pr-2  items-center">
                            <div>
                                <Link href="/">
                                    <Image
                                        src={logoImage}
                                        alt="Layers logo"
                                        className="h-9 md:h-auto w-auto"
                                    />
                                </Link>
                            </div>
                            <div className="flex justify-center items-center hidden lg:flex">
                                <nav className="flex gap-6 fornt-medium">
                                    {navLinks.map((link) => (
                                        <Link
                                            href={link.href}
                                            key={link.label}
                                            className="hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-menu md:hidden cursor-pointer"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen &&
                                                "rotate-45 -translate-y-1",
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0",
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen &&
                                                "-rotate-45 translate-y-1",
                                        )}
                                    ></line>
                                </svg>
                                <div className="gap-2 hidden md:inline-flex">
                                    <Button variant={"secondary"}>
                                        Get Started
                                    </Button>
                                    <Button variant={"primary"}>Login</Button>
                                </div>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className=" overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4 md:hidden">
                                        {navLinks.map((link) => (
                                            <Link
                                                href={link.href}
                                                key={link.label}
                                                className=""
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                        <div className=" flex gap-3 flex-col">
                                            <Button variant={"secondary"}>
                                                Get Started
                                            </Button>
                                            <Button variant={"primary"}>
                                                Login
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px]"></div>
        </>
    );
}
