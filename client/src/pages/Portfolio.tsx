import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingShapes from "@/components/FloatingShapes";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import InternshipsSection from "@/components/sections/InternshipsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-white">
      <AnimatePresence>
        {isLoading && <LoadingScreen isLoading={isLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FloatingShapes />
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <InternshipsSection />
          <ContactSection />
          
          {/* Footer */}
          <footer className="py-8 bg-gray-900 text-center">
            <p className="text-gray-400">© 2024 Yash Lawankar. All rights reserved.</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
