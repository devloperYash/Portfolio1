import { motion } from "framer-motion";
import FloatingAvatar from "@/components/3d/FloatingAvatar";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <motion.div 
        className="container mx-auto px-6 text-center"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <motion.div className="mb-8" variants={fadeInUp}>
          <FloatingAvatar />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={fadeInUp}
        >
          Hi, I'm <span className="text-gradient">Yash Lawankar</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          variants={fadeInUp}
        >
          AI/ML Developer & Java Specialist
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Computer Science Engineering student passionate about creating intelligent solutions through machine learning and innovative software development.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeInUp}
        >
          <motion.button
            className="px-8 py-3 bg-[var(--electric-blue)] hover:bg-blue-600 rounded-lg font-semibold transition-all glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          <motion.button
            className="px-8 py-3 glass-card hover:bg-white/10 rounded-lg font-semibold transition-all border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
