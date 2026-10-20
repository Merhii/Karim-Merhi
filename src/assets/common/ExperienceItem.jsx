function ExperienceItem({ role, company, location, dates, points }) {
  return (
    <article className="experienceItem">
      <h3>{role}</h3>
      <h4>
        {company} &middot; {location}
      </h4>
      <p className="dates">{dates}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>
            <p>{point}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceItem;
