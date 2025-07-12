import { motion } from "framer-motion";
import { floatingAnimation, glowAnimation } from "@/lib/animations";

export default function FloatingAvatar() {
  return (
    <motion.div
      className="w-64 h-64 mx-auto mb-8 relative"
      {...floatingAnimation}
    >
      <motion.img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
        alt="AI/ML Developer Avatar"
        className="w-full h-full object-cover rounded-full glass-card glow-effect"
        {...glowAnimation}
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--electric-blue)]/20 to-purple-500/20" />
    </motion.div>
  );
}
