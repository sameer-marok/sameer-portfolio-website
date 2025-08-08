import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = ({ data }) => {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className={styles.grid}>
        {data.map((project, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)' }}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <h3 className={styles.title}>{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  <FaGithub />
                </a>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.techStack}>
                {project.techStack.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;