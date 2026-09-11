import Image from "next/image";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";
import Button from "./Button";

const HowWeWork = () => {
    return (
        <section className="w-full bg-[#e8ddcb] pb-[111px]">

            {/* BIG MAIN CONTAINER */}
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
                    "
                >

                    {/* TOP CONTAINER */}
                    <div className="pt-[50px]">

                        <SectionLabel>
                            HOW WE WORK
                        </SectionLabel>

                    </div>


                    {/* MIDDLE CONTENT CONTAINER */}
                    <div className="mt-[150px]">

                        {/* HEADING */}
                        <div>
                            <SectionHeading
                                size="large"
                                className="w-[650px] text-[51px]"
                            >
                                We’re here to make a difference.
                            </SectionHeading>
                        </div>


                        {/* TWO DESCRIPTION CONTAINERS */}
                        <div className="mt-[62px] flex">

                            {/* LEFT DESCRIPTION */}
                            <div className="w-[430px] shrink-0 [-webkit-text-stroke:0.12px]">

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
                            <div className="ml-[20px] w-[430px] shrink-0">

                                <p
                                    className="
                                        font-[var(--font-body)]
                                        text-[16.2999px]
                                        font-light
                                        leading-[29.1911px]
                                        text-[var(--color-text)]
                                        [-webkit-text-stroke:0.12px]
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


                    {/* BUTTON CONTAINER */}
                    <div className="mt-[76px]">
                        <Button
                            href="#about"
                            variant="underline"
                        >
                            LEARN MORE ABOUT US
                        </Button>
                    </div>

                </div>


                {/* =========================
                    RIGHT IMAGE
                ========================= */}
                <div
                    className="
                        mt-[47px]
                        h-[720px]
                        w-[22.8vw]
                        shrink-0
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