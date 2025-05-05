import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <motion.section
            id="about"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            style={{
                padding: '6rem 2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#00000'
            }}
        >
            {/* Removed the problematic div */}

            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    color: '#0369CF', // Changed color here
                    position: 'relative'
                }}
            >
                About Me
                <motion.span
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100px' } : {}}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{
                        height: '4px',
                        backgroundColor: '#0369CF', // Changed color here
                        margin: '0.5rem auto 0',
                        borderRadius: '2px'
                    }}
                />
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    padding: '3rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                }}
            >
                <motion.p
                    style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '1.5rem',
                        textAlign: 'center'
                    }}
                >
                    Hello! I'm <span style={{ fontWeight: '600', color: '#0369CF' }}>Kim Philippe "Kimione" A. Nochefranca</span>. I have a passion for both the visual and the functional, enjoying the process of creating modern, responsive web experiences alongside captivating visual content. With experience in tools like <span style={{ color: '#0369CF', fontWeight: '600' }}>React</span> and <span style={{ color: '#0369CF', fontWeight: '600' }}>Vite</span>, I strive to build clean and efficient web applications.
                </motion.p>

                <motion.p
                    style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'rgba(255, 255, 255, 0.9)',
                        textAlign: 'center',
                        marginBottom: '2rem'
                    }}
                >
                    As a graphic designer, pixel artist, and 2D animator, I love crafting visually appealing and engaging content using tools like <span style={{ fontStyle: 'italic', color: '#0369CF' }}>Aseprite</span>, <span style={{ fontStyle: 'italic', color: '#0369CF' }}>Canva</span>, <span style={{ fontStyle: 'italic', color: '#0369CF' }}>Photoshop</span>, and <span style={{ fontStyle: 'italic', color: '#0369CF' }}>Illustrator</span>, and many more. I believe in the power of combining strong design principles with functional code to create user-friendly and visually stunning applications and artwork. Feel free to contact me for collaborations or projects!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1, duration: 0.8 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginTop: '2rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {['Web Development', 'UI/UX', 'Graphic Design', 'Pixel Art', '2D Animation', 'Responsive', 'Performance'].map((item, index) => (
                        <motion.span
                            key={index}
                            whileHover={{ y: -3, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                            style={{
                                padding: '0.5rem 1.2rem',
                                backgroundColor: 'rgba(0, 0, 0, 0.88)',
                                borderRadius: '50px',
                                color: '#0369CF', // Changed color here
                                border: '1px solid rgba(29, 89, 218, 0.48)',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
