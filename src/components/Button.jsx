import React from "react";
import Link from "next/link";

const Button = ({
    children,
    href = "#",
    variant = "underline",
}) => {
    const styles = {
        underline:
            "group relative inline-block font-[var(--font-body)] text-[12.75px] font-normal tracking-[1.53px] uppercase",

        outline:
            "inline-flex items-center justify-center rounded-[50%] border border-[var(--color-text)] px-[26px] py-[17px] font-[var(--font-body)] text-[12.60px] font-normal leading-none tracking-[1.53px] uppercase transition-all duration-200 hover:bg-[var(--color-text)] hover:!text-white",
    };

    return (
        // <Link href={href} className={styles[variant]}>
        //     {children}
        // </Link>

        <Link href={href} className={styles[variant]}>
            {children}

            {variant === "underline" && (
                <span
                    className="
                        absolute
                        bottom-0
                        left-0
                        h-[1px]
                        w-full
                        origin-left
                        bg-[var(--color-text)]
                        transition-transform
                        duration-800
                        ease-in
                        group-hover:scale-x-0
                    "
                />
            )}
        </Link>
    );
};

export default Button;