// import Image from "next/image";
// import Button from "./Button";

// const Hero = () => {
//     return (
//         <section className="w-full bg-[var(--color-light)] pt-2.5">

//             {/* =========================
//                 MOBILE / TABLET HERO
//                 0px - 767px
//             ========================== */}
//             <div className="flex w-full flex-col min-[768px]:hidden">

//                 {/* CONTENT */}
//                 <div className="px-[25px] pt-[25px]">

//                     {/* LABEL */}
//                     <div
//                         className="
//                             w-full
//                             font-[var(--font-body)]
//                             text-[15.7778px]
//                             font-light
//                             leading-[29.1911px]
//                             tracking-[1.8px]
//                             uppercase
//                         "
//                     >
//                         ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp;
//                         ACROSS CA
//                     </div>


//                     {/* HEADING */}
//                     <h1
//                         className="
//                             mt-[43px]
//                             w-full
//                             font-[family-name:var(--font-heading)]
//                             text-[38.1283px]
//                             font-light
//                             leading-[48.5px]
//                             tracking-[-0.381283px]
//                             text-[var(--color-text)]
//                         "
//                     >
//                         Rebuild your foundation on solid ground and finally
//                         begin to{" "}
//                         <span
//                             className="
//                                 font-[family-name:var(--font-script)]
//                                 text-[40px]
//                                 font-normal
//                                 leading-none
//                                 tracking-normal
//                                 text-[var(--color-accent)]
//                             "
//                         >
//                             thrive
//                         </span>
//                         .
//                     </h1>


//                     {/* DESCRIPTION */}
//                     <p
//                         className="
//                             mt-[36px]
//                             w-full
//                             font-[var(--font-body)]
//                             text-[15.7778px]
//                             font-light
//                             leading-[29.1911px]
//                             text-[var(--color-text)]
//                         "
//                     >
//                         Specialized therapy for adults, couples, teens, and
//                         children to reflect, heal, and grow.
//                     </p>


//                     {/* CTA */}
//                     <div className="mt-[31px]">
//                         <Button href="#appointment">
//                             BOOK AN APPOINTMENT
//                         </Button>
//                     </div>

//                 </div>


//                 {/* IMAGES */}
//                 <div
//                     className="
//                         mt-[61px]
//                         flex
//                         w-full
//                         items-start
//                         justify-between
//                     "
//                 >

//                     {/* LARGE IMAGE */}
//                     <div className="h-[460px] w-[76.8vw] shrink-0">
//                         <Image
//                             src="/images/HeroImage1.webp"
//                             alt="Family on beach"
//                             width={600}
//                             height={600}
//                             className="h-full w-full object-cover"
//                             priority
//                         />
//                     </div>


//                     {/* RIGHT NARROW IMAGE */}
//                     <div className="h-[330px] w-[17.3vw] shrink-0">
//                         <Image
//                             src="/images/HeroImage2.webp"
//                             alt="Ocean waves"
//                             width={400}
//                             height={800}
//                             className="h-full w-full object-cover"
//                             style={{
//                                 objectPosition: "62.8568% 52.8033%",
//                             }}
//                         />
//                     </div>

//                 </div>

//             </div>


//             {/* =========================
//                 DESKTOP HERO
//                 768px+
//             ========================== */}
//             <div
//                 className="
//                     hidden
//                     w-full
//                     grid-cols-[560px_minmax(0,1fr)_132px]
//                     min-[768px]:grid
//                 "
//             >

//                 {/* LEFT IMAGE */}
//                 <div className="mt-[30px] h-[600px] w-[510px]">
//                     <Image
//                         src="/images/HeroImage1.webp"
//                         alt="Family on beach"
//                         width={600}
//                         height={600}
//                         className="h-full w-full object-cover"
//                         priority
//                     />
//                 </div>


//                 {/* CENTER */}
//                 <div className="relative left-[90px] mt-[30px] h-[600px]">

//                     {/* LABEL */}
//                     <div
//                         className="
//                             absolute
//                             top-[8px]
//                             w-[450px]
//                             font-[var(--font-body)]
//                             text-[14.2173px]
//                             font-light
//                             leading-[29.1911px]
//                             tracking-[1.8px]
//                             uppercase
//                         "
//                     >
//                         ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK
//                         &amp; ACROSS CA
//                     </div>


//                     {/* HEADING */}
//                     <h1
//                         className="
//                             absolute
//                             top-[220px]
//                             w-[680px]
//                             font-[family-name:var(--font-heading)]
//                             text-[62.2998px]
//                             font-light
//                             leading-[80px]
//                             tracking-[-0.462998px]
//                             text-[var(--color-text)]
//                         "
//                     >
//                         Rebuild your foundation
//                         <br />
//                         on solid ground and finally
//                         <br />
//                         begin to{" "}
//                         <span
//                             className="
//                                 ml-3
//                                 font-[family-name:var(--font-script)]
//                                 text-[58.2998px]
//                                 font-normal
//                                 leading-none
//                                 tracking-normal
//                                 text-[var(--color-accent)]
//                             "
//                         >
//                             thrive
//                         </span>
//                         .
//                     </h1>


//                     {/* DESCRIPTION */}
//                     <p
//                         className="
//                             absolute
//                             top-[480px]
//                             w-[700px]
//                             font-[var(--font-body)]
//                             text-[16.1568px]
//                             font-light
//                             leading-[29.0822px]
//                             text-[var(--color-text)]
//                         "
//                     >
//                         Specialized therapy for adults, couples, teens, and
//                         children to reflect, heal, and grow.
//                     </p>


//                     {/* CTA */}
//                     <div className="absolute top-[555px]">
//                         <Button href="#appointment">
//                             BOOK AN APPOINTMENT
//                         </Button>
//                     </div>

//                 </div>


//                 {/* RIGHT IMAGE */}
//                 <div className="ml-3 mt-[248px] h-[382px] w-30">
//                     <Image
//                         src="/images/HeroImage2.webp"
//                         alt="Ocean waves"
//                         width={400}
//                         height={800}
//                         className="h-full w-full object-cover"
//                         style={{
//                             objectPosition: "62.8568% 52.8033%",
//                         }}
//                     />
//                 </div>

//             </div>

//         </section>
//     );
// };

// export default Hero;





import Image from "next/image";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="w-full bg-[var(--color-light)] pt-2.5">

            {/* =========================
                MOBILE / TABLET HERO
                0px - 767px
            ========================== */}
            <div className="flex w-full flex-col min-[768px]:hidden">

                {/* CONTENT */}
                <div className="px-[25px] pt-[25px]">

                    {/* LABEL */}
                    <div
                        className="
                            w-full
                            font-[var(--font-body)]
                            text-[15.7778px]
                            font-light
                            leading-[29.1911px]
                            tracking-[1.8px]
                            uppercase
                        "
                    >
                        THERAPY FOR ADULTS IN SANTA MONICA
                    </div>


                    {/* HEADING */}
                    <h1
                        className="
                            mt-[43px]
                            w-full
                            font-[family-name:var(--font-heading)]
                            text-[38.1283px]
                            font-light
                            leading-[48.5px]
                            tracking-[-0.381283px]
                            text-[var(--color-text)]
                        "
                    >
                        Feel more{" "}
                        <span
                            className="
                                font-[family-name:var(--font-script)]
                                text-[40px]
                                font-normal
                                leading-none
                                tracking-normal
                                text-[var(--color-accent)]
                            "
                        >
                            grounded
                        </span>{" "}
                        in the life you're building.
                    </h1>


                    {/* DESCRIPTION */}
                    <p
                        className="
                            mt-[36px]
                            w-full
                            font-[var(--font-body)]
                            text-[15.7778px]
                            font-light
                            leading-[29.1911px]
                            text-[var(--color-text)]
                        "
                    >
                        Therapy for thoughtful, high-achieving adults
                        navigating anxiety, burnout, perfectionism, trauma,
                        and the pressure to keep everything together.
                    </p>


                    {/* CTA */}
                    <div className="mt-[31px]">
                        <Button href="#appointment">
                            START A CONVERSATION
                        </Button>
                    </div>


                    {/* LOCATION */}
                    <p
                        className="
                            mt-[25px]
                            font-[var(--font-body)]
                            text-[13px]
                            font-light
                            leading-[22px]
                            text-[var(--color-text)]
                        "
                    >
                        In-person therapy in Santa Monica · Secure telehealth
                        throughout California
                    </p>

                </div>


                {/* IMAGES */}
                <div
                    className="
                        mt-[50px]
                        flex
                        w-full
                        items-start
                        justify-between
                    "
                >

                    {/* LARGE IMAGE */}
                    <div className="h-[460px] w-[76.8vw] shrink-0">
                        <Image
                            src="/images/MayaPortrait.png"
                            alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                            width={600}
                            height={600}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>


                    {/* RIGHT NARROW IMAGE */}
                    <div className="h-[330px] w-[17.3vw] shrink-0">
                        <Image
                            src="/images/SantaMonicaCoast.avif"
                            alt="Santa Monica coastline"
                            width={400}
                            height={800}
                            className="h-full w-full object-cover"
                            style={{
                                objectPosition: "62.8568% 52.8033%",
                            }}
                        />
                    </div>

                </div>

            </div>


            {/* =========================
                DESKTOP HERO
                768px+
            ========================== */}
            <div
                className="
                    hidden
                    w-full
                    grid-cols-[560px_minmax(0,1fr)_132px]
                    min-[768px]:grid
                "
            >

                {/* LEFT IMAGE */}
                <div className="mt-[30px] h-[600px] w-[510px]">
                    <Image
                        src="/images/MayaPortrait.png"
                        alt="Calm therapy setting"
                        width={600}
                        height={600}
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>


                {/* CENTER */}
                <div className="relative left-[90px] mt-[30px] h-[600px]">

                    {/* LABEL */}
                    <div
                        className="
                            absolute
                            top-[8px]
                            w-[450px]
                            font-[var(--font-body)]
                            text-[14.2173px]
                            font-light
                            leading-[29.1911px]
                            tracking-[1.8px]
                            uppercase
                        "
                    >
                        THERAPY FOR ADULTS IN SANTA MONICA
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
                        Feel more{" "}
                        <span
                            className="
                                font-[family-name:var(--font-script)]
                                text-[58.2998px]
                                font-normal
                                leading-none
                                tracking-normal
                                text-[var(--color-accent)]
                            "
                        >
                            grounded
                        </span>
                        <br />
                        in the life you're building.
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
                        Therapy for thoughtful, high-achieving adults
                        navigating anxiety, burnout, perfectionism, trauma,
                        and the pressure to keep everything together.
                    </p>


                    {/* CTA */}
                    <div className="absolute top-[555px]">
                        <Button href="#appointment">
                            START A CONVERSATION
                        </Button>
                    </div>

                </div>


                {/* RIGHT IMAGE */}
                <div className="ml-3 mt-[248px] h-[382px] w-30">
                    <Image
                        src="/images/SantaMonicaCoast.avif"
                        alt="Natural light and calm surroundings"
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