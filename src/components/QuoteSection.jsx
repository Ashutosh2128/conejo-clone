import Image from "next/image";

const QuoteSection = () => {
    return (
        <section className="w-full">

            {/* Main container */}
            <div className="relative h-[590px] w-full overflow-hidden">

                {/* Background image */}
                <Image
                    src="/images/QuoteImage.webp"
                    alt="Children running on the beach"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/46" />

                {/* Quote */}
                <div
                    className="
                        absolute
                        left-[9.15vw]
                        top-[300px]
                        w-[1000px]
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
                        "
                    >
                        You deserve a place where your story is
                        <br />
                        heard, valued, and understood.{" "}
                        <span
                            className="
                                font-[family-name:var(--font-heading-italic)]
                            "
                        >
                            Nothing will be
                            <br />
                            too heavy for us to carry together.
                        </span>
                    </p>
                </div>

            </div>

        </section>
    );
};

export default QuoteSection;