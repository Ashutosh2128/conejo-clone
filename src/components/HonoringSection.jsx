import Image from "next/image";
import SectionHeading from "./SectionHeading";

const HonoringSection = () => {
    return (
        <section className="w-full bg-[var(--color-white)] mt-[30px]">

            {/* BIG CONTAINER */}
            <div
                className="
                    mx-auto
                    flex
                    min-h-[552px]
                    w-full
                    items-center
                    py-[67px]
                "
            >

                {/* LEFT — IMAGE */}
                <div
                    className="
                        h-[550px]
                        w-[53.2%]
                        shrink-0
                    "
                >
                    <Image
                        src="/images/Honoring.webp"
                        alt="Family walking together at the beach"
                        width={532}
                        height={418}
                        className="h-full w-full object-cover"
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
                    "
                >
                    <SectionHeading
                        size="large"
                        className="w-[500px] text-[50px] mt-[335px] leading-[70px]"
                    >
                        Honoring where you’ve been{" "}
                        <span
                            className="
                                font-[family-name:var(--font-script)]
                                text-[43px]
                                font-normal
                                tracking-normal
                                text-[var(--color-accent)]
                            "
                        >
                            &
                        </span>{" "}
                        helping shape where you’re headed.
                    </SectionHeading>
                </div>

            </div>

        </section>
    );
};

export default HonoringSection;