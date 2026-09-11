import React from "react";

const SectionHeading = ({
    children,
    size = "large",
    className = "",
}) => {
    const sizes = {
        large: "text-[38.1283px] leading-[49.3228px] tracking-[-0.381283px]",
        medium: "text-[32.0419px] leading-[42.3466px] tracking-[-0.320419px]",
        small: "text-[23.4269px] leading-[31.8793px] tracking-[-0.234269px]",
    };

    return (
        <h2
            className={`
                font-[family-name:var(--font-heading)]
                font-light
                text-[var(--color-text)]
                ${sizes[size]}
                ${className}
            `}
        >
            {children}
        </h2>
    );
};

export default SectionHeading;