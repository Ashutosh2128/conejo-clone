import SectionHeading from "./SectionHeading";
import Button from "./Button";

const specialties = [
    {
        title: "Trauma",
        description:
            "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
    },
    {
        title: "EMDR",
        description:
            "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    },
    {
        title: "Dissociation",
        description:
            "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    },
    {
        title: "Special Needs Parenting",
        description:
            "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    },
];

const SpecialtiesSection = () => {
    return (
        <section className="w-full bg-[var(--color-white)] mt-[65px] pb-[55px]">
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    grid-cols-24
                    gap-x-[11px]
                    gap-y-[11px]
                    px-[9.15vw]
                    py-[67px]
                "
            >
                {/* LEFT — Section heading */}
                <div className="col-span-8">
                    <SectionHeading
                        size="medium"
                        className="w-[350px] text-[40px] leading-[50px] -ml-[10px]"
                    >
                        Our{" "}
                        <span
                            className="
                                font-[family-name:var(--font-script)]
                                text-[40px]
                                font-normal
                                tracking-normal
                                text-[var(--color-accent)]
                                ml-[10px]
                            "
                        >
                            specialties
                        </span>{" "}
                        include...
                    </SectionHeading>
                </div>

                {/* RIGHT — 2 × 2 specialties grid */}
                <div
                    className="
                        col-span-16
                        grid
                        grid-cols-2
                        gap-x-[50px]
                        gap-y-[130px]
                        mt-[20px]
                        ml-[38px]
                    "
                >
                    {specialties.map((specialty) => (
                        <div
                            key={specialty.title}
                            className="
                                flex
                                min-h-[324px]
                                flex-col
                                items-start
                                gap-y-[25px]
                            "
                        >
                            {/* 1. Heading */}
                            <h3
                                className="
                                    font-[family-name:var(--font-heading)]
                                    text-[28.4269px]
                                    font-light
                                    leading-[31.8793px]
                                    tracking-[-0.234269px]
                                    text-[var(--color-text)]
                                    pb-[10px]
                                "
                            >
                                {specialty.title}
                            </h3>

                            {/* 2. Paragraph */}
                            <p
                                className="
                                    font-[var(--font-body)]
                                    text-[16.2573px]
                                    font-light
                                    leading-[30.1911px]
                                    text-[var(--color-text)]
                                "
                            >
                                {specialty.description}
                            </p>

                            {/* 3. Button */}
                            <div className="mt-auto -mt-[100px]">
                                <Button href="#" variant="underline">
                                    LEARN MORE
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialtiesSection;