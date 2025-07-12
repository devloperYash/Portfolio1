import { motion } from "framer-motion";
import { scaleIn, staggerChildren } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const internships = [
  {
    company: "Intel Unnati",
    role: "LLMs & Knowledge Graphs",
    icon: "🔧",
    color: "text-[var(--electric-blue)]",
    learnings: [
      "Advanced LLM architectures",
      "Knowledge graph construction", 
      "Enterprise AI solutions",
      "Performance optimization"
    ]
  },
  {
    company: "Java Development",
    role: "Backend & Enterprise Applications",
    icon: "☕",
    color: "text-orange-500",
    learnings: [
      "Spring Boot framework",
      "Microservices architecture",
      "Database optimization",
      "RESTful API design"
    ]
  },
  {
    company: "Cloud Computing",
    role: "AWS & Azure Solutions", 
    icon: "☁️",
    color: "text-[var(--neon-green)]",
    learnings: [
      "AWS infrastructure",
      "Containerization",
      "DevOps practices",
      "Scalable architectures"
    ]
  },
  {
    company: "AI/ML Research",
    role: "Deep Learning & Neural Networks",
    icon: "🧠",
    color: "text-purple-500",
    learnings: [
      "Neural network architectures",
      "Computer vision models",
      "NLP applications",
      "Model deployment"
    ]
  },
  {
    company: "GitHub Trainer",
    role: "Workshop Instructor",
    icon: "🌟",
    color: "text-white",
    learnings: [
      "Git version control",
      "Collaboration workflows",
      "Open source practices", 
      "Community building"
    ]
  }
];

function FlipCard({ internship, index }: { internship: typeof internships[0], index: number }) {
  return (
    <motion.div
      className="flip-card group cursor-pointer h-64"
      variants={scaleIn}
      custom={index}
      whileHover={{ rotateY: 180 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="glass-card rounded-xl h-full relative overflow-hidden transition-transform duration-700">
        {/* Front */}
        <motion.div 
          className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-4xl mb-4">{internship.icon}</div>
          <h3 className="text-xl font-bold mb-2">{internship.company}</h3>
          <p className="text-gray-300">{internship.role}</p>
        </motion.div>
        
        {/* Back */}
        <motion.div 
          className="absolute inset-0 p-6 flex flex-col justify-center"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <h4 className={`text-lg font-bold mb-3 ${internship.color}`}>Key Learnings:</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            {internship.learnings.map((learning, idx) => (
              <li key={idx}>• {learning}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function InternshipsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="internships" className="py-20 bg-gradient-to-b from-[var(--dark-bg)] to-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Internships
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildren}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {internships.map((internship, index) => (
            <FlipCard key={internship.company} internship={internship} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
