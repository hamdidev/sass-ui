import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Key = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...rest } = props;
    return (
        <div
            className={twMerge(
                "bg-neutral-300 size-14 inline-flex items-center justify-center text-xl text-neutral-950 rounded-2xl font-medium",
                className,
            )}
            {...rest}
        >
            {children}
        </div>
    );
};
export default Key;
