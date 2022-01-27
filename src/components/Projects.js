import React from 'react'

import projectsData from '../data/projectsData'
import Project from './Project'
import './Projects.css'

function Projects() {

    const projectObjects = projectsData.map(project => {
        return (
            <Project
                key={project.id}
                {...project}
            />
        )
    })

    return (
        <div className='projects-container'>
            {projectObjects}
        </div>
    )
}

export default Projects