import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const Experience = ({ data }) => {
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="section" id="experience">
      <h2>Experience</h2>
      <div className={styles.timeline}>
        {data.map((job, index) => (
          <motion.div
            key={index}
            className={styles.timelineItem}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.role}>{job.role}</h3>
              <p className={styles.company}>{job.company}</p>
              <span className={styles.duration}>{job.duration}</span>
              <ul className={styles.description}>
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;