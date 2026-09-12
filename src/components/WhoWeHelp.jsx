import Image from "next/image";

const WhoWeHelp = () => {
    return (
        <section className="w-full overflow-hidden bg-[var(--color-white)] pb-[50px] min-[768px]:pb-[120px]">

            {/* MAIN CONTAINER */}
            <div className="w-full">

                {/* =========================
                    UPPER CONTAINER
                ========================= */}
                <div
                    className="
                        px-[6.5vw]
                        pt-[115px]
                        pb-[62px]

                        min-[768px]:pt-[115px]
                        min-[768px]:pb-[62px]
                    "
                >
                    <h2
                        className="
                            font-[family-name:var(--font-heading)]
                            text-[40px]
                            font-light
                            leading-[1]
                            tracking-[-0.4px]
                            text-[var(--color-text)]

                            min-[768px]:text-[50px]
                            min-[768px]:tracking-[-0.5px]
                        "
                    >
                        Who we{" "}
                        <span
                            className="
                                ml-[6px]
                                font-[family-name:var(--font-script)]
                                text-[48px]
                                font-normal
                                leading-none
                                tracking-normal
                                text-[var(--color-accent)]

                                min-[768px]:ml-3
                                min-[768px]:text-[58.2998px]
                            "
                        >
                            help
                        </span>
                    </h2>
                </div>


                {/* =========================
                    LOWER CONTAINER
                ========================= */}
                <div
                    className="
                        flex
                        w-full
                        flex-col
                        gap-[65px]
                        px-[6.5vw]

                        min-[768px]:flex-row
                        min-[768px]:gap-[1.1vw]
                        min-[768px]:px-[6.5vw]
                        min-[768px]:ml-[125px]
                    "
                >

                    {/* =========================
                        ADULTS
                    ========================= */}
                    <div
                        className="
                            w-full
                            shrink-0

                            min-[768px]:w-[25.15vw]
                        "
                    >

                        {/* IMAGE */}
                        <div
                            className="
                                h-[323px]
                                w-full

                                min-[768px]:h-[28.68vw]
                            "
                        >
                            <Image
                                src="/images/Adults.webp"
                                alt="Adults receiving counseling"
                                width={410}
                                height={467}
                                className="h-full w-full object-cover"
                                style={{
                                    objectPosition: "51.187% 64.804%",
                                }}
                            />
                        </div>


                        {/* HEADING */}
                        <div className="mt-[37px]">
                            <h3
                                className="
                                    font-[family-name:var(--font-heading)]
                                    text-[23.4269px]
                                    font-light
                                    leading-[31.8793px]
                                    tracking-[-0.234269px]
                                    text-[var(--color-text)]

                                    min-[768px]:text-[28px]
                                    min-[768px]:leading-[2.3]
                                    min-[768px]:tracking-[-0.32px]
                                "
                            >
                                Adults
                            </h3>
                        </div>


                        {/* DESCRIPTION */}
                        <div className="mt-[30px]">
                            <p
                                className="
                                    font-[var(--font-body)]
                                    text-[16.2578px]
                                    font-light
                                    leading-[29.1911px]
                                    text-[var(--color-text)]
                                "
                            >
                                Feeling stuck or overwhelmed? We help adults
                                find clarity, build resilience, and move
                                forward with confidence by addressing the root
                                causes of anxiety, stress, and emotional pain.
                            </p>
                        </div>

                    </div>


                    {/* =========================
                        COUPLES
                    ========================= */}
                    <div
                        className="
                            w-full
                            shrink-0

                            min-[768px]:w-[25.15vw]
                        "
                    >

                        {/* IMAGE */}
                        <div
                            className="
                                h-[323px]
                                w-full

                                min-[768px]:h-[28.68vw]
                            "
                        >
                            <Image
                                src="/images/Couples.webp"
                                alt="Couple receiving counseling"
                                width={410}
                                height={467}
                                className="h-full w-full object-cover"
                            />
                        </div>


                        {/* HEADING */}
                        <div className="mt-[37px]">
                            <h3
                                className="
                                    font-[family-name:var(--font-heading)]
                                    text-[23.4269px]
                                    font-light
                                    leading-[31.8793px]
                                    tracking-[-0.234269px]
                                    text-[var(--color-text)]

                                    min-[768px]:text-[28px]
                                    min-[768px]:leading-[2.3]
                                    min-[768px]:tracking-[-0.32px]
                                "
                            >
                                Couples
                            </h3>
                        </div>


                        {/* DESCRIPTION */}
                        <div className="mt-[30px]">
                            <p
                                className="
                                    font-[var(--font-body)]
                                    text-[16.2578px]
                                    font-light
                                    leading-[29.1911px]
                                    text-[var(--color-text)]
                                "
                            >
                                Relationships require effort, and we’re here
                                to help you strengthen yours. We guide couples
                                through challenges like communication
                                breakdowns and trust issues, helping you rebuild
                                intimacy and strengthen your relationship.
                            </p>
                        </div>

                    </div>


                    {/* =========================
                        CHILDREN & TEENS
                    ========================= */}
                    <div
                        className="
                            w-full
                            shrink-0

                            min-[768px]:w-[25.15vw]
                        "
                    >

                        {/* IMAGE */}
                        <div
                            className="
                                h-[323px]
                                w-full

                                min-[768px]:h-[28.68vw]
                            "
                        >
                            <Image
                                src="/images/ChildrenAndTeens.webp"
                                alt="Children and teens receiving counseling"
                                width={410}
                                height={467}
                                className="h-full w-full object-cover"
                            />
                        </div>


                        {/* HEADING */}
                        <div className="mt-[37px]">
                            <h3
                                className="
                                    font-[family-name:var(--font-heading)]
                                    text-[23.4269px]
                                    font-light
                                    leading-[31.8793px]
                                    tracking-[-0.234269px]
                                    text-[var(--color-text)]

                                    min-[768px]:text-[28px]
                                    min-[768px]:leading-[2.8]
                                    min-[768px]:tracking-[-0.32px]
                                "
                            >
                                Children & Teens
                            </h3>
                        </div>


                        {/* DESCRIPTION */}
                        <div className="mt-[18px]">
                            <p
                                className="
                                    font-[var(--font-body)]
                                    text-[16.2578px]
                                    font-light
                                    leading-[29.1911px]
                                    text-[var(--color-text)]
                                "
                            >
                                Kids need support, too. We help them process
                                big emotions, cope with challenging family
                                situations, build coping skills, and feel
                                understood, while also working closely with
                                their parents to create a nurturing environment.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default WhoWeHelp;