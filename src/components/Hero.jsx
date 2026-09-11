import Image from "next/image";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="w-full bg-[var(--color-light)] pt-2.5">
            <div className="grid w-full grid-cols-[560px_minmax(0,1fr)_132px]">

                {/* LEFT IMAGE */}
                <div className="mt-[30px] h-[600px] w-[510px]">
                    <Image
                        src="/images/HeroImage1.webp"
                        alt="Family on beach"
                        width={600}
                        height={600}
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>

                {/* CENTER */}
                <div className="relative mt-[30px] h-[600px] left-[90px]">

                    {/* LABEL */}
                    <div
                        className="
                            absolute
                            top-[8px]
                            w-[450px]
                            font-[var(--font-body)]
                            text-[14.2173px]
                            font-[300]
                            leading-[29.1911px]
                            tracking-[1.8px]
                            uppercase
                        "
                    >
                        ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA
                    </div>

                    {/* HEADING */}
                    <h1
                        className="
                            absolute
                            top-[220px]
                            w-[680px]
                            font-[family-name:var(--font-heading)]
                            text-[62.2998px]
                            font-light
                            leading-[80px]
                            tracking-[-0.462998px]
                            text-[var(--color-text)]
                        "
                    >
                        Rebuild your foundation
                        <br className="mt-4.5"/>
                        on solid ground and finally
                        <br />
                        begin to{"  "}
                        <span
                            className="
                                font-[family-name:var(--font-script)]
                                text-[58.2998px]
                                font-normal
                                leading-none
                                tracking-normal
                                text-[var(--color-accent)]
                                ml-3
                            "
                        >
                            thrive
                        </span>
                        .
                    </h1>

                    {/* DESCRIPTION */}
                    <p
                        className="
                            absolute
                            top-[480px]
                            w-[700px]
                            font-[var(--font-body)]
                            text-[16.1568px]
                            font-light
                            leading-[29.0822px]
                            text-[var(--color-text)]
                        "
                    >
                        Specialized therapy for adults, couples, teens, and
                        children to reflect, heal, and grow.
                    </p>

                    {/* CTA */}
                    <div className="absolute top-[555px]">
                        <Button href="#appointment">
                            BOOK AN APPOINTMENT
                        </Button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="mt-[248px] h-[382px] w-30 ml-3">
                    <Image
                        src="/images/HeroImage2.webp"
                        alt="Ocean waves"
                        width={400}
                        height={800}
                        className="h-full w-full object-cover"
                        style={{
                            objectPosition: "62.8568% 52.8033%",
                        }}
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;