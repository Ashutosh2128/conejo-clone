import Image from "next/image";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";
import Button from "./Button";

const HowWeWork = () => {
    return (
        <section
            className="
                w-full
                bg-[#e8ddcb]
                pb-[111px]
                pt-[1px]

                max-[767px]:mt-0
                max-[767px]:pb-[70px]
            "
        >

            {/* =========================
                BIG MAIN CONTAINER
            ========================= */}
            <div
                className="
                    mx-auto
                    flex
                    min-h-[700px]
                    w-full
                    items-start
                    mt-[80px]
                    mb-[1px]
                    pb-[2px]

                    max-[767px]:mt-0
                    max-[767px]:mb-0
                    max-[767px]:block
                    max-[767px]:min-h-0
                    max-[767px]:pb-0
                "
            >

                {/* =========================
                    LEFT CONTENT
                ========================= */}
                <div
                    className="
                        flex-1
                        pl-[9.15vw]
                        pr-[4vw]

                        max-[767px]:px-[6vw]
                        max-[767px]:pr-[6vw]
                    "
                >

                    {/* =========================
                        TOP CONTAINER
                    ========================= */}
                    <div
                        className="
                            pt-[50px]

                            max-[767px]:pt-[96px]
                        "
                    >
                        <SectionLabel>
                            HOW WE WORK
                        </SectionLabel>
                    </div>


                    {/* =========================
                        MIDDLE CONTENT
                    ========================= */}
                    <div
                        className="
                            mt-[150px]

                            max-[767px]:mt-[43px]
                        "
                    >

                        {/* HEADING */}
                        <div>
                            <SectionHeading
                                size="large"
                                className="
                                    w-[650px]
                                    text-[51px]

                                    max-[767px]:w-full
                                    max-[767px]:text-[30px]
                                    max-[767px]:leading-[39px]
                                    max-[767px]:tracking-[-0.3px]
                                "
                            >
                                We’re here to make a difference.
                            </SectionHeading>
                        </div>


                        {/* =========================
                            MOBILE IMAGE
                            Appears between heading
                            and descriptions
                        ========================= */}
                        <div
                            className="
                                hidden

                                max-[767px]:mt-[44px]
                                max-[767px]:block
                                max-[767px]:h-[270px]
                                max-[767px]:w-full
                            "
                        >
                            <Image
                                src="/images/HowWeWork.webp"
                                alt="Mother and daughter walking on the beach"
                                width={370}
                                height={522}
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                "
                            />
                        </div>


                        {/* =========================
                            TWO DESCRIPTION CONTAINERS
                        ========================= */}
                        <div
                            className="
                                mt-[62px]
                                flex

                                max-[767px]:mt-[51px]
                                max-[767px]:block
                            "
                        >

                            {/* LEFT DESCRIPTION */}
                            <div
                                className="
                                    w-[430px]
                                    shrink-0
                                    [-webkit-text-stroke:0.12px]

                                    max-[767px]:w-full
                                "
                            >

                                <SectionLabel>
                                    THE CLIENTS WE WORK WITH ARE BALANCING
                                    SO MANY THINGS AT ONCE, IT’S OFTEN HARD
                                    FOR THEM TO PUT THEMSELVES FIRST.
                                </SectionLabel>

                                <p
                                    className="
                                        mt-[21px]
                                        font-[var(--font-body)]
                                        text-[16.2173px]
                                        font-light
                                        leading-[29.1911px]
                                        text-[var(--color-text)]
                                        [-webkit-text-stroke:0.12px]

                                        max-[767px]:mt-[21px]
                                        max-[767px]:text-[15px]
                                        max-[767px]:leading-[27px]
                                    "
                                >
                                    Here, your needs are always top priority.
                                    Our team takes the time to deeply listen to
                                    our clients in order to truly understand
                                    their story and their struggles. We
                                    recognize that no two people are the same
                                    and that personalized therapy means an
                                    intentional, tailored approach. (You won’t
                                    find anything “one-size-fits-all” here.) If
                                    you’re ready to do the work, we’re ready to
                                    help.
                                </p>

                            </div>


                            {/* RIGHT DESCRIPTION */}
                            <div
                                className="
                                    ml-[20px]
                                    w-[430px]
                                    shrink-0

                                    max-[767px]:ml-0
                                    max-[767px]:mt-[23px]
                                    max-[767px]:w-full
                                "
                            >

                                <p
                                    className="
                                        font-[var(--font-body)]
                                        text-[16.2999px]
                                        font-light
                                        leading-[29.1911px]
                                        text-[var(--color-text)]
                                        [-webkit-text-stroke:0.12px]

                                        max-[767px]:text-[15px]
                                        max-[767px]:leading-[27px]
                                    "
                                >
                                    Sometimes we may gently challenge you to
                                    look at things differently and other times
                                    we may explore your emotions, all while
                                    encouraging you to practice what you’ve
                                    learned in your daily life. We take what we
                                    do seriously because we know how important
                                    it is for you to heal from what’s hurting
                                    you, discover a fulfilling life, and build
                                    meaningful relationships. Our goal is to walk
                                    alongside you in this journey, offering
                                    support and guidance as you uncover your
                                    strengths and embrace what the future can
                                    hold for you.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        BUTTON CONTAINER
                    ========================= */}
                    <div
                        className="
                            mt-[76px]

                            max-[767px]:mt-[47px]
                        "
                    >
                        <Button
                            href="#about"
                            variant="underline"
                        >
                            LEARN MORE ABOUT US
                        </Button>
                    </div>

                </div>


                {/* =========================
                    RIGHT IMAGE — DESKTOP ONLY
                ========================= */}
                <div
                    className="
                        mt-[47px]
                        h-[720px]
                        w-[22.8vw]
                        shrink-0

                        max-[767px]:hidden
                    "
                >
                    <Image
                        src="/images/HowWeWork.webp"
                        alt="Mother and daughter walking on the beach"
                        width={370}
                        height={522}
                        className="h-full w-full object-cover"
                    />
                </div>

            </div>

        </section>
    );
};

export default HowWeWork;