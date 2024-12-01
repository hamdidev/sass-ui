import Tag from "@/components/Tag";
import IntegrationCols from "@/components/IntegrationCols";
import Headline from "@/components/Headline";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackIcon,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumeIcon,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerIcon,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
];
export type IntegrationsType = typeof integrations;
export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden" id="integrations">
            <div className="container">
                <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <Tag>Integrations</Tag>
                        <Headline
                            text="Plays well with "
                            highlight="others"
                            className="text-start"
                        />
                        <p className="mt-8 text-white/50">
                            Layers works seamlessly with a wide range of tools
                            and platforms.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] grid md:grid-cols-2 gap-4">
                            <IntegrationCols integrations={integrations} />
                            <IntegrationCols
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
