import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
    return (
        <header className="w-full bg-[var(--color-light)]">
            <div
                className="
                    flex
                    h-[160px]
                    w-full
                    items-start
                    justify-between
                    px-[25px]
                    pt-[35px]

                    min-[1025px]:h-[120px]
                    min-[1025px]:items-center
                    min-[1025px]:px-[6.2vw]
                    min-[1025px]:pt-0
                "
            >

                {/* LOGO */}
                <Logo className="h-auto w-[225px] min-[1025px]:w-[257px]" />


                {/* DESKTOP NAVIGATION */}
                <nav
                    className="
                        hidden
                        items-center
                        gap-[35px]
                        font-[var(--font-body)]
                        text-[13px]
                        font-normal
                        tracking-[1.4px]
                        min-[1025px]:flex
                    "
                >
                    <Link href="/about">
                        ABOUT
                    </Link>

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


                {/* MOBILE HAMBURGER */}
                <button
                    type="button"
                    aria-label="Open menu"
                    className="
                        mt-[14px]
                        flex
                        h-[32px]
                        w-[38px]
                        shrink-0
                        flex-col
                        justify-between
                        py-[3px]
                        min-[1025px]:hidden
                    "
                >
                    <span className="block h-[1px] w-full bg-[var(--color-text)]" />
                    <span className="block h-[1px] w-full bg-[var(--color-text)]" />
                    <span className="block h-[1px] w-full bg-[var(--color-text)]" />
                </button>

            </div>
        </header>
    );
};

export default Header;