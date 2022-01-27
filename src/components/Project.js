import React from 'react'

import './Project.css'
import rightArrow from '../images/right-arrow.svg'

import {Link} from 'react-router-dom'

function Project(props) {
    let field = props.field.toUpperCase()
    let type = props.type.toUpperCase()

    return (
        <div className='project-container'>
            <div className='project-text-container'>
                <div className='project-info-container'>
                    <h3>{field}</h3>
                    <h3>|</h3>
                    <h3 className='h3-light'>{type}</h3>
                </div>
                <h2>{props.title}</h2>
                <p className='project-desription'>{props.description}</p>
                <Link to={props.url}>
                <div className='link-with-icon arrow-icon'>
                    <p className='case-study-p'>View case study</p><img className='arrow-icon' src={rightArrow} alt=''></img>
                </div>
                </Link>
            </div>
            <Link to={props.url}>
                <img className='project-image' src={`./images/${props.image}`} alt=''/>
            </Link>
        </div>
    )
}

export default Project