import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";
import Image from "next/image";

const HopeSection = () => {
    return (
        <section
            id="about"
            className="w-full bg-[var(--color-light)] pt-[100px] pb-[150px]"
        >

            {/* =====================================================
                MOBILE / TABLET
                0px - 767px
            ====================================================== */}
            <div className="flex w-full flex-col px-[25px] pt-[40px] min-[768px]:hidden">

                {/* HEADING */}
                <div>
                    <SectionHeading
                        size="large"
                        className="
                            w-full
                            text-[38.1283px]
                            leading-[48.9925px]
                        "
                    >
                        You don't have to look like you're struggling to deserve support.
                    </SectionHeading>
                </div>


                {/* FIRST TEXT */}
                <div className="mt-[38px] w-full">

                    <SectionLabel>
                        THERAPY FOR THOUGHTFUL, HIGH-ACHIEVING ADULTS
                        <br />
                        A SPACE TO SLOW DOWN AND RESET.
                    </SectionLabel>

                    <p
                        className="
                            mt-[15px]
                            w-full
                            font-[var(--font-body)]
                            text-[16.2038px]
                            font-light
                            leading-[29.1669px]
                            text-[var(--color-text)]
                        "
                    >
                        Dr. Maya Reynolds works with adults who are used to
                        holding everything together. You may be successful on
                        the outside while feeling exhausted, anxious,
                        overwhelmed, or stuck underneath it all. Therapy can
                        be a place to step out of that pressure, understand
                        what's driving it, and reconnect with yourself.
                    </p>

                </div>


                {/* IMAGE PLACEHOLDER */}
                {/* <div className="mt-[53px] h-[192px] w-full bg-[var(--color-sand)]" /> */}
                <div className="mt-[53px] h-[192px] w-full">
                    <Image
                        src="/images/TherapySpace.png"
                        alt="Calm and welcoming therapy space"
                        width={1365}
                        height={2048}
                        className="h-full w-full object-cover"
                    />
                </div>


                {/* SECOND TEXT */}
                <div className="mt-[51px] w-full">

                    <p
                        className="
                            w-full
                            font-[var(--font-body)]
                            text-[16.2038px]
                            font-light
                            leading-[29.1669px]
                            text-[var(--color-text)]
                        "
                    >
                        Maya offers a warm, collaborative space where
                        practical tools meet deeper reflection. Together,
                        you'll work at a pace that feels safe and sustainable,
                        building greater insight, resilience, and a stronger
                        sense of self.
                    </p>

                </div>

            </div>


            {/* =====================================================
                DESKTOP
                768px+
            ====================================================== */}
            <div
                className="
                    hidden
                    w-full
                    items-start
                    min-[768px]:flex
                "
            >

                {/* LEFT CONTENT */}
                <div className="flex-1 pl-[9.15vw]">

                    {/* TOP — Heading */}
                    <div className="pt-[157px]">

                        <SectionHeading
                            size="large"
                            className="w-[710px] text-[50px] leading-[60px]"
                        >
                            You don't have to look like you're struggling to deserve support.
                        </SectionHeading>

                    </div>


                    {/* BOTTOM — Two text columns */}
                    <div className="mt-[76px] flex">

                        {/* LEFT TEXT */}
                        <div className="w-[385px] shrink-0">

                            <SectionLabel>
                                THERAPY FOR THOUGHTFUL, HIGH-ACHIEVING ADULTS
                                <br />
                                A SPACE TO SLOW DOWN AND RESET.
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
                                Dr. Maya Reynolds works with adults who are
                                used to holding everything together. You may
                                be successful on the outside while feeling
                                exhausted, anxious, overwhelmed, or stuck
                                underneath it all. Therapy can be a place to
                                step out of that pressure, understand what's
                                driving it, and reconnect with yourself.
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
                                Maya offers a warm, collaborative space where
                                practical tools meet deeper reflection.
                                Together, you'll work at a pace that feels
                                safe and sustainable, building greater
                                insight, resilience, and a stronger sense
                                of self.
                            </p>

                        </div>

                    </div>

                </div>


                {/* RIGHT IMAGE PLACEHOLDER */}
                {/* <div className="mt-[47px] h-[625px] w-[30.28vw] shrink-0 bg-[var(--color-sand)]" /> */}
                <div className="mt-[47px] h-[625px] w-[30.28vw] shrink-0">
                    <Image
                        src="/images/TherapySpace.png"
                        alt="Calm and welcoming therapy space"
                        width={1365}
                        height={2048}
                        className="h-full w-full object-cover"
                    />
                </div>

            </div>

        </section>
    );
};

export default HopeSection;