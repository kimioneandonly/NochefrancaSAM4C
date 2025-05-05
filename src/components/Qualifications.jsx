import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaAward, FaCode } from 'react-icons/fa';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Qualifications() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState('education');
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (e, image) => {
    e.stopPropagation();
    setExpandedImage(image);
  };

  const educationData = [
    {
      id: 1,
      title: "Bachelor of Science in Information Technology Degree",
      institution: "Western Mindanao State University",
      year: "2020 - 2025",
      description: "Specialized in Graphic Design, Web Development, Application Development and Software Engineering."
    },
    {
      id: 2,
      title: "Senior High School Diploma",
      institution: "Pilar College of Zamboanga City Inc.",
      year: "2018 - 2020",
      description: "An intensive two-year program focused on the Humanities and Social Sciences, with an emphasis on research, history, and technology."
    },
    {
      id: 3,
      title: "High School Diploma",
      institution: "Sinunuc National High School",
      year: "2014 - 2018",
      description: "A foundational four-year program designed to develop core competencies in academic subjects, critical thinking, and character building. Emphasis on Science, Mathematics, Language, and Social Studies, preparing students for Senior High School."
    }
  ];

  const experienceData = [
    {
      id: 1,
      title: "Capstone Project",
      institution: "WMSU CCS",
      year: "2025 - Present",
      description: "Assisted in developing a Web-based MIS System for Our Lady of Peace and Good Voyage"
    },
    {
      id: 2,
      title: "e-Commerce Website",
      institution: "WMSU CCS",
      year: "2023",
      description: "Developed and maintained an e-Commerce Web for IT - Elective 2"
    },
    {
      id: 3,
      title: "Software Engineering",
      institution: "WMSU CCS",
      year: "2022",
      description: "Assisted in developing Individual Performance Commitment and Review in Western Mindanao State University."
    }
  ];

  const certificationData = [
    {
      id: 1,
      title: "Generative AI for Beginners",
      institution: "LinkedIn",
      year: "2025",
      description: "An introductory course on the fundamentals and applications of generative AI"
    },
    {
      id: 2,
      title: "Copilot for Startups",
      institution: "LinkedIn",
      year: "2025",
      description: "A course on leveraging Microsoft Copilot tools to boost productivity and growth in startups."
    }
  ];

  const projectsData = [
    {
      id: 1,
      title: "Church Management System",
      institution: "Capstone Project",
      year: "2025",
      description: "A web-based MIS for Our Lady of Peace and Good Voyage",
      image: "/images/CHURCH-MIS.png",
      technologies: ["PHP", "Laravel"],
      liveLink: "http://church-management-system.free.nf/login/",
      githubLink: "https://github.com/Aiko-meer/chrchmanagement",
      moreDescription: "A centralized digital system for managing church records, events, members, and finances—designed to streamline operations, improve accessibility, and support sustainability for Our Lady of Peace and Good Voyage Parish.",
    },
    {
      id: 2,
      title: "Pokémon Web Project",
      institution: "Weekly Project",
      year: "2025",
      description: "Comprehensive Pokémon encyclopedia with team building features and many more!",
      image: "/images/POKEDEX.png",
      technologies: ["React", "CSS", "JSON Server"],
      githubLink: "https://drive.google.com/file/d/1xWbcEc-65VPpi8i9iJ2lRdZSWdwkrVsI/view?usp=sharing",
      moreDescription: "A feature-rich Pokémon web app that allows users to explore detailed Pokémon information, build custom teams, simulate battles, and track battle history. Uses React for the frontend and JSON Server for mock API responses.",
    },
    {
      id: 3,
      title: "To-do List",
      institution: "Weekly Project 2",
      year: "2025",
      description: "A simple To-do list project that was tasked by our instructor",
      image: "/images/todolist.png",
      technologies: ["React", "CSS"],
      githubLink: "https://drive.google.com/file/d/1oyPOrZohNFFGMxvXXLMbPaYD-POI2amc/view?usp=sharing",
      moreDescription: "A clean, intuitive to-do list application with task prioritization, completion tracking, and responsive design. Built with React for state management and modern CSS for styling.",
    },
    {
      id: 4,
      title: "E-Commerce Apparel Store",
      institution: "IT Elective 2 Project",
      year: "2023",
      description: "Online ordering platform for clothings delivery",
      image: "/images/APPAREL.png",
      technologies: ["PHP", "phpMyAdmin", "XAMPP"],
      liveLink: "https://www.uniqlo.com/us/en/spl/ut/mofusand-fruits-paradise?srsltid=AfmBOopFgV7QxKtOZ2DcV9p6quf62lQdZt9tT06Nd2pb1qUauQZnPadg",
      githubLink: "https://drive.google.com/file/d/1h1xBRK5HR_r7YbY0zBsCWvotudf8il7e/view?usp=sharing",
      moreDescription: "An online apparel store offering a curated selection of stylish and high-quality clothing for all occasions, with a seamless shopping experience and secure checkout.",
    }
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case 'education': return educationData;
      case 'experience': return experienceData;
      case 'certifications': return certificationData;
      case 'projects': return projectsData;
      default: return educationData;
    }
  };

  const getIcon = () => {
    switch (activeTab) {
      case 'education': return <FaGraduationCap />;
      case 'experience': return <FaBriefcase />;
      case 'certifications': return <FaAward />;
      case 'projects': return <FaCode />;
      default: return <FaGraduationCap />;
    }
  };

  const renderContent = (item) => {
    if (activeTab === 'projects') {
      return (
        <div
          id="projects"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',

          }}>
          {/* Project header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '0.5rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgb(2, 2, 2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0369CF', // Changed color
              fontSize: '1.2rem'
            }}>
              {getIcon()}
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: 'white',
              margin: 0
            }}>
              {item.title}
            </h3>
          </div>

          {/* Project meta */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            marginBottom: '0.5rem'
          }}>
            <span style={{
              color: '#0369CF', // Changed color
              fontWeight: '500',
              fontSize: '0.9rem'
            }}>
              {item.institution}
            </span>
            <span style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem'
            }}>
              {item.year}
            </span>
          </div>

          {/* Project image */}
          <div
            onClick={(e) => handleImageClick(e, item.image)}
            style={{
              cursor: 'zoom-out',
              height: '200px',
              width: '100%',
              overflow: 'hidden',
              borderRadius: '8px',
              marginBottom: '1rem',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>

          {/* Project description */}
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            margin: 0,
            marginBottom: '1rem'
          }}>
            {item.description}
          </p>

          {/* Technologies */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            {item.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(0, 219, 222, 0.1)',
                  color: '#0369CF', // Changed color
                  fontSize: '0.8rem',
                  border: '1px solid rgba(0, 219, 222, 0.3)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{
            display: 'flex',
            gap: '1rem',
          }}>
            <a
              href={item.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#0369CF', // Changed color
                color: 'black',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                backgroundColor: '#0254a3', // Changed color
                transform: 'scale(1.05)'
              }}
            >
              <FiExternalLink size={14} /> Live Demo
            </a>
            <a
              href={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.9rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                transform: 'scale(1.05)'
              }}
            >
              <FiGithub size={14} /> View Code
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          paddingLeft: '3rem'
        }}>
          {/* Item header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '0.5rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(1, 124, 255, 0.28)', // Changed color
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0369CF',  // Changed color
              fontSize: '1.2rem'
            }}>
              {getIcon()}
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: 'white',
              margin: 0
            }}>
              {item.title}
            </h3>
          </div>

          {/* Item meta */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            marginBottom: '0.5rem'
          }}>
            <span style={{
              color: '#0369CF',  // Changed color
              fontWeight: '500',
              fontSize: '0.9rem'
            }}>
              {item.institution}
            </span>
            <span style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem'
            }}>
              {item.year}
            </span>
          </div>

          {/* Description */}
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            margin: 0
          }}>
            {item.description}
          </p>
        </div>
      );
    }
  };

  return (
    <motion.section
      ref={ref}
      id="qualifications"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        backgroundColor: '#00000'
      }}
    >
      {/* Section title */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '3rem',
          textAlign: 'center',
          color: '#0369CF', // Changed color
          position: 'relative'
        }}
      >
        Qualifications
        <motion.span
          initial={{ width: 0 }}
          animate={inView ? { width: '100px' } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            height: '4px',
            backgroundColor: '#00000',
            margin: '0.5rem auto 0',
            borderRadius: '2px'
          }}
        />
      </motion.h2>

      {/* Tab navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        {[
          { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
          { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
          { id: 'certifications', label: 'Certifications', icon: <FaAward /> },
          { id: 'projects', label: 'Projects', icon: <FaCode /> }
        ].map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              backgroundColor: activeTab === tab.id
                ? 'rgba(0, 219, 222, 0.2)'
                : 'rgba(255, 255, 255, 0.05)',
              border: activeTab === tab.id
                ? '1px solid rgba(0, 219, 222, 0.5)'
                : '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}
            whileHover={{
              backgroundColor: activeTab === tab.id
                ? 'rgba(3, 105, 207, 0.3)' // Changed hover color
                : 'rgba(255, 255, 255, 0.1)',
            }}
          >
            {tab.icon}
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Content grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1.5rem'
      }}>
        {getActiveData().map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            style={{
              backgroundColor: 'rgb(0, 0, 0)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
            whileHover={{
              transform: activeTab !== 'projects' ? 'translateY(-5px)' : 'none',
              boxShadow: activeTab !== 'projects' ? '0 15px 40px rgba(3, 105, 207, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.2)' // Changed hover shadow
            }}
            onClick={activeTab === 'projects' ? () => setSelectedProject(item) : undefined}
          >
            {/* Timeline indicator for non-project items */}
            {activeTab !== 'projects' && (
              <div style={{
                position: 'absolute',
                left: '2rem',
                top: '2.5rem',
                bottom: '2.5rem',
                width: '4px',
                backgroundColor: '#0369CF', // Changed color
                borderRadius: '2px'
              }} />
            )}

            {renderContent(item)}
          </motion.div>
        ))}
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpandedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'zoom-out',
            padding: '2rem',
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpandedImage(null);
            }}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              zIndex: 1001,
            }}
          >
            <FiX />
          </button>
          <motion.img
            src={expandedImage}
            alt="Expanded view"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            style={{
              maxHeight: '90vh',
              maxWidth: '90vw',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
        </motion.div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'rgba(26, 26, 46, 0.95)',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              <FiX />
            </button>

            <h3 style={{
              fontSize: '2rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#0369CF', // Changed color
            }}>
              {selectedProject.title}
            </h3>

            <div
              onClick={(e) => handleImageClick(e, selectedProject.image)}
              style={{
                cursor: 'zoom-in',
                marginBottom: '1.5rem',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '300px',
              }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height:'100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: '2rem',
            }}>
              {selectedProject.moreDescription}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{
                color: 'white',
                fontSize: '1.2rem',
                marginBottom: '1rem',
              }}>
                Technologies Used:
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      backgroundColor: 'rgba(0, 219, 222, 0.1)',
                      color: '#0369CF', // Changed color
                      border: '1px solid rgba(0, 219, 222, 0.3)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2rem',
            }}>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#0369CF', // Changed color
                  color: 'black',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  backgroundColor: '#0254a3', // Changed hover color
                  transform: 'scale(1.05)'
                }}
              >
                <FiExternalLink /> Live Demo
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.05)'
                }}
              >
                <FiGithub /> View Code
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}

