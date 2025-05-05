import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const skillsData = [
    {
      category: "Frontend",
      icon: "💻",
      skills: [
        { name: "React", level: 90, icon: "/icons/react.jpg" },
        { name: "JavaScript", level: 85, icon: "/icons/js.png" },
        { name: "HTML/CSS", level: 95, icon: "/icons/html.png" },
        { name: "Tailwind", level: 85, icon: "/icons/tailwind.jpg" },
      ]
    },
    {
      category: "Backend",
      icon: "🔧",
      skills: [
        { name: "Node.js", level: 80, icon: "/icons/nodejs.jpg" },
        { name: "mySQL", level: 65, icon: "/icons/firebase.jpg" },
      ]
    },
    {
      category: "Tools",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, icon: "/icons/git.jpg" },
        { name: "VS Code", level: 90, icon: "/icons/vscode.jpg" },
        { name: "Aseprite", level: 70, icon: "/icons/aseprite.jpg" },
        { name: "Canva", level: 90, icon: "/icons/canva.jpg" },
        { name: "Adobe Photoshop", level: 85, icon: "/icons/ap.png" },
        { name: "Adobe Illustrator", level: 80, icon: "/icons/ai.png" },
      ]
    }
  ];

  const activeSkills = skillsData.find(cat => cat.category === activeCategory)?.skills || [];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#000000'
      }}
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '3rem',
          textAlign: 'center',
          color: '#0369CF'  // Changed to #0369CF
        }}
      >
        My Skills
      </motion.h2>

      {/* Category Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
      }}>
        {skillsData.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveCategory(category.category)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              backgroundColor: activeCategory === category.category
                ? 'rgba(3, 105, 207, 0.2)' // Changed to #0369CF
                : 'rgba(255, 255, 255, 0.05)',
              border: activeCategory === category.category
                ? '1px solid #0369CF'       // Changed to #0369CF
                : '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}
            whileHover={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{category.icon}</span>
            {category.category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
      }}>
        {activeSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
              backgroundColor: '#000000',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: hoveredSkill === skill.name ? 'translateY(-5px)' : 'none',
              boxShadow: hoveredSkill === skill.name
                ? '0 10px 30px rgba(3, 105, 207, 0.3)'  // Changed to #0369CF
                : 'none',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '10px',
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                {skill.icon ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      e.target.src = '/icons/default-skill.svg';
                      e.target.style.padding = '10px';
                      e.target.style.objectFit = 'contain';
                    }}
                  />
                ) : (
                  <span style={{ fontSize: '1.5rem' }}>🛠️</span>
                )}
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'white',
                margin: 0,
              }}>
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
