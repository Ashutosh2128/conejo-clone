import React from "react";
import SectionHeading from "./SectionHeading";

const ExpertiseSection = () => {
    const leftItems = [
        "DISSOCIATION",
        "TRAUMA",
        "FAMILY CONFLICT",
        "SPECIAL NEEDS PARENTING",
        "DEPRESSION",
        "MARRIAGE",
    ];

    const rightItems = [
        "ANXIETY",
        "RELATIONSHIPS",
        "CHILDREN",
        "TEENS",
        "INTIMACY & CONNECTION",
        "...AND MORE.",
    ];

    return (
        <section className="w-full bg-[var(--color-white)] pt-7.5">

            {/* BIG MAIN CONTAINER */}
            <div
                className="
                    mx-auto
                    flex
                    min-h-[584px]
                    w-[82.8vw]
                    max-w-[1335px]
                    items-start
                    pt-[105px]
                    pb-[30px]

                    max-[767px]:block
                    max-[767px]:w-full
                    max-[767px]:max-w-none
                    max-[767px]:min-h-0
                    max-[767px]:px-[30px]
                    max-[767px]:pt-[33px]
                    max-[767px]:-pb-[33px]
                "
            >

                {/* =========================
                    COLUMN 1 — HEADING
                ========================= */}
                <div
                    className="
                        w-[32%]
                        shrink-0

                        max-[767px]:w-full
                    "
                >

                    <SectionHeading
                        size="medium"
                        className="
                            w-[300px]
                            text-[43px]

                            max-[767px]:w-full
                            max-[767px]:text-[28px]
                            max-[767px]:leading-[39px]
                            max-[767px]:tracking-[-0.3px]
                        "
                    >
                        Our areas of{" "}
                        <span
                            className="
                                font-[family-name:var(--font-script)]
                                text-[40px]
                                font-normal
                                tracking-normal
                                text-[var(--color-accent)]

                                max-[767px]:text-[28px]
                            "
                        >
                            expertise
                        </span>
                    </SectionHeading>

                </div>


                {/* =========================
                    COLUMN 2 — LEFT LIST
                ========================= */}
                <div
                    className="
                        w-[32%]
                        shrink-0

                        max-[767px]:mt-[69px]
                        max-[767px]:w-full
                    "
                >

                    {leftItems.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                flex
                                pb-[20px]
                                mb-[31px]
                                cursor-pointer
                                items-start
                                border-b
                                border-[#e6e1d9]
                                pt-[0px]
                                font-[var(--font-body)]
                                text-[16.2173px]
                                font-light
                                leading-[29.1911px]
                                tracking-[1.8px]
                                text-[var(--color-text)]

                                max-[767px]:text-[15px]
                                max-[767px]:leading-[27px]

                                ${index === leftItems.length - 1
                                    ? "border-b-0"
                                    : ""
                                }
                            `}
                        >
                            {item}
                        </div>
                    ))}

                </div>


                {/* =========================
                    COLUMN 3 — RIGHT LIST
                ========================= */}
                <div
                    className="
                        ml-[5.3%]
                        w-[32%]
                        shrink-0

                        max-[767px]:ml-0
                        max-[767px]:w-full
                    "
                >

                    {rightItems.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                flex
                                pb-[20px]
                                mb-[31px]
                                cursor-pointer
                                items-start
                                border-b
                                border-[#e6e1d9]
                                pt-[0px]
                                font-[var(--font-body)]
                                text-[16.2173px]
                                font-light
                                leading-[29.1911px]
                                tracking-[1.8px]
                                text-[var(--color-text)]
 
                                max-[767px]:text-[15px]
                                max-[767px]:leading-[27px]

                                ${index === rightItems.length - 1
                                    ? "border-b-0"
                                    : ""
                                }
                            `}
                        >
                            {item}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default ExpertiseSection;