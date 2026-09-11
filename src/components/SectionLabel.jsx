import React from "react";

const SectionLabel = ({ children }) => {
    return (
        <div className="font-[var(--font-body)] text-[15px] font-normal leading-[27px] tracking-[1.8px] uppercase">
            {children}
        </div>
    );
};

export default SectionLabel;