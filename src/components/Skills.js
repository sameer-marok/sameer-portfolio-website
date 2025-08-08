import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="section" id="skills">
      <h2>Technical Skills</h2>
      <div className={styles.skillsContainer}>
        {Object.keys(data).map((category) => (
          <div key={category} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <motion.div
              className={styles.skillsGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {data[category].map((skill, index) => (
                <motion.div key={index} className={styles.skillItem} variants={itemVariants}>
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;