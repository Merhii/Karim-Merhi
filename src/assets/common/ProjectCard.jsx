function ProjectCard({ src, link, repo, linkLabel, h3, p, stack, comingSoon }) {
  const body = (
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
    </>
  );

  return (
    <div className="projectCard">
      {link ? (
        <a className="projectMain" href={link} target="_blank" rel="noreferrer">
          {body}
        </a>
      ) : (
        <div className="projectMain">{body}</div>
      )}
      {stack && <p className="projectStack">{stack.join(' · ')}</p>}
      {comingSoon && <p className="projectStack">Coming soon</p>}
      {repo && (
        <p className="projectLinks">
          <a href={link} target="_blank" rel="noreferrer">
            {linkLabel || 'Live'}
          </a>
          <a href={repo} target="_blank" rel="noreferrer">
            Source
          </a>
        </p>
      )}
    </div>
  );
}

export default ProjectCard;
