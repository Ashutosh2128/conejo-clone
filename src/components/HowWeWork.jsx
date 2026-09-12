import Image from "next/image";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";
import Button from "./Button";

const HowWeWork = () => {
    return (
        <section
            className="
                w-full
                bg-[var(--color-sand)]
                pb-[111px]
                pt-[1px]

                max-[767px]:mt-0
                max-[767px]:pb-[70px]
            "
        >

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

                    max-[767px]:mt-0
                    max-[767px]:mb-0
                    max-[767px]:block
                    max-[767px]:min-h-0
                    max-[767px]:pb-0
                "
            >

                {/* LEFT CONTENT */}
                <div
                    className="
                        flex-1
                        pl-[9.15vw]
                        pr-[4vw]

                        max-[767px]:px-[6vw]
                        max-[767px]:pr-[6vw]
                    "
                >

                    {/* TOP CONTAINER */}
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


                    {/* MIDDLE CONTENT */}
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
                                Therapy that meets you where you are.
                            </SectionHeading>
                        </div>


                        {/* MOBILE IMAGE */}
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
                                src="/images/HowWeWorkImage.avif"
                                alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                                width={768}
                                height={1024}
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    object-top
                                "
                            />
                        </div>


                        {/* TWO DESCRIPTION CONTAINERS */}
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
                                    WARM, COLLABORATIVE, AND GROUNDED.
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
                                    Dr. Maya Reynolds believes therapy works
                                    best when you feel respected, understood,
                                    and actively involved in the process.
                                    Sessions are structured enough to feel
                                    supportive while still leaving room for
                                    reflection, curiosity, and depth. There is
                                    no one-size-fits-all approach.
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
                                    Maya combines practical tools with
                                    depth-oriented work, drawing from CBT,
                                    EMDR, mindfulness-based practices, and
                                    body-oriented techniques. When trauma is
                                    part of the work, sessions are paced
                                    carefully with an emphasis on safety,
                                    stabilization, and regulation. The goal is
                                    not only symptom relief, but greater
                                    insight, resilience, and a stronger
                                    relationship with yourself.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* BUTTON CONTAINER */}
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
                            LEARN MORE ABOUT MAYA
                        </Button>
                    </div>

                </div>


                {/* RIGHT IMAGE — DESKTOP ONLY */}
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
                        src="/images/HowWeWorkImage.avif"
                        alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                        width={768}
                        height={1024}
                        className="
                            h-full
                            w-full
                            object-cover
                            object-top
                        "
                    />
                </div>

            </div>

        </section>
    );
};

export default HowWeWork;