import Image from "next/image";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";
import Button from "./Button";

const AppointmentSection = () => {
    return (
        <section
            className="
                w-full
                bg-[var(--color-light)]
                pt-[35px]
                pb-[32px]

                max-[767px]:pt-0
                max-[767px]:pb-0
            "
        >
            <div
                className="
                    flex
                    min-h-[776px]
                    w-full
                    items-start
                    py-[67px]

                    max-[767px]:min-h-0
                    max-[767px]:flex-col
                    max-[767px]:py-0
                "
            >

                {/* =================================
                    LEFT IMAGE
                    ================================= */}
                <div
                    className="
                        mt-[124px]
                        h-[475px]
                        w-[11.55%]
                        shrink-0
                        overflow-hidden

                        max-[767px]:mt-[50px]
                        max-[767px]:h-[214px]
                        max-[767px]:w-[52.5%]
                    "
                >
                    <Image
                        src="/images/AppointmentLeft.webp"
                        alt="Child playing on the beach"
                        width={115}
                        height={520}
                        className="h-full w-full object-cover"
                    />
                </div>


                {/* =================================
                    CENTER CONTENT
                    ================================= */}
                <div
                    className="
                        flex
                        h-[612px]
                        w-[54.15%]
                        shrink-0
                        flex-col
                        pl-[8.55%]
                        pr-[4.5%]

                        max-[767px]:h-auto
                        max-[767px]:w-full
                        max-[767px]:px-[6.4vw]
                        max-[767px]:pt-[70px]
                    "
                >

                    {/* SECTION LABEL */}
                    <div
                        className="
                            pt-[3px]
                            [-webkit-text-stroke:0.12px]

                            max-[767px]:pt-0
                        "
                    >
                        <SectionLabel>
                            SCHEDULE AN APPOINTMENT
                        </SectionLabel>
                    </div>


                    {/* MAIN CONTENT */}
                    <div
                        className="
                            mt-[100px]

                            max-[767px]:mt-[37px]
                        "
                    >

                        {/* HEADING */}
                        <SectionHeading
                            size="large"
                            className="
                                w-[590px]
                                text-[50px]
                                leading-[65px]

                                max-[767px]:w-full
                                max-[767px]:text-[30px]
                                max-[767px]:leading-[39px]
                                max-[767px]:tracking-[-0.3px]
                            "
                        >
                            Find a therapist who is the
                            <br className="max-[767px]:hidden" />
                            {" "}right fit for{" "}
                            <span
                                className="
                                    font-[family-name:var(--font-script)]
                                    text-[50px]
                                    font-normal
                                    tracking-normal
                                    text-[var(--color-accent)]
                                    ml-[10px]

                                    max-[767px]:ml-0
                                    max-[767px]:text-[34px]
                                "
                            >
                                you
                            </span>
                            .
                        </SectionHeading>


                        {/* FIRST PARAGRAPH */}
                        <p
                            className="
                                mt-[38px]
                                max-w-[570px]
                                font-[var(--font-body)]
                                text-[17.2173px]
                                font-light
                                leading-[29.1911px]
                                text-[var(--color-text)]

                                max-[767px]:mt-[31px]
                                max-[767px]:max-w-none
                                max-[767px]:text-[16.2173px]
                                max-[767px]:leading-[29.1911px]
                                max-[767px]:[-webkit-text-stroke:0.12px]
                            "
                        >
                            Coming to therapy is a courageous decision, and
                            connecting with the right kind of therapist makes
                            all the difference. We understand that your
                            journey is personal, and we're here to support you
                            with care and understanding every step of the way.
                            Each member of our team brings dedicated expertise
                            and a commitment to support you in your struggles.
                            We want you to feel prioritized, understood, and
                            empowered.
                        </p>


                        {/* SECOND PARAGRAPH */}
                        <p
                            className="
                                mt-[19px]
                                font-[var(--font-body)]
                                text-[17.2173px]
                                font-light
                                leading-[29.1911px]
                                text-[var(--color-text)]

                                max-[767px]:mt-[19px]
                                max-[767px]:text-[16.2173px]
                                max-[767px]:leading-[29.1911px]
                                max-[767px]:[-webkit-text-stroke:0.12px]
                            "
                        >
                            Click the button below to schedule an appointment.
                        </p>


                        {/* BOOK NOW */}
                        <div
                            className="
                                mt-[31px]

                                max-[767px]:mt-[29px]
                            "
                        >
                            <Button
                                href="#"
                                variant="outline"
                            >
                                BOOK NOW
                            </Button>
                        </div>

                    </div>

                </div>


                {/* =================================
                    RIGHT IMAGE
                    ================================= */}
                <div
                    className="
                        h-[590px]
                        w-[34.3%]
                        shrink-0
                        overflow-hidden

                        max-[767px]:mt-[54px]
                        max-[767px]:ml-[18.7%]
                        max-[767px]:h-[289px]
                        max-[767px]:w-[74.4%]
                    "
                >
                    <Image
                        src="/images/AppointmentRight.webp"
                        alt="Parent and child walking on the beach"
                        width={343}
                        height={612}
                        className="h-full w-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default AppointmentSection;