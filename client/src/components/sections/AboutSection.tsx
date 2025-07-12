import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerChildren } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[var(--dark-bg)] to-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            <img 
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Computer Science Student Coding" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={staggerChildren}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            <motion.div 
              className="glass-card p-6 rounded-xl card-3d glow-effect"
              variants={fadeInRight}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[var(--electric-blue)]">Education</h3>
              <p className="text-lg mb-2">B.E. Computer Science Engineering</p>
              <p className="text-gray-400">CGPA: 8.66</p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 rounded-xl card-3d glow-effect"
              variants={fadeInRight}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[var(--neon-green)]">Location</h3>
              <p className="text-lg">Amravati, Maharashtra, India</p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 rounded-xl card-3d glow-effect"
              variants={fadeInRight}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Bio</h3>
              <p className="text-gray-300 leading-relaxed">
                Passionate about leveraging AI and machine learning to solve real-world problems. 
                Experienced in developing intelligent systems, with a strong foundation in Java 
                and modern web technologies. Always eager to learn and contribute to innovative projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
