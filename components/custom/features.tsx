import { cn } from "@/lib/utils";
import {
    IconMail,
    IconBoxMultiple,
    IconVip,
    IconBolt,
    IconSettingsPlus,
    IconRouteAltLeft,
    IconCoinOff,
    IconLockFilled
} from "@tabler/icons-react";


export default function Features() {
    const features = [
        {
            title: "100% Free Forever",
            description:
                "Never pay for SSL again. Powered by Let'sEncrypt, GoogleTrust and more with free 90-day certificates",
            icon: <IconCoinOff />,
        },
        {
            title: "Widely Trusted",
            description:
                "Our generated free SSL certificates are trusted in 99.9% of all major browsers worldwide",
            icon: < IconLockFilled />,
        },
        {
            title: "Enjoy Premium SSL Benefits",
            description:
                "Protect user information, generate trust and improve Search Engine Ranking",
            icon: < IconVip />,
        },
        {
            title: "Multi-Verification Options",
            description: "Secure multiple sub-domains and as well as wildcard domains with ease",
            icon: < IconRouteAltLeft />,
        },
        {
            title: "Multiple Sub-domains & Wildcard Domain Support",
            description: "Secure domain, multiple sub-domains and as well as wildcard domains with ease",
            icon: < IconBoxMultiple />,
        },
        {
            title: "Custom CSR Supported",
            description:
                "We now support custom CSR to issue SSL certificates with all the available verification methods",
            icon: < IconSettingsPlus />,
        },
        {
            title: "Email Reminders & Secure Systems",
            description:
                "Receive timely expiry reminders to keep your SSL certificates up-to-date and secure",
            icon: < IconMail />,
        },
        {
            title: "Fast and Efficient Process",
            description: "Obtain free SSL certificate in just 3-4 minutes after DNS propagation and HTTP file setup",
            icon: < IconBolt />,
        },
    ];
    return (
        <div>
            <div className="text-center">
                <h2 className=" text-5xl text-secondary-foreground font-semibold my-2">Why Choose Us?</h2>
                <p className="text-xl text-secondary-foreground opacity-75">Project Gatekeeper offers a wide range of features to help you secure your website and build trust with your users.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
