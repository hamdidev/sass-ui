import Tag from "@/components/Tag";
import Card from "@/components/Card";
import Avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import Avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import Avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Avatar4 from "@/assets/images/avatar-ashwin-santiago.jpg";

import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import Headline from "@/components/Headline";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];
export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>

                <Headline text="Where power meets" highlight="simplicity" />
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
                    <Card
                        title="Real-time Collaboration"
                        description="Collaborate with team members in real-time and get instant feedback on your designs."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={Avatar1}
                                    alt="Avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-30">
                                <Image
                                    src={Avatar2}
                                    alt="Avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-20">
                                <Image
                                    src={Avatar3}
                                    alt="Avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image
                                        src={Avatar4}
                                        alt="Avatar 4"
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                                    />
                                    {Array.from({ length: 3 }).map(
                                        (_, index) => (
                                            <span
                                                key={index}
                                                className="size-1.5 bg-white inline-flex rounded-full "
                                            ></span>
                                        ),
                                    )}
                                </div>
                            </Avatar>
                        </div>
                    </Card>
                    <Card
                        title="Interactive Prototyping"
                        description="Engage your clients with interactive prototypes and get instant feedback."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                We&apos;ve achieved{" "}
                                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent relative">
                                    <span>incredible</span>
                                    <video
                                        src="/assets/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl opacity-0 pointer-events-none shadow-2xl group-hover:opacity-100 group-hover:text-white/10 duration-500 transition"
                                    ></video>
                                </span>{" "}
                                results this year
                            </p>
                        </div>
                    </Card>
                    <Card
                        title="Keyboard Quick Actions"
                        description=" Powerful commands to help you create designs faster and efficiently."
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4 group">
                            <Key className="w-28 outline outline-transparent  transition-all duration-500 outline-2 outline-offset-4 group-hover:outline-lime-500 group-hover:translate-y-1">
                                Shift
                            </Key>
                            <Key className=" outline transition-all duration-500 outline-2 outline-offset-4 group-hover:outline-lime-500 group-hover:translate-y-1 delay-150">
                                Alt
                            </Key>
                            <Key className=" outline transition-all duration-500 outline-2 outline-offset-4 group-hover:outline-lime-500 group-hover:translate-y-1 delay-300">
                                C
                            </Key>
                        </div>
                    </Card>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl inline-flex items-center gap-2
                            hover:scale-105 duration-500 transition group"
                        >
                            <span className="bg-lime-400 text-neutral-950 inline-flex items-center justify-center size-5 rounded-full text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
