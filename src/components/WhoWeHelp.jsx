import SectionHeading from "./SectionHeading";

const services = [
    {
        number: "01",
        title: "Anxiety & Stress",
        description:
            "When worry, tension, or feeling constantly on edge starts taking over, therapy can help you slow things down, understand what is underneath the stress, and build practical ways to feel more grounded.",
        className: "bg-[var(--color-accent)] text-[var(--color-white)]",
    },
    {
        number: "02",
        title: "Trauma & EMDR",
        description:
            "Whether you're carrying a single difficult experience or the effects of something long-standing, trauma work can help you process what happened at a pace that prioritizes safety, stabilization, and regulation.",
        className: "bg-[var(--color-sand)] text-[var(--color-text)]",
    },
    {
        number: "03",
        title: "Burnout & Perfectionism",
        description:
            "For high-achieving adults who are used to pushing through, therapy can help you understand the pressure behind perfectionism, reconnect with yourself, and create more sustainable ways of living and working.",
        className: "bg-[var(--color-clay)] text-[var(--color-white)]",
    },
];

const WhoWeHelp = () => {
    return (
        <section
            id="services"
            className="w-full overflow-hidden bg-[var(--color-white)] pb-[100px] pt-[100px] min-[768px]:pb-[150px] min-[768px]:pt-[130px]"
        >
            {/* HEADER */}
            <div className="px-[25px] min-[768px]:px-[6.5vw]">
                <div className="max-w-[850px]">

                    {/* LABEL */}
                    <div className="mb-[25px] font-[var(--font-body)] text-[13px] font-normal tracking-[1.8px] text-[var(--color-accent)] uppercase">
                        SERVICES
                    </div>

                    {/* HEADING */}
                    <SectionHeading
                        size="large"
                        className="
                            w-full
                            text-[38.1283px]
                            leading-[48.9925px]

                            min-[768px]:text-[50px]
                            min-[768px]:leading-[60px]
                        "
                    >
                        Support for the places where life feels hardest.
                    </SectionHeading>

                    {/* DESCRIPTION */}
                    <p
                        className="
                            mt-[30px]
                            max-w-[650px]
                            font-[var(--font-body)]
                            text-[16.2038px]
                            font-light
                            leading-[29.1669px]
                            text-[var(--color-text)]
                        "
                    >
                        Dr. Maya Reynolds works with adults navigating anxiety,
                        trauma, burnout, perfectionism, and the pressure to
                        keep everything together.
                    </p>

                </div>
            </div>


            {/* SERVICES */}
            <div
                className="
                    mt-[60px]
                    flex
                    w-full
                    flex-col
                    gap-[18px]
                    px-[25px]

                    min-[768px]:mt-[80px]
                    min-[768px]:flex-row
                    min-[768px]:gap-[11px]
                    min-[768px]:px-[6.5vw]
                "
            >
                {services.map((service) => (
                    <article
                        key={service.number}
                        className={`
                            flex
                            min-h-[420px]
                            w-full
                            flex-col
                            justify-between
                            rounded-tr-[75px]
                            rounded-bl-[75px]
                            p-[30px]
                            ${service.className}

                            min-[768px]:min-h-[500px]
                            min-[768px]:w-1/3
                            min-[768px]:rounded-tr-[85px]
                            min-[768px]:rounded-bl-[85px]
                            min-[768px]:p-[38px]
                        `}
                    >

                        {/* TOP */}
                        <div>

                            {/* NUMBER */}
                            <span
                                className="
                                    font-[var(--font-body)]
                                    text-[12px]
                                    font-normal
                                    tracking-[1.8px]
                                    uppercase
                                "
                            >
                                {service.number}
                            </span>

                            {/* SMALL LINE */}
                            <div
                                className="
                                    mt-[18px]
                                    h-[1px]
                                    w-[48px]
                                    bg-current
                                "
                            />

                            {/* TITLE */}
                            <h3
                                className="
                                    mt-[55px]
                                    font-[family-name:var(--font-heading)]
                                    text-[30px]
                                    font-light
                                    leading-[1.15]
                                    tracking-[-0.3px]

                                    min-[768px]:mt-[70px]
                                    min-[768px]:text-[34px]
                                "
                            >
                                {service.title}
                            </h3>

                        </div>


                        {/* BOTTOM */}
                        <div>

                            {/* DESCRIPTION */}
                            <p
                                className="
                                    max-w-[430px]
                                    font-[var(--font-body)]
                                    text-[15.8px]
                                    font-light
                                    leading-[28px]
                                "
                            >
                                {service.description}
                            </p>


                            {/* LEARN MORE */}
                            <div className="mt-[30px]">
                                <a
                                    href="#contact"
                                    className="
                                        group
                                        relative
                                        inline-flex
                                        items-center
                                        gap-[8px]
                                        pb-[5px]
                                        font-[var(--font-body)]
                                        text-[12px]
                                        font-normal
                                        tracking-[1.7px]
                                        uppercase
                                    "
                                >
                                    LEARN MORE

                                    <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]">
                                        →
                                    </span>

                                    <span
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            h-[1px]
                                            w-full
                                            origin-left
                                            bg-current
                                            transition-transform
                                            duration-500
                                            ease-in
                                            group-hover:scale-x-0
                                        "
                                    />
                                </a>
                            </div>

                        </div>

                    </article>
                ))}
            </div>

        </section>
    );
};

export default WhoWeHelp;