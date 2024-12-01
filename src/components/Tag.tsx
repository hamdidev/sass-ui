import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...rest } = props;
    return (
        <div
            className={twMerge(
                "inline-flex gap-2 items-center border border-lime-400 text-lime-400 rounded-full px-3 py-1 uppercase font-semibold",
                className,
            )}
            {...rest}
        >
            <span className="text-sm">&#10038;</span>
            <span>{children}</span>
        </div>
    );
};
export default Tag;
