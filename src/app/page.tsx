"use client";

import { useState } from "react";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const handleSectionComplete = () => {
    setCurrentSection(prev => prev + 1);
  };

  return (
    <main className="min-h-screen flex flex-col items-center font-montserrat bg-gradient-to-br from-pink-300 via-pink-200 to-black">
      {currentSection === 0 && <FirstSection onComplete={handleSectionComplete} />}
      {currentSection === 1 && <SecondSection onComplete={handleSectionComplete} />}
      {currentSection === 2 && <ThirdSection />}
    </main>
  );
}
