import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ className = "w-[257px] h-auto" }) => {
    return (
        <Link href="/" className="block">
            <Image
                src="/images/logo.webp"
                alt="Conejo Valley Family Counseling"
                width={1500}
                height={438}
                className={className}
            />
        </Link>
    );
};

export default Logo;