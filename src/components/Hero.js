import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import styles from './Hero.module.css';
import Scene from './Scene';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const iconMap = {
  LinkedIn: <FaLinkedin />,
  GitHub: <FaGithub />,
  Email: <HiOutlineMail />
};

const Hero = ({ data }) => {
  // ✅ Destructure the tagline, contact, and the resumeUrl field
  const { name, tagline, contact, resumeUrl } = data;

  // ✅ Define the fallback path to your local resume
  const localResumePath = '/assets/Shashwat-Kwatra-Resume.pdf';

  return (
    <section className={styles.hero}>
      {/* Container for the 3D Scene */}
      <div className={styles.sceneContainer}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Scene />
        </Canvas>
      </div>

      {/* Container for the text content */}
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.bio}>{tagline}</p>
        <div className={styles.ctaContainer}>
          {/* ✅ This link now has the fallback logic */}
          <a
            // If resumeUrl from Firestore exists, use it. Otherwise, use the local path.
            href={resumeUrl || localResumePath}
            target="_blank"
            rel="noopener noreferrer"
            // The download attribute is helpful for the fallback link
            download={!resumeUrl}
            className={styles.resumeButton}
          >
            Download Resume
          </a>
          <div className={styles.socialLinks}>
            {contact.socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: 'var(--accent-color)' }}
                whileTap={{ scale: 0.9 }}
              >
                {iconMap[social.name]}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;