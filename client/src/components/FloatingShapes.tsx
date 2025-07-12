import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useScrollAnimation";

export default function FloatingShapes() {
  const offset = useParallax();

  const shapes = [
    { size: "w-32 h-32", color: "bg-[var(--electric-blue)]", top: "10%", left: "80%", delay: 0 },
    { size: "w-24 h-24", color: "bg-purple-500", top: "70%", left: "10%", delay: 2 },
    { size: "w-20 h-20", color: "bg-[var(--neon-green)]", top: "30%", left: "20%", delay: 4 },
    { size: "w-16 h-16", color: "bg-[var(--electric-blue)]", top: "60%", right: "15%", delay: 1 },
    { size: "w-28 h-28", color: "bg-purple-500", top: "20%", right: "30%", delay: 3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`floating-shape ${shape.size} ${shape.color} rounded-full absolute`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            transform: `translateY(${offset * (0.5 + index * 0.1)}px) rotate(${offset * 0.1}deg)`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
