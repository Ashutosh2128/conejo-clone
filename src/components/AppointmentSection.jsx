import Image from "next/image";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";
import Button from "./Button";

const AppointmentSection = () => {
    return (
        <section className="w-full bg-[var(--color-light)] pt-[35px] pb-[32px]">
            <div
                className="
                    flex
                    min-h-[776px]
                    w-full
                    items-start
                    py-[67px]
                "
            >
                {/* LEFT IMAGE */}
                <div
                    className="
                        mt-[124px]
                        h-[475px]
                        w-[11.55%]
                        shrink-0
                        overflow-hidden
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

                {/* CENTER CONTENT */}
                <div
                    className="
                        flex
                        h-[612px]
                        w-[54.15%]
                        shrink-0
                        flex-col
                        pl-[8.55%]
                        pr-[4.5%]
                    "
                >
                    {/* Section label */}
                    <div className="pt-[3px] [-webkit-text-stroke:0.12px]">
                        <SectionLabel>
                            SCHEDULE AN APPOINTMENT
                        </SectionLabel>
                    </div>

                    {/* Main content */}
                    <div className="mt-[100px]">
                        <SectionHeading
                            size="large"
                            className="w-[590px] text-[50px] leading-[65px]"
                        >
                            Find a therapist who is the
                            <br />
                            right fit for{" "}
                            <span
                                className="
                                    font-[family-name:var(--font-script)]
                                    text-[50px]
                                    font-normal
                                    tracking-normal
                                    text-[var(--color-accent)]
                                    ml-[10px]
                                "
                            >
                                you
                            </span>
                            .
                        </SectionHeading>

                        <p
                            className="
                                mt-[38px]
                                max-w-[570px]
                                font-[var(--font-body)]
                                text-[17.2173px]
                                font-light
                                leading-[29.1911px]
                                text-[var(--color-text)]
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

                        <p
                            className="
                                mt-[19px]
                                font-[var(--font-body)]
                                text-[17.2173px]
                                font-light
                                leading-[29.1911px]
                                text-[var(--color-text)]
                            "
                        >
                            Click the button below to schedule an appointment.
                        </p>

                        <div className="mt-[31px]">
                            <Button
                                href="#"
                                variant="outline"
                            >
                                BOOK NOW
                            </Button>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div
                    className="
                        h-[590px]
                        w-[34.3%]
                        shrink-0
                        overflow-hidden
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