import React from 'react';
import './Projects.css'

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    projectUrl
}) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <a href={projectUrl} className="project-external-link">
                    <img src={imageUrl} alt="project" className="project-img" />
                </a>
            </div>

            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-details">{projectDescription}</p>
                <a href={projectUrl} className="check-it-out">Check it out!</a>
            </div>
        </div>
    );
}

export default ProjectCard