import React from "react";
import Link from "next/link";

const Logo = ({ className = "" }) => {
    return (
        <Link href="/" className={`block ${className}`}>
            <div className="flex flex-col">
                <span className="font-[family-name:var(--font-heading)] text-[32px] font-light leading-[36px] tracking-[-0.3px] text-[var(--color-text)]">
                    Dr. Maya Reynolds
                </span>

                <span className="mt-[7px] font-[var(--font-body)] text-[10px] font-normal leading-[14px] tracking-[2px] text-[var(--color-accent)]">
                    PSYD · LICENSED CLINICAL PSYCHOLOGIST
                </span>
            </div>
        </Link>
    );
};

export default Logo;