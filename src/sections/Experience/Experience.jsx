import styles from './ExperienceStyles.module.css';
import ExperienceItem from '../../assets/common/ExperienceItem';

const roles = [
  {
    role: 'Software Engineer',
    company: 'Whish Money',
    location: 'Beirut, LB',
    dates: 'Jan 2026 — Present',
    points: [
      'Own the AML (anti-money laundering) service and act as the team reference point for AML questions during sprint planning.',
      'Take features end to end on Java Spring Boot APIs, investigating flagged transactions across services and logs and documenting root-cause findings for stakeholders.',
      'Reviewed 100+ pull requests from peers and ran 10 technical interviews for engineering candidates.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Monty Mobile',
    location: 'Beirut, LB',
    dates: 'Jul 2024 — Sep 2024',
    points: [
      'Refactored legacy APIs into modern Java Spring Boot code with JUnit coverage across test and staging servers.',
      'Implemented two-factor authentication with Spring Security, OTP and JWT, reducing penetration testing findings by 15%.',
      'Contributed to the VAS-RBT service using Log4j2 for server logging, supporting 98.5% uptime.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceList}>
        {roles.map((role) => (
          <ExperienceItem key={`${role.company}-${role.dates}`} {...role} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
