import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons
import { HiOutlineMail } from 'react-icons/hi';       // Import icons

// Helper map, same as in the Hero component
const iconMap = {
  LinkedIn: <FaLinkedin />,
  GitHub: <FaGithub />,
  Email: <HiOutlineMail />
};

const Contact = ({ data }) => {
  return (
    <section className={styles.contactSection} id="contact">
      <motion.div
        className={styles.contactContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <h2>Get In Touch</h2>
        <a href={`mailto:${data.email}`} className={styles.email}>{data.email}</a>
        <div className={styles.socialLinks}>
          {/* ✅ Mapping over socials data from Firestore */}
          {data.socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: 'var(--accent-color)' }}
              whileTap={{ scale: 0.9 }}
            >
              {/* ✅ Rendering icon dynamically based on name */}
              {iconMap[social.name]}
            </motion.a>
          ))}
        </div>
        <footer className={styles.footer}>
          <p>Sameer Marok © 2025</p>
        </footer>
      </motion.div>
    </section>
  );
};

export default Contact;