import { motion } from "framer-motion";
import SkillCube from "@/components/3d/SkillCube";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { icon: "🐍", name: "Python", color: "text-[var(--electric-blue)]" },
  { icon: "☕", name: "Java", color: "text-orange-500" },
  { icon: "🧠", name: "AI/ML", color: "text-[var(--neon-green)]" },
  { icon: "⚛️", name: "React", color: "text-blue-400" },
  { icon: "🗄️", name: "Database", color: "text-purple-500" },
  { icon: "☁️", name: "Cloud", color: "text-orange-400" },
  { icon: "🔗", name: "LLMs", color: "text-[var(--electric-blue)]" },
  { icon: "🌟", name: "Git", color: "text-red-500" },
  { icon: "🐳", name: "Docker", color: "text-blue-500" },
  { icon: "📊", name: "Analytics", color: "text-[var(--neon-green)]" },
  { icon: "🟢", name: "Node.js", color: "text-green-500" },
  { icon: "📱", name: "Mobile Dev", color: "text-purple-400" },
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCube
              key={skill.name}
              icon={<span className="text-4xl">{skill.icon}</span>}
              name={skill.name}
              color={skill.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
