import { useEffect, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { GallerySection } from "../components/GallerySection"; // ⬅️ NEW LINE



export const Home = () => {
  // const [isAuthorized, setIsAuthorized] = useState(false);

  // useEffect(() => {
  //   try {
  //     const stored = JSON.parse(localStorage.getItem("galleryAccess") || "{}");
  //     const now = Date.now();

  //     if (stored.granted && stored.expiresAt > now) {
  //       setIsAuthorized(true);
  //     } else {
  //       setIsAuthorized(false);
  //     }
  //   } catch {
  //     localStorage.removeItem("galleryAccess");
  //     setIsAuthorized(false);
  //   }
  // }, []);


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Background effect */}
      <StarBackground />
      {/* Navbar Content */}
      <Navbar />
      {/* Main Content */}
      <main>
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <GallerySection />  {/* ✅ Always rendered */}
          <ContactSection />
        </main>

      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};


