import Image from "next/image";

const WhoWeHelp = () => {
    return (
        <section className="w-full bg-[var(--color-white)] pb-[120px]">

            {/* MAIN CONTAINER */}
            <div className="w-full">

                {/* =========================
                    UPPER CONTAINER
                ========================= */}
                <div className="px-[6vw] pt-[115px] pb-[62px]">

                    <h2
                        className="
                            font-[family-name:var(--font-heading)]
                            text-[50px]
                            font-light
                            leading-[1]
                            tracking-[-0.5px]
                            text-[var(--color-text)]
                        "
                    >
                        Who we{" "}
                        <span
                            className="
                                font-[family-name:var(--font-script)]
                                text-[58px]
                                font-normal
                                tracking-normal
                                text-[var(--color-accent)]
                                text-[58.2998px]
                                ml-3
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
                        gap-[1.35vw]
                        pl-[15.7vw]
                        pr-[5vw]
                    "
                >

                    {/* =========================
                        ADULTS
                    ========================= */}
                    <div className="w-[25.15vw] shrink-0">

                        {/* Image */}
                        <div className="h-[28.68vw] w-full">
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

                        {/* Heading */}
                        <div className="mt-[37px]">
                            <h3
                                className="
                                    font-[family-name:var(--font-heading)]
                                    text-[28px]
                                    font-light
                                    leading-[2.3]
                                    tracking-[-0.32px]
                                    text-[var(--color-text)]
                                "
                            >
                                Adults
                            </h3>
                        </div>

                        {/* Description */}
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
                    <div className="w-[25.15vw] shrink-0">

                        {/* Image */}
                        <div className="h-[28.68vw] w-full">
                            <Image
                                src="/images/Couples.webp"
                                alt="Couple receiving counseling"
                                width={410}
                                height={467}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Heading */}
                        <div className="mt-[37px]">
                            <h3
                                className="
                                    font-[family-name:var(--font-heading)]
                                    text-[28px]
                                    font-light
                                    leading-[2.3]
                                    tracking-[-0.32px]
                                    text-[var(--color-text)]
                                "
                            >
                                Couples
                            </h3>
                        </div>

                        {/* Description */}
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
                    <div className="w-[25.15vw] shrink-0">

                        {/* Image */}
                        <div className="h-[28.68vw] w-full">
                            <Image
                                src="/images/ChildrenAndTeens.webp"
                                alt="Children and teens receiving counseling"
                                width={410}
                                height={467}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Heading */}
                        <div className="mt-[37px]">
                            <h3
                                className="
                                    font-[family-name:var(--font-heading)]
                                    text-[28px]
                                    font-light
                                    leading-[2.8]
                                    tracking-[-0.32px]
                                    text-[var(--color-text)]
                                "
                            >
                                Children & Teens
                            </h3>
                        </div>

                        {/* Description */}
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