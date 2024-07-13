"use client";

import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="w-full text-black bg-white flex justify-center items-center">
      <div className="w-[1000px] flex flex-col gap-6 p-4 sm:p-10">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
