import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    year: "2024",
    title: "Aavishkar Winner",
    description: "First place in state-level innovation competition for AI-based solution",
    color: "text-[var(--electric-blue)]",
    bgColor: "bg-[var(--electric-blue)]",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    direction: "left"
  },
  {
    year: "2023",
    title: "University Color Coat Holder",
    description: "Recognized for outstanding academic and extracurricular performance",
    color: "text-[var(--neon-green)]",
    bgColor: "bg-[var(--neon-green)]",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    direction: "right"
  },
  {
    year: "2023",
    title: "Hackathon Winner",
    description: "Multiple wins in Espiranza and Ecothon competitions",
    color: "text-purple-500",
    bgColor: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    direction: "left"
  }
];

export default function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        
        <div className="relative timeline-line max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className={`mb-16 flex flex-col ${achievement.direction === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
              <motion.div 
                className={`w-full md:w-1/2 ${achievement.direction === 'right' ? 'md:pl-8' : 'md:pr-8'} mb-8 md:mb-0`}
                variants={achievement.direction === 'right' ? fadeInRight : fadeInLeft}
                initial="initial"
                animate={isVisible ? "animate" : "initial"}
                transition={{ delay: index * 0.2 }}
              >
                <div className="glass-card p-6 rounded-xl glow-effect">
                  <div className="flex items-center mb-4">
                    <div className={`w-4 h-4 ${achievement.bgColor} rounded-full mr-4`} />
                    <span className={`${achievement.color} font-semibold`}>{achievement.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </motion.div>
              <motion.div 
                className={`w-full md:w-1/2 ${achievement.direction === 'right' ? 'md:pr-8' : 'md:pl-8'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 0.5, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="rounded-xl w-full h-auto" 
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
