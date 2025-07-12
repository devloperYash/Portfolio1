import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { fadeInLeft, fadeInRight, staggerChildren } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8806393646",
    bgColor: "bg-[var(--electric-blue)]"
  },
  {
    icon: Mail,
    title: "Email", 
    value: "yashlawankar@gmail.com",
    bgColor: "bg-[var(--neon-green)]"
  }
];

const socialLinks = [
  { icon: Github, href: "#", hoverColor: "hover:bg-[var(--electric-blue)]" },
  { icon: Linkedin, href: "#", hoverColor: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", hoverColor: "hover:bg-blue-400" },
  { icon: Instagram, href: "#", hoverColor: "hover:bg-red-500" }
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I will get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={staggerChildren}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="glass-card p-6 rounded-xl glow-effect"
                variants={fadeInLeft}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center`}>
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{info.title}</h3>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              className="flex space-x-4"
              variants={fadeInLeft}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className={`w-12 h-12 bg-gray-800 ${link.hoverColor} rounded-full flex items-center justify-center transition-colors glow-effect`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="glass-card p-8 rounded-xl"
            variants={fadeInRight}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <motion.input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
                    placeholder="John"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <motion.input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
                    placeholder="Doe"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
                  placeholder="Project Collaboration"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <motion.textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-8 py-3 bg-[var(--electric-blue)] hover:bg-blue-600 rounded-lg font-semibold transition-all glow-effect"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
