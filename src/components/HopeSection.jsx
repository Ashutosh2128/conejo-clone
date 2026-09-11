import Image from "next/image";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";

const HopeSection = () => {
    return (
        <section className="w-full bg-[var(--color-light)] pt-35 pb-35">

            {/* Main container */}
            <div className="flex w-full items-start">

                {/* LEFT CONTENT */}
                <div className="flex-1 pl-[9.15vw]">

                    {/* TOP — Heading */}
                    <div className="pt-[157px]">
                        <SectionHeading
                            size="large"
                            className="w-[710px] text-[50px] leading-[60px]"
                        >
                            You’re holding onto hope that life can be better
                            than it is right now.
                        </SectionHeading>
                    </div>


                    {/* BOTTOM — Two text columns */}
                    <div className="mt-[76px] flex">

                        {/* LEFT TEXT */}
                        <div className="w-[385px] shrink-0">

                            <SectionLabel>
                                AT CONEJO VALLEY FAMILY COUNSELING
                                <br />
                                WE WANT TO MAKE THAT HOPE A REALITY.
                            </SectionLabel>

                            <p
                                className="
                                    mt-[15px]
                                    w-[385px]
                                    font-[var(--font-body)]
                                    text-[16.2038px]
                                    font-light
                                    leading-[29.1669px]
                                    text-[var(--color-text)]
                                "
                            >
                                Whether you're an adult seeking personal growth,
                                looking to work through your trauma, a couple
                                working on your relationship, or a parent looking
                                for support for your child, we provide a
                                compassionate and safe space to help you navigate
                                all of life’s ups and downs.
                            </p>

                        </div>


                        {/* RIGHT TEXT */}
                        <div className="ml-[47px] w-[385px] shrink-0">

                            <p
                                className="
                                    w-[385px]
                                    font-[var(--font-body)]
                                    text-[16.2038px]
                                    font-light
                                    leading-[29.1669px]
                                    text-[var(--color-text)]
                                "
                            >
                                First and foremost, we believe what you’re going
                                through is real, valid, and worthy of support.
                                Our team offers clients in the Newbury Park area
                                and across CA an environment to discover a new
                                life and a deeper sense of self in the midst of
                                their struggles. As we tap into the power of
                                connection and understanding, you can find your
                                footing again and take a transformative path
                                forward.
                            </p>

                        </div>

                    </div>

                </div>


                {/* RIGHT IMAGE */}
                <div className="mt-[47px] h-[625px] w-[30.28vw] shrink-0">

                    <Image
                        src="/images/HopeImage.webp"
                        alt="Beach and ocean"
                        width={493}
                        height={695}
                        className="h-full w-full object-cover"
                    />

                </div>

            </div>

        </section>
    );
};

export default HopeSection;