import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '0,0,0',
        color: 'white',
        padding: 'clamp(1rem, 5vw, 4rem)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        scrollMarginTop: '80px'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(1.5rem, 4vw, 3rem)',
        zIndex: 2,
        alignItems: 'center',
        textAlign: 'center'
      }}>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >

          <img
            src="/images/profile.jpg"
            alt="Profile"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '35%',
              objectFit: 'cover',
              border: `3px solid ${'#0369CF'}`, // Changed border color
              boxShadow: `0 4px 15px rgba(3, 105, 207, 0.4)` // Changed shadow color
            }}
          />

          <h1 style={{
            fontSize: 'clamp(2rem, 8vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            margin: 0,
            color: 'white'
          }}>
            Hi, I'm <span style={{ color: '#0369CF' }}>Kimione</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: 'clamp(1.25rem, 4vw, 2rem)',
              fontWeight: 600,
              margin: 0,
              color: '#0369CF'
            }}
          >
            Pixel Artist, Graphic Designer, & Web Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              opacity: 0.85,
              maxWidth: '700px',
              lineHeight: 1.6,
              margin: '0.5rem 0'
            }}
          >
            Blending creative visual artistry with a passion for building engaging web experiences using tools like React and Vite.
          </motion.p>
        </motion.div>

        {/* Removed Stats Section */}

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(3, 105, 207, 0.1)', // Changed hover bg
              borderColor: '#0369CF'  //Changed border color
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#0369CF',  // Changed text color
              backgroundColor: 'transparent',
              border: `2px solid rgba(3, 105, 207, 0.5)`, // Changed border color
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{color: '#0369CF'}}>Wanna talk business? Contact Me!</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: 0.03,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Removed floating dots */}
    </section>
  );
};

export default HeroSection;
