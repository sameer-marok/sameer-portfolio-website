import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = ({ data }) => {
  return (
    <section className="section" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>
        <p className={styles.bioText}>{data}</p>
      </motion.div>
    </section>
  );
};

export default About;