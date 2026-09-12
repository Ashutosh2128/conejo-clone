import Logo from "./Logo";

const Footer = () => {
    return (
        <footer
            className="
                w-full
                bg-[var(--color-white)]
                pt-[45px]

                max-[767px]:pt-0
            "
        >

            {/* =========================
                UPPER FOOTER
            ========================== */}
            <div
                className="
                    flex
                    w-full
                    items-start
                    px-[6vw]
                    pt-[23px]
                    pb-[150px]

                    max-[767px]:flex-col
                    max-[767px]:px-[18.4vw]
                    max-[767px]:pt-[80px]
                    max-[767px]:pb-[38px]
                "
            >

                {/* 1. LOGO + DESCRIPTION */}
                <div
                    className="
                        shrink-0

                        max-[767px]:w-full
                        max-[767px]:order-1
                        max-[767px]:-ml-[20px]
                    "
                >
                    <div
                        className="
                            mb-[50px]
                            max-[767px]:w-[330px]
                            max-[767px]:max-w-[calc(100vw-46px)]
                        "
                    >
                        <Logo className="w-[390px] h-auto" />
                    </div>

                    <p
                        className="
                            mt-[10px]
                            w-[442px]
                            max-w-[90%]
                            font-[var(--font-body)]
                            text-[17.2173px]
                            font-light
                            leading-[29.1911px]
                            text-[var(--color-text)]

                            max-[767px]:mt-[17px]
                            max-[767px]:w-[285px]
                            max-[767px]:max-w-none
                            max-[767px]:text-[16.2173px]
                            max-[767px]:leading-[29.1911px]
                            max-[767px]:[-webkit-text-stroke:0.12px]
                        "
                    >
                        A warm, grounded space for thoughtful adults
                        navigating anxiety, trauma, burnout, perfectionism,
                        and the pressure to keep everything together.
                    </p>
                </div>


                {/* 2. NAVIGATE */}
                <div
                    className="
                        w-[17.5%]
                        shrink-0
                        ml-[95px]
                        mt-[17px]

                        max-[767px]:order-2
                        max-[767px]:w-full
                        max-[767px]:ml-0
                        max-[767px]:mt-[51px]
                    "
                >
                    <h3
                        className="
                            font-[var(--font-body)]
                            text-[16.1173px]
                            font-normal
                            leading-[10.1911px]
                            tracking-[1.8px]
                            text-[var(--color-text)]
                        "
                    >
                        NAVIGATE
                    </h3>

                    <div
                        className="
                            mt-[18px]
                            flex
                            flex-col
                            font-[var(--font-body)]
                            text-[15.2173px]
                            font-light
                            leading-[26px]
                            text-[var(--color-text)]

                            max-[767px]:mt-[18px]
                        "
                    >
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#approach">Approach</a>
                        <a href="#faqs">FAQs</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>


                {/* 3. THERAPY */}
                <div
                    className="
                        w-[22%]
                        shrink-0
                        mt-[17px]

                        max-[767px]:order-4
                        max-[767px]:w-full
                        max-[767px]:mt-[27px]
                    "
                >
                    <h3
                        className="
                            font-[var(--font-body)]
                            text-[16.1173px]
                            font-normal
                            leading-[10.1911px]
                            tracking-[1.8px]
                            text-[var(--color-text)]
                        "
                    >
                        THERAPY
                    </h3>

                    <div
                        className="
                            mt-[18px]
                            flex
                            flex-col
                            font-[var(--font-body)]
                            text-[15.2173px]
                            font-light
                            leading-[26px]
                            text-[var(--color-text)]

                            max-[767px]:mt-[18px]
                        "
                    >
                        <a href="#services">Anxiety & Stress</a>
                        <a href="#services">Trauma & EMDR</a>
                        <a href="#services">Burnout & Perfectionism</a>
                        <a href="#services">Adult Therapy</a>
                    </div>
                </div>


                {/* 4. CONTACT */}
                <div
                    className="
                        w-[20.5%]
                        shrink-0

                        max-[767px]:order-3
                        max-[767px]:w-full
                        max-[767px]:mt-[27px]
                    "
                >
                    <h3
                        className="
                            font-[var(--font-body)]
                            text-[16.1173px]
                            font-normal
                            leading-[10.1911px]
                            tracking-[1.8px]
                            text-[var(--color-text)]
                        "
                    >
                        CONTACT
                    </h3>

                    <div
                        className="
                            mt-[18px]
                            font-[var(--font-body)]
                            text-[15.2173px]
                            font-light
                            leading-[26px]
                            text-[var(--color-text)]

                            max-[767px]:mt-[18px]
                        "
                    >
                        <p>
                            123th Street 45 W
                            <br />
                            Santa Monica, CA 90401
                        </p>

                        <a href="mailto:hello@mayareynoldstherapy.com">
                            hello@mayareynoldstherapy.com
                        </a>

                        <br />

                        <a href="tel:3100000000">
                            310.000.0000
                        </a>

                        <p
                            className="
                                mt-[20px]
                                w-[310px]
                                max-w-full
                                font-[family-name:var(--font-body)]
                                text-[16px]
                                font-light
                                italic
                                leading-[27px]

                                max-[767px]:w-[285px]
                            "
                        >
                            In-person therapy in Santa Monica and secure
                            telehealth throughout California.
                        </p>
                    </div>
                </div>

            </div>


            {/* =========================
                LOWER LEGAL BAR
            ========================== */}
            <div
                className="
                    flex
                    h-[45.4px]
                    w-full
                    items-center
                    bg-[var(--color-accent)]
                    px-[7vw]
                    font-[var(--font-body)]
                    text-[15.2173px]
                    font-light
                    leading-[29.1911px]
                    text-[var(--color-white)]

                    max-[767px]:h-[70px]
                    max-[767px]:px-[8.5vw]
                    max-[767px]:items-start
                    max-[767px]:pt-[7px]
                    max-[767px]:text-[14.2173px]
                "
            >
                <div
                    className="
                        flex
                        items-center

                        max-[767px]:flex-wrap
                        max-[767px]:items-start
                        max-[767px]:leading-[29px]
                    "
                >
                    <a href="/terms">
                        Terms
                    </a>

                    <span className="mx-[5px]">|</span>

                    <a href="/privacy-policy">
                        Privacy Policy
                    </a>

                    <span className="mx-[5px]">|</span>

                    <a href="/disclaimer">
                        Disclaimer
                    </a>

                    <span className="mx-[5px]">|</span>

                    <span>
                        © {new Date().getFullYear()} Dr. Maya Reynolds
                    </span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;