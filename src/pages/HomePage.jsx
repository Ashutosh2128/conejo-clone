import React from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HopeSection from "@/components/HopeSection";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteSection from "@/components/QuoteSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import HowWeWork from "@/components/HowWeWork";
import HonoringSection from "@/components/HonoringSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";
import OurOfficeSection from "@/components/OurOfficeSection";

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <HopeSection />
            <WhoWeHelp />
            <QuoteSection />
            <ExpertiseSection />
            <HowWeWork />
            <HonoringSection />
            <OurOfficeSection />
            <SpecialtiesSection />
            <AppointmentSection />
            <Footer />
        </div>
    )
}

export default HomePage