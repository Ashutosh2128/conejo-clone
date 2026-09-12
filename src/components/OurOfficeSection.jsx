import Image from "next/image";
import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";

const OurOfficeSection = () => {
    return (
        <section
            id="office"
            className="
                w-full
                overflow-hidden
                bg-[var(--color-sand)]
                px-[6.5vw]
                py-[130px]

                max-[767px]:px-[6vw]
                max-[767px]:py-[80px]
            "
        >
            <div className="mx-auto w-full max-w-[1400px]">

                {/* Top introduction */}
                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-[8vw]

                        max-[767px]:block
                    "
                >
                    <div className="w-[48%] max-[767px]:w-full">
                        <SectionLabel>
                            OUR OFFICE
                        </SectionLabel>

                        <div className="mt-[42px] max-[767px]:mt-[35px]">
                            <SectionHeading
                                size="large"
                                className="
                                    w-full
                                    text-[51px]
                                    leading-[61px]

                                    max-[767px]:text-[30px]
                                    max-[767px]:leading-[39px]
                                    max-[767px]:tracking-[-0.3px]
                                "
                            >
                                A calm space to slow down and feel at ease.
                            </SectionHeading>
                        </div>
                    </div>

                    <div
                        className="
                            w-[34%]
                            pt-[45px]

                            max-[767px]:w-full
                            max-[767px]:pt-[30px]
                        "
                    >
                        <p
                            className="
                                font-[var(--font-body)]
                                text-[16.2173px]
                                font-light
                                leading-[29.1911px]
                                text-[var(--color-text)]

                                max-[767px]:text-[15px]
                                max-[767px]:leading-[27px]
                            "
                        >
                            Maya's Santa Monica office is a quiet, private
                            space designed to feel calm and grounding, with
                            natural light and a comfortable, uncluttered
                            environment.
                        </p>

                        <p
                            className="
                                mt-[22px]
                                font-[var(--font-body)]
                                text-[16.2173px]
                                font-light
                                leading-[29.1911px]
                                text-[var(--color-text)]

                                max-[767px]:mt-[18px]
                                max-[767px]:text-[15px]
                                max-[767px]:leading-[27px]
                            "
                        >
                            In-person therapy is available in Santa Monica,
                            with secure telehealth sessions available
                            throughout California.
                        </p>
                    </div>
                </div>

                {/* Editorial image composition */}
                <div
                    className="
                        relative
                        mt-[90px]
                        min-h-[650px]
                        w-full

                        max-[767px]:mt-[55px]
                        max-[767px]:min-h-0
                    "
                >
                    {/* Main image */}
                    <div
                        className="
                            ml-[8%]
                            h-[610px]
                            w-[58%]
                            overflow-hidden

                            max-[767px]:ml-0
                            max-[767px]:h-[360px]
                            max-[767px]:w-[88%]
                        "
                    >
                        <Image
                            src="/images/OfficeImage1.jpeg"
                            alt="Dr. Maya Reynolds therapy office"
                            width={1200}
                            height={1500}
                            className="
                                h-full
                                w-full
                                object-cover
                            "
                        />
                    </div>

                    {/* Smaller overlapping image */}
                    <div
                        className="
                            absolute
                            right-[5%]
                            top-[145px]
                            h-[365px]
                            w-[31%]
                            overflow-hidden
                            border-[12px]
                            border-[var(--color-sand)]

                            max-[767px]:relative
                            max-[767px]:right-auto
                            max-[767px]:top-auto
                            max-[767px]:-mt-[95px]
                            max-[767px]:ml-auto
                            max-[767px]:mr-0
                            max-[767px]:h-[270px]
                            max-[767px]:w-[58%]
                            max-[767px]:border-[8px]
                        "
                    >
                        <Image
                            src="/images/OfficeImage2.jpeg"
                            alt="Comfortable and welcoming therapy space"
                            width={1000}
                            height={1250}
                            className="
                                h-full
                                w-full
                                object-cover
                            "
                        />
                    </div>
                </div>

                {/* Small editorial caption */}
                <div
                    className="
                        mt-[-15px]
                        flex
                        items-center
                        gap-[12px]
                        justify-center

                        max-[767px]:mt-[30px]
                        max-[767px]:pl-0
                    "
                >
                    <span
                        className="
                            h-[1px]
                            w-[38px]
                            bg-[var(--color-accent)]
                        "
                    />

                    <span
                        className="
                            font-[var(--font-body)]
                            text-[11px]
                            font-normal
                            tracking-[1.6px]
                            text-[var(--color-accent)]
                            uppercase
                        "
                    >
                        A SPACE TO FEEL AT EASE
                    </span>
                </div>

                {/* Bottom details */}
                <div
                    className="
                        mt-[55px]
                        flex
                        items-start
                        justify-between
                        border-t
                        border-[var(--color-border)]
                        pt-[28px]

                        max-[767px]:mt-[40px]
                        max-[767px]:block
                    "
                >
                    <div>
                        <div
                            className="
                                font-[var(--font-body)]
                                text-[12px]
                                font-normal
                                tracking-[1.7px]
                                text-[var(--color-accent)]
                                uppercase
                            "
                        >
                            SANTA MONICA, CALIFORNIA
                        </div>

                        <div
                            className="
                                mt-[9px]
                                font-[var(--font-body)]
                                text-[15.5px]
                                font-light
                                leading-[27px]
                                text-[var(--color-text)]
                            "
                        >
                            123th Street 45 W
                            <br />
                            Santa Monica, CA 90401
                        </div>
                    </div>

                    <p
                        className="
                            w-[350px]
                            font-[var(--font-body)]
                            text-[14px]
                            font-light
                            leading-[24px]
                            text-[var(--color-text)]

                            max-[767px]:mt-[28px]
                            max-[767px]:w-full
                            max-[767px]:max-w-[330px]
                        "
                    >
                        A private, comfortable environment created to help
                        you feel more at ease when you arrive.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurOfficeSection;