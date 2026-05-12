import React, { useMemo, useState } from 'react';
import { siteData } from '../../lib/data';

const projects = siteData?.projects?.items ?? [];
const filters = siteData?.projects?.filters ?? ['All'];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(
      (item) => Array.isArray(item.category) && item.category.includes(filter)
    );
  }, [filter]);

  return (
    <section className="section projects-section container" id="projects">
      <p className="eyebrow">{siteData?.projects?.sectionLabel ?? 'Projects'}</p>
      <h2>{siteData?.projects?.headline ?? 'Recent Work'}</h2>
      <p className="section-text">{siteData?.projects?.subheadline ?? ''}</p>
      <div className="filters" role="tablist" aria-label="Project filters">
        {filters.map((value) => (
          <button
            key={value}
            className={`filter-chip ${filter === value ? 'active' : ''}`}
            type="button"
            onClick={() => setFilter(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="cards-grid">
        {filteredProjects.map((project) => (
          <article className="info-card project-card" key={`${project.title}-${project.year}`}>
            {project.image
              ? <img className="project-thumb" src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.title} />
              : <div className="project-top" aria-hidden="true" />}
            <div className="project-content">
              <p className="tag">{project.tag ?? 'Project'}</p>
              <h3>{project.title}</h3>
              <p>{project.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
