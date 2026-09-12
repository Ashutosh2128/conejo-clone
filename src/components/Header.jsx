"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="relative w-full bg-[var(--color-light)]">
            <div className="flex h-[160px] w-full items-start justify-between px-[25px] pt-[35px] min-[1025px]:h-[120px] min-[1025px]:items-center min-[1025px]:px-[6.2vw] min-[1025px]:pt-0">
                <Logo />

                <nav className="hidden items-center gap-[35px] font-[var(--font-body)] text-[13px] font-normal tracking-[1.4px] min-[1025px]:flex">
                    <Link href="#about">ABOUT</Link>
                    <Link href="#services">SERVICES</Link>
                    <Link href="#approach">APPROACH</Link>
                    <Link href="#faqs">FAQS</Link>
                    <Button variant="outline" href="#contact">
                        CONTACT
                    </Button>
                </nav>

                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`mt-[14px] flex h-[32px] w-[38px] shrink-0 flex-col justify-between py-[3px] min-[1025px]:hidden`}
                >
                    <span className={`block h-[1px] w-full bg-[var(--color-text)] transition-transform duration-300 ${menuOpen ? "translate-y-[12px] rotate-45" : ""}`} />
                    <span className={`block h-[1px] w-full bg-[var(--color-text)] transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block h-[1px] w-full bg-[var(--color-text)] transition-transform duration-300 ${menuOpen ? "-translate-y-[12px] -rotate-45" : ""}`} />
                </button>
            </div>

            <div className={`absolute left-0 top-[160px] z-50 w-full bg-[var(--color-light)] px-[25px] pb-[40px] pt-[25px] transition-all duration-300 min-[1025px]:hidden ${menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}>
                <nav className="flex flex-col border-t border-[var(--color-border)] pt-[25px]">
                    <Link href="#about" onClick={closeMenu} className="border-b border-[var(--color-border)] py-[17px] font-[var(--font-body)] text-[13px] tracking-[1.5px]">
                        ABOUT
                    </Link>

                    <Link href="#services" onClick={closeMenu} className="border-b border-[var(--color-border)] py-[17px] font-[var(--font-body)] text-[13px] tracking-[1.5px]">
                        SERVICES
                    </Link>

                    <Link href="#approach" onClick={closeMenu} className="border-b border-[var(--color-border)] py-[17px] font-[var(--font-body)] text-[13px] tracking-[1.5px]">
                        APPROACH
                    </Link>

                    <Link href="#faqs" onClick={closeMenu} className="border-b border-[var(--color-border)] py-[17px] font-[var(--font-body)] text-[13px] tracking-[1.5px]">
                        FAQS
                    </Link>

                    <Link href="#contact" onClick={closeMenu} className="mt-[20px] inline-flex w-fit rounded-[50%] border border-[var(--color-text)] px-[26px] py-[17px] font-[var(--font-body)] text-[12.6px] font-normal leading-none tracking-[1.53px]">
                        CONTACT
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;