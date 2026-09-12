import Image from "next/image";

const QuoteSection = () => {
    return (
        <section className="w-full overflow-hidden">
            <div className="relative h-[590px] w-full max-[767px]:h-[456px]">
                <Image
                    src="/images/QuoteBackground.jpeg"
                    alt="Soft green leaves in warm natural light"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-[var(--color-text)]/35" />

                {/* Quote */}
                <div
                    className="
                        absolute
                        left-[9.15vw]
                        top-[250px]
                        w-[900px]
                        max-[767px]:inset-y-0
                        max-[767px]:left-[25px]
                        max-[767px]:right-[25px]
                        max-[767px]:top-auto
                        max-[767px]:flex
                        max-[767px]:items-center
                        max-[767px]:w-auto
                    "
                >
                    <div>
                        <div
                            className="
                                mb-[24px]
                                font-[var(--font-body)]
                                text-[12px]
                                font-normal
                                tracking-[2px]
                                text-[var(--color-light)]
                                uppercase
                            "
                        >
                            A GROUNDED SPACE TO BEGIN
                        </div>

                        <p
                            className="
                                font-[family-name:var(--font-heading)]
                                text-[48px]
                                font-light
                                leading-[60px]
                                tracking-[-0.38px]
                                text-[var(--color-light)]
                                max-[767px]:text-[31px]
                                max-[767px]:leading-[41px]
                                max-[767px]:tracking-[-0.32px]
                            "
                        >
                            You don't have to carry everything alone.{" "}
                            <span className="font-[family-name:var(--font-heading-italic)]">
                                Therapy can be a place to slow down, feel safe,
                                and begin to understand what you need.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;