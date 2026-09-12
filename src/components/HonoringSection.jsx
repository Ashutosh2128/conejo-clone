import Image from "next/image";
import SectionHeading from "./SectionHeading";

const HonoringSection = () => {
    return (
        <section
            className="
                w-full
                bg-[var(--color-white)]
                mt-[30px]

                max-[767px]:mt-[30px]
            "
        >

            {/* BIG CONTAINER */}
            <div
                className="
                    mx-auto
                    flex
                    min-h-[552px]
                    w-full
                    items-center
                    py-[67px]

                    max-[767px]:block
                    max-[767px]:min-h-0
                    max-[767px]:py-[54px]
                "
            >

                {/* LEFT — IMAGE */}
                <div
                    className="
                        h-[550px]
                        w-[53.2%]
                        shrink-0

                        max-[767px]:h-[444px]
                        max-[767px]:w-full
                    "
                >
                    <Image
                        src="/images/TherapySpace.png"
                        alt="Calm and welcoming therapy space"
                        width={1365}
                        height={2048}
                        className="
                            h-full
                            w-full
                            object-cover
                        "
                    />
                </div>


                {/* RIGHT — TEXT */}
                <div
                    className="
                        flex
                        flex-1
                        items-center
                        pl-[74px]
                        pr-[7vw]

                        max-[767px]:block
                        max-[767px]:px-[6.4vw]
                        max-[767px]:pt-[18px]
                    "
                >
                    <SectionHeading
                        size="large"
                        className="
                            w-[500px]
                            text-[50px]
                            mt-[335px]
                            leading-[70px]

                            max-[767px]:mt-0
                            max-[767px]:w-full
                            max-[767px]:text-[30px]
                            max-[767px]:leading-[39px]
                            max-[767px]:tracking-[-0.3px]
                        "
                    >
                        Honoring what shaped you{" "}
                        <span
                            className="
                                font-[family-name:var(--font-script)]
                                text-[43px]
                                font-normal
                                tracking-normal
                                text-[var(--color-accent)]

                                max-[767px]:text-[34px]
                            "
                        >
                            while
                        </span>{" "}
                        creating space for what comes next.
                    </SectionHeading>
                </div>

            </div>

        </section>
    );
};

export default HonoringSection;