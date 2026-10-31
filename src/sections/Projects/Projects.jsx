import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../assets/common/ProjectCard';
import moniz from '../../assets/moniz.png';
import balletLBaher from '../../assets/ballet-l-baher.jpg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={moniz}
          link="https://github.com/Merhii/Moniz"
          h3="Moniz"
          p="Wealth and zakat tracker that prices gold and silver against the live market, all on-device"
          stack={['Flutter', 'Dart']}
        />
        <ProjectCard
          link="https://github.com/Merhii/Diffly"
          h3="Diffly"
          p="Terminal diff viewer for reviewing agentic changes, with block-move detection and per-line notes"
          stack={['TypeScript', 'Node', 'npm']}
        />
        <ProjectCard
          src={balletLBaher}
          link="https://merhii.github.io/ballet-l-baher/"
          repo="https://github.com/Merhii/ballet-l-baher"
          linkLabel="Play"
          h3="Ballet l Ba7er"
          p="A 3D game where you tile the Mediterranean. Lay balat off the Saida corniche; every night the waves take your edges back"
          stack={['Three.js', 'JavaScript', 'WebGL']}
        />
      </div>
    </section>
  );
}

export default Projects;
