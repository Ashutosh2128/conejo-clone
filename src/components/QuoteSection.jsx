import Image from "next/image";

const QuoteSection = () => {
    return (
        <section className="w-full overflow-hidden">

            {/* MAIN CONTAINER */}
            <div
                className="
                    relative
                    h-[590px]
                    w-full

                    max-[767px]:h-[456px]
                "
            >

                {/* BACKGROUND IMAGE */}
                <Image
                    src="/images/QuoteImage.webp"
                    alt="Children running on the beach"
                    fill
                    className="object-cover"
                    priority
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/46" />


                {/* QUOTE */}
                <div
                    className="
                        absolute
                        left-[9.15vw]
                        top-[300px]
                        w-[1000px]

                        max-[767px]:inset-y-0
                        max-[767px]:left-[25px]
                        max-[767px]:right-[25px]
                        max-[767px]:top-auto
                        max-[767px]:flex
                        max-[767px]:items-center
                        max-[767px]:w-auto
                    "
                >
                    <p
                        className="
                            font-[family-name:var(--font-heading)]
                            text-[48.1283px]
                            font-light
                            leading-[60.3228px]
                            tracking-[-0.381283px]
                            text-[#F6F4EE]

                            max-[767px]:text-[31px]
                            max-[767px]:leading-[41px]
                            max-[767px]:tracking-[-0.32px]
                            max-[767px]:pb-[120px]
                        "
                    >
                        You deserve a place where your story is
                        <br className="max-[767px]:hidden" />
                        heard, valued, and understood.{" "}
                        <span className="font-[family-name:var(--font-heading-italic)]">
                            Nothing will be {" "}
                            <br className="max-[767px]:hidden" />
                            too heavy for us to carry together.
                        </span>
                    </p>
                </div>

            </div>

        </section>
    );
};

export default QuoteSection;