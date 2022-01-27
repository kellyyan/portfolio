import React from 'react'

import GraphicDesignPortfolio from '../documents/Kelly_Yan_Graphic_Design_Portfolio.pdf'
import frogWithSunglasses from '../images/frog-sunglasses.svg'
import frogWithGlasses from '../images/frog-glasses.svg'
import './AdditionalFields.css'

function GraphicDesign() {
    return (
        <div className='parent'>
            <div className='left-child'>
                <img src={frogWithSunglasses}  alt=''></img>
                <h3 className='field-header'>Graphic Design</h3>
                <p>Check out my graphic design portfolio <a className='document-link' href={GraphicDesignPortfolio} target='_blank' rel="noopener noreferrer">here.</a></p>
            </div>
            <div className='right-child'>
            <img src={frogWithGlasses}  alt=''></img>
                <h3 className='field-header'>Web Development</h3>
                <p>Check out my web development projects <a className='document-link' href='https://github.com/kellyyan' target='_blank' rel="noopener noreferrer">here.</a></p>
            </div>
        </div>


    )
}

export default GraphicDesign