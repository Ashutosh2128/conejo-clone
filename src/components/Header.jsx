import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
    return (
        <header className="w-full bg-[var(--color-light)]">
            <div className="flex h-[120px] w-full items-center justify-between px-[6.2vw]">
                
                <Logo />

                <nav className="flex items-center gap-[35px] font-[var(--font-body)] text-[13px] font-normal tracking-[1.4px]">
                    <Link href="/about">ABOUT</Link>

                    <Link href="/therapists-newbury-park">
                        OUR TEAM
                    </Link>

                    <Link href="/specialties">
                        SPECIALTIES
                    </Link>

                    <Link href="/methods">
                        METHODS
                    </Link>

                    <Link href="/faqs">
                        FAQS
                    </Link>

                    <Button variant="outline" href="/contact">
                        CONTACT
                    </Button>
                </nav>

            </div>
        </header>
    );
};

export default Header;