import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillCubeProps {
  icon: ReactNode;
  name: string;
  color: string;
  delay?: number;
}

export default function SkillCube({ icon, name, color, delay = 0 }: SkillCubeProps) {
  return (
    <motion.div
      className="glass-card p-6 rounded-xl text-center card-3d glow-effect group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`text-4xl ${color} mb-4 group-hover:scale-110 transition-transform`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <p className="font-semibold">{name}</p>
    </motion.div>
  );
}
