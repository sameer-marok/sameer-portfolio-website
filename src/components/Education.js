import React from 'react';
import { motion } from 'framer-motion';
import styles from './Education.module.css';

const Education = ({ data }) => {
  return (
    <section className="section" id="education">
      <h2>Education</h2>
      <div className={styles.timeline}>
        {data.map((edu, index) => (
          <motion.div
            key={index}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.institution}>{edu.institution}</p>
              <span className={styles.duration}>{edu.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;