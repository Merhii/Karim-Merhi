function ProjectCard({ src, link, h3, p, stack, comingSoon }) {
  const content = (
    <>
      {src ? (
        <img className="hover" src={src} alt={`${h3} logo`} />
      ) : (
        <div className="projectPlaceholder" aria-hidden="true">
          {h3.toLowerCase()}
        </div>
      )}
      <h3>{h3}</h3>
      <p>{p}</p>
      {stack && <p className="projectStack">{stack.join(' · ')}</p>}
      {comingSoon && <p className="projectStack">Coming soon</p>}
    </>
  );

  if (!link) {
    return <div className="projectCard">{content}</div>;
  }

  return (
    <a className="projectCard" href={link} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

export default ProjectCard;
