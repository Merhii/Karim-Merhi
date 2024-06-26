import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../assets/common/ProjectCard';
import shoezly from '../../assets/Shoezly.webp';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={shoezly}
          link="https://github.com/Merhii/Shoezly"
          h3="Shoezly"
          p="Shoe Ecommerce Store"
        />
       
      </div>
    </section>
  );
}

export default Projects;