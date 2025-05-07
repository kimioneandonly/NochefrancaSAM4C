import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'qualifications', label: 'Qualifications' },
    { id: 'blog', label: 'Blog' }, // Added Blog
    { id: 'contact', label: 'Contact' }
  ];

  const handleViewBlog = () => {
    const blogElement = document.getElementById('blog');
    if (blogElement) {
      blogElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        return {
          id: item.id,
          element,
          top: element ? element.offsetTop : 0,
          height: element ? element.offsetHeight : 0
        };
      });

      const scrollPosition = window.scrollY + 100;

      let currentSection = 'hero';
      for (const section of sections) {
        if (!section.element) continue;

        const sectionBottom = section.top + section.height;
        if (scrollPosition >= section.top && scrollPosition < sectionBottom) {
          currentSection = section.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          height: '80px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '1.5rem clamp(1rem, 5vw, 2rem)',
          background: '#000000',
          backdropFilter: 'blur(10px)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >

        <motion.div
          onClick={() => scrollToSection('hero')}
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#0369CF',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          whileHover={{
            scale: 1.05,
            color: '#0369CF'
          }}
        >
          KimioneAndOnly
        </motion.div>

        {!isMobile && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 2rem)', alignItems: 'center' }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  color: activeSection === item.id ? '#0369CF' : 'white',
                  fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                  fontWeight: 500,
                  position: 'relative',
                  padding: '0.5rem 0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  color: '#0369CF',
                  y: -2
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#0369CF'
                    }}
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            ))}
          </motion.nav>
        )}

        {isMobile && (
          <motion.button
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              zIndex: 1001
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        )}
      </motion.header>

      {isMobile && isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(26, 26, 46, 0.98)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            padding: '6rem 1rem 2rem'
          }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                color: activeSection === item.id ? '#0369CF' : 'white',
                fontSize: '1.5rem',
                fontWeight: 500,
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                color: '#0369CF',
                x: 10
              }}
            >
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
