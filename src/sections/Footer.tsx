import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];
import logoImage from "@/assets/images/logo.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between gap-6 items-center">
                    <div>
                        <Image
                            src={logoImage}
                            alt="Layers logo"
                            className="h-9 md:h-auto w-auto"
                        />
                    </div>
                    <div>
                        <nav className="flex gap-6 items-center">
                            {footerLinks.map((link) => (
                                <Link
                                    href={link.href}
                                    key={link.label}
                                    className="text-white/50 text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
