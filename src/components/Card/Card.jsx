import React from "react";
import githubLogo from "../../assets/github-mark.svg";
import globe from "../../assets/globe.svg";
import projectData from '../../data/data.json';
import './Card.scss'

function Card({darkMode}) {
    const projects = projectData.projects;

    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <article className="projects-card" key={index}>
                    <p className="projects-card__title">{project.title}</p>
                    <img
                        src={project.previewImage.src}
                        alt={project.previewImage.alt}
                        className="projects-card__preview"
                    />
                    <div className="icon-container">
                        {project.links.map((link, linkIndex) => (
                            <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="icon"
                                    src={darkMode ? link.iconWhite.src : link.icon.src}
                                    alt={link.icon.alt}
                                />
                            </a>
                        ))}
                    </div>
                    <div className="projects-card__overlay">
                        <p>{project.description}</p>
                        <p>{project.stack}</p>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Card;
