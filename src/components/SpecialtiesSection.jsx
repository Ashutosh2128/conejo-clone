import SectionHeading from "./SectionHeading";
import Button from "./Button";

const specialties = [
    {
        title: "Anxiety & Panic",
        description:
            "When constant worry, tension, or panic begins to take over, therapy can help you understand what is underneath the anxiety and develop practical ways to feel more grounded, regulated, and present in your daily life.",
        desktopOrder: "order-1",
        mobileOrder: "max-[767px]:order-1",
    },
    {
        title: "Trauma & EMDR",
        description:
            "Maya works with both single-incident trauma and more complex, long-standing experiences. Trauma work is paced carefully with an emphasis on safety, stabilization, and regulation while helping you process what you have carried.",
        desktopOrder: "order-2",
        mobileOrder: "max-[767px]:order-3",
    },
    {
        title: "Burnout & Perfectionism",
        description:
            "For adults who are used to pushing through, perfectionism and high internal pressure can make it difficult to slow down. Therapy can help you reconnect with yourself and develop more sustainable ways of living and working.",
        desktopOrder: "order-3",
        mobileOrder: "max-[767px]:order-2",
    },
    {
        title: "Stress & Life Experiences",
        description:
            "Earlier experiences can continue to shape relationships, confidence, and your sense of safety. Therapy offers space to understand those patterns, explore their impact, and build greater insight and resilience over time.",
        desktopOrder: "order-4",
        mobileOrder: "max-[767px]:order-4",
    },
];

const SpecialtiesSection = () => {
    return (
        <section className="w-full bg-[var(--color-white)] mt-[65px] pb-[55px] max-[767px]:-pb-[100px]">

            <div
                className="
                    mx-auto
                    grid
                    w-full
                    grid-cols-24
                    gap-x-[11px]
                    gap-y-[11px]
                    px-[9.15vw]
                    py-[67px]

                    max-[767px]:block
                    max-[767px]:px-[6.4vw]
                    max-[767px]:py-[27px]
                "
            >

                {/* LEFT — SECTION HEADING */}
                <div
                    className="
                        col-span-8

                        max-[767px]:w-full
                        max-[767px]:mb-[77px]
                    "
                >
                    <SectionHeading
                        size="medium"
                        className="
                            w-[350px]
                            text-[40px]
                            leading-[50px]
                            -ml-[10px]

                            max-[767px]:ml-0
                            max-[767px]:w-full
                            max-[767px]:text-[25px]
                            max-[767px]:leading-[39px]
                            max-[767px]:tracking-[-0.3px]
                        "
                    >
                        Areas of{" "}
                        <span
                            className="
                                font-[family-name:var(--font-script)]
                                text-[40px]
                                font-normal
                                tracking-normal
                                text-[var(--color-accent)]
                                ml-[10px]

                                max-[767px]:ml-0
                                max-[767px]:text-[25px]
                            "
                        >
                            specialty
                        </span>{" "}
                        include...
                    </SectionHeading>
                </div>


                {/* RIGHT — SPECIALTIES */}
                <div
                    className="
                        col-span-16
                        grid
                        grid-cols-2
                        gap-x-[50px]
                        gap-y-[130px]
                        mt-[20px]
                        ml-[38px]

                        max-[767px]:grid
                        max-[767px]:grid-cols-1
                        max-[767px]:gap-0
                        max-[767px]:mt-0
                        max-[767px]:ml-0
                    "
                >

                    {specialties.map((specialty) => (
                        <div
                            key={specialty.title}
                            className={`
                                flex
                                min-h-[324px]
                                flex-col
                                items-start
                                gap-y-[25px]

                                ${specialty.desktopOrder}
                                ${specialty.mobileOrder}

                                max-[767px]:w-full
                                max-[767px]:min-h-0
                                max-[767px]:gap-y-0
                                max-[767px]:mb-[65px]
                            `}
                        >

                            {/* SPECIALTY HEADING */}
                            <h3
                                className="
                                    font-[family-name:var(--font-heading)]
                                    text-[28.4269px]
                                    font-light
                                    leading-[31.8793px]
                                    tracking-[-0.234269px]
                                    text-[var(--color-text)]
                                    pb-[10px]

                                    max-[767px]:text-[23.4269px]
                                    max-[767px]:leading-[31.8793px]
                                    max-[767px]:tracking-[-0.234269px]
                                    max-[767px]:pb-0
                                "
                            >
                                {specialty.title}
                            </h3>


                            {/* DESCRIPTION */}
                            <p
                                className="
                                    font-[var(--font-body)]
                                    text-[16.2573px]
                                    font-light
                                    leading-[30.1911px]
                                    text-[var(--color-text)]

                                    max-[767px]:mt-[31px]
                                    max-[767px]:text-[16.2173px]
                                    max-[767px]:leading-[29.1911px]
                                    max-[767px]:w-full
                                    max-[767px]:[-webkit-text-stroke:0.12px]
                                "
                            >
                                {specialty.description}
                            </p>


                            {/* LEARN MORE */}
                            <div
                                className="
                                    mt-auto
                                    -mt-[100px]

                                    max-[767px]:mt-[35px]
                                "
                            >
                                <Button href="#contact" variant="underline">
                                    LEARN MORE
                                </Button>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default SpecialtiesSection;