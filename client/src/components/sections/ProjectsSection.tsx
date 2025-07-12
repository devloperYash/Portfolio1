import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Flora Vision AI",
    description: "Advanced plant recognition system using computer vision and machine learning. Identifies plant species with 95% accuracy and provides care recommendations.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "TensorFlow", "OpenCV", "Flask"],
    color: "text-[var(--neon-green)]",
    tagColor: "bg-[var(--neon-green)]/20 text-[var(--neon-green)]",
    badgeColor: "bg-[var(--neon-green)] text-[var(--dark-bg)]",
    badge: "AI/ML"
  },
  {
    title: "LLM Knowledge Graph",
    description: "Intelligent knowledge graph construction using Large Language Models. Extracts relationships and builds dynamic knowledge networks from unstructured data.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "Transformers", "Neo4j", "BERT"],
    color: "text-purple-400",
    tagColor: "bg-purple-500/20 text-purple-400",
    badgeColor: "bg-purple-500 text-white",
    badge: "LLM"
  }
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[var(--dark-bg)] to-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer glow-effect"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`${project.badgeColor} px-3 py-1 rounded-full text-sm font-semibold`}>
                    {project.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${project.color}`}>{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`${project.tagColor} px-2 py-1 rounded text-sm`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.button 
                    className="flex items-center space-x-2 text-[var(--electric-blue)] hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </motion.button>
                  <motion.button 
                    className={`flex items-center space-x-2 ${project.color} hover:opacity-70 transition-opacity`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
