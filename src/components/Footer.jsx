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

                {/* =========================
                    1. LOGO + DESCRIPTION
                ========================== */}
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
                            -ml-[30px]

                            max-[767px]:-ml-[6vw]
                            max-[767px]:w-[330px]
                            max-[767px]:max-w-[calc(100vw-46px)]
                            max-[767px]:[&_img]:w-full
                            max-[767px]:[&_img]:h-auto
                        "
                    >
                        <Logo className="w-[357px] h-auto"/>
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
                        We want to make getting started simple. You’re
                        welcome to come into our office in Newbury Park or
                        schedule virtual appointments from anywhere in
                        CA—whatever works best for you.
                    </p>
                </div>


                {/* =========================
                    2. NAVIGATE
                ========================== */}
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

                            max-[767px]:mt-[18px] text[12px]
                        "
                    >
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/faqs">FAQs</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>


                {/* =========================
                    3. OUR TEAM
                ========================== */}
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
                        OUR TEAM
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

                            max-[767px]:mt-[18px] text[12px]
                        "
                    >
                        <a href="/therapists-newbury-park">
                            Jennifer Anderson
                        </a>

                        <a href="/therapists-newbury-park">
                            Heather Williams-Baumgart
                        </a>

                        <a href="/therapists-newbury-park">
                            Autumn Bodily
                        </a>

                        <a href="/therapists-newbury-park">
                            Michaela Gorospe
                        </a>

                        <a href="/therapists-newbury-park">
                            Candace Bletscher
                        </a>

                        <a href="/therapists-newbury-park">
                            Samantha Johnson
                        </a>

                        <a href="/therapists-newbury-park">
                            Andrea Watkins
                        </a>

                        <a href="/therapists-newbury-park">
                            Rosa Gomez
                        </a>

                        <a href="/therapists-newbury-park">
                            Chad Flores
                        </a>
                    </div>
                </div>


                {/* =========================
                    4. CONTACT
                ========================== */}
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

                            max-[767px]:mt-[18px] text[12px]
                        "
                    >
                        <p>
                            925 Broadbeck Dr
                            <br />
                            Suites 200 and 225
                            <br />
                            Newbury Park, CA 91320
                        </p>

                        <a href="mailto:info@conejovalleycounseling.com">
                            info@conejovalleycounseling.com
                        </a>

                        <br />

                        <a href="tel:8052423120">
                            805.242.3120
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
                            Serving Thousand Oaks, Westlake Village,
                            Camarillo, Moorpark, &amp; Simi Valley
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
                    <a
                        href="https://www.conejovalleycounseling.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Terms
                    </a>

                    <span className="mx-[5px]">|</span>

                    <a
                        href="https://www.conejovalleycounseling.com/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy Policy
                    </a>

                    <span className="mx-[5px]">|</span>

                    <a
                        href="https://www.conejovalleycounseling.com/disclaimer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Disclaimer
                    </a>

                    <span className="mx-[5px]">|</span>

                    <span>
                        Website by{" "}
                        <a
                            href="https://walkerstrategyco.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Walker Strategy Co.
                        </a>
                    </span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;