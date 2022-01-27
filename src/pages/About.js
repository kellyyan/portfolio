import React from 'react'

import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import '../index.css'
import './about.css'
import Resume from '../documents/Kelly_Yan_Design_Resume.pdf'
import me from '../images/me.jpg'
import frogWaving from '../images/frog-waving.svg'
import memesData from "../data/memesData"

function About(){

    const memes = memesData.map(meme => {
        return (
            <img className='meme' src={`./images/memes/${meme.url}`} alt=''></img>
        )
    })

    return (
        <div>
            <div className='App'>
                <Navbar />
                <div className='about-me-container'>
                    <div className='about-me-text'>
                        <h1>About</h1>
                        <p className='about-me-text'>I’m Kelly, an aspiring designer and developer studying at UC Santa Barbara. 
                            I enjoy using design to critically engage and communicate with the world. I'm passionate about designing and building visually beautiful, accessible, and easy to navigate websites.
                            In my free time I like drawing bad comics about fish, sipping burning hot tea, and laughing at TikToks.
                            </p>
                        <p className='about-me-text'>Feel free to email me about anything (especially memes you like) at yan.kelly11@gmail.com.</p>
                        {/* <br/> */}
                        <p className='about-me-text'>Here is my design <a className='resume-link' href={Resume} target='_blank' rel="noopener noreferrer">resume.</a></p>
                    </div>
                    <div>
                        <img className='me' src={me} alt='Kelly.'></img>
                        <img className='frog-waving' src={frogWaving} alt=''></img>
                    </div>
                </div>
                <p>Here are some of my favorite memes.</p>
                <div class='grid-wrapper'>
                    {memes}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About