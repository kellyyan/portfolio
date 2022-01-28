import React from 'react'

import '../index.css'
import './caseStudy.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import oldWebsite1 from '../images/coders-sb/compressed/old-website-1.png'
import oldWebsite2 from '../images/coders-sb/compressed/old-website-2.png'
import oldWebsite3 from '../images/coders-sb/compressed/old-website-3.png'
import sun from '../images/coders-sb/sun.svg'
import branding from '../images/coders-sb/compressed/coders-sb-branding.svg'
import lowFi1 from '../images/coders-sb/compressed/lofi-1.svg'
import lowFi2 from '../images/coders-sb/compressed/lofi-2.svg'
import lowFi3 from '../images/coders-sb/compressed/lofi-3.svg'
import hiFi1 from '../images/coders-sb/compressed/hifi-1.svg'
import hiFi2 from '../images/coders-sb/compressed/hifi-2.svg'
import hiFi3 from '../images/coders-sb/compressed/hifi-3.svg'
import world from '../images/coders-sb/world.svg'
import sunTop from '../images/coders-sb/sun-sunglasses-on-top.svg'
import waves from '../images/coders-sb/waves.svg'
import sunAndWave from '../images/coders-sb/sun-and-wave.svg'

function CaseStudy1() {
    return (
        <div className='Parent'>
            <div className='App'>
                <Navbar />
                {/* <img></img> */}
                <div className='CaseStudy'>  
                <div className='hero-img'>
                    <div className='coders-sb-header-container'>
                        <div className='title-dec'>
                                <h2 className='h2'>Coders SB Website Resdesign</h2>
                                {/* <img className='waves' src={waves} alt=''></img> */}
                                <img className='sun-top' src={sunTop} alt=''></img>
                            </div>          
                            <div className='info-container'>
                                <div className='section-desc'>
                                    <h3 className='h3'>ROLES</h3>
                                    <p className='p'>UI/UX Design</p>
                                </div>
                                <div className='section-desc'>
                                    <h3 className='h3'>TOOLS</h3>
                                    <div>
                                        <p className='p'>Figma</p>
                                        <p className='p'>Adobe Illustrator</p>
                                    </div>
                                </div>  
                            </div>                       
                    </div>
                    <img className='sun-and-waves' src={sunAndWave} alt=''></img>
                </div>
                    <div className='section'>
                        <h3 className='h3'>PROBLEM STATEMENT</h3>
                        <p>
                            The Coders SB website was badly in need of a redesign. The current website was visually unappealing, had no brand consistency, lacked critical information about the organization, and was confusing to navigate.
                            As the sole UI/UX designer on the officer team, I spearheaded the site redesign.
                        </p>
                        <div className='image-with-caption'>
                            <div className='image-container'>
                                <img className='page-image' src={oldWebsite1} alt=''></img>
                                <img className='page-image' src={oldWebsite2} alt=''></img>
                                <img className='page-image' src={oldWebsite3} alt=''></img>
                            </div>
                            <p className='caption'>The old website– yikes!</p>
                        </div>
                    </div>        
                    <div className='section'>
                    <h3 className='h3'>OBJECTIVE</h3>
                        <p>Design a site with new branding and improved ease of navigation, visual impact, and accessibility. Retain some of the previous content while adding additional information to help viewers better understand the all the amazing opportunities that Coders SB provides.</p>
                    </div> 
                    <div className='section'>
                        <h3 className='h3'>RESEARCH</h3>
                        <p>I started by perusing websites of computer science organizations at other schools such as <a className='a' href='https://wics.engineering.ucdavis.edu/' target='_blank' rel="noopener noreferrer">Davis Women In Computer Science</a> and <a className='a' href='https://acmucsd.com/' target='_blank' rel="noopener noreferrer">Association for Computing Machinery at UCSD</a>.
                            <br />
                            I noticed that blue was a commonly used primary color and there was various tech inspired designs and imagery.
                            <br />
                            I also performed user research on members from our organization by surverying them about the pain points of the current website and observing their reactions in the user experience.
                            Here are some observations I gathered:
                            <ul>
                                <li><p>Current events were not up to date, making it difficult for users to view upcoming events</p></li>
                                <li><p>Users had difficulty understanding the process of joining the organization</p></li>
                                <li><p>The ratings for the visual impact of the website was low</p></li>
                            </ul>
                        </p>
                    </div>    
                    <div className='section'>
                        <img className='sun' src={sun} alt=''></img>
                        <h3 className='h3'>SOLUTION</h3>
                        <p>
                            I wanted the site branding to encompass familiar elements in tech design while being unique. I settled on a color palette inspired by sunsets over the ocean at UCSB which included shades of blue, yellow, orange, and pink.
                            The combination of familiar colors and visual motifs of various beach related elements, such as the sun and waves, provides a refreshing break from common computer science and tech imagery.
                            I also selected a clean and playful sans-serif font to evoke convey of friendliness to encourage viewers to join the organization.
                        </p>
                        <div className='image-with-caption center'>
                            <img className='image-scale' src={branding} alt=''></img>
                            <p className='caption'>The new Coders SB branding.</p>
                        </div>
                    </div>
                    <div className='section'>
                        <h3 className='h3'>LOW FIDELITY WIREFRAMES</h3>
                        <p>I created low fidelity wireframes for the site layout. Upon recieving feedback on content from other officers in the organization, I moved onto the high fidelity iterations.</p>
                        <div className='image-with-caption'>
                            <div className='image-container'>
                                <img className='page-image' src={lowFi1} alt=''></img>
                                <img className='page-image' src={lowFi2} alt=''></img>
                                <img className='page-image' src={lowFi3} alt=''></img>
                            </div>
                            <p className='caption'>A selection of low fidelity wireframes with placeholders for images and text. Note– the pages are cut off in the images for length.</p>
                        </div>
                    </div>
                    <div className='section'>
                        <h3 className='h3'>HIGH FIDELITY WIREFRAMES</h3>
                        <p>
                            While designing the high fidelity wireframes, I added illustrations created in Adobe Illustrator to enhance the site through visual graphic elements. I focusing on creating a dynamic, and interesting page layout while ensuring the site was intuitive to navigate and a fun overall visual experience.
                            After recieving feedback on my designs from my peers in <a className='a' href='https://sbcreativelab.com' target='_blank' rel="noopener noreferrer">SB Creative Lab</a>, I created a second interatation by improving the prominence of call-to-action elements and making the text hierarchy more clear.
                        </p>
                        <div className='image-with-caption'>
                            <div className='image-container'>
                                <img className='page-image' src={hiFi1} alt=''></img>
                                <img className='page-image' src={hiFi2} alt=''></img>
                                <img className='page-image' src={hiFi3} alt=''></img>
                            </div>
                            <p className='caption'>A selection of high fidelity wireframes. Note– some the pages are cut off in the images for length.</p>
                        </div>
                    </div>
                    <div className='section'>
                        <h3 className='h3'>DELIVERABLE</h3>
                        <p>
                            I am currently coding the site from scratch in React. It will soon be live on the Coders SB <a className='a' href='https://coderssb.com' target='_blank' rel="noopener noreferrer">site.</a>
                        </p>
                    </div>
                    <div className='section last-section'>
                        <h3 className='h3'>TAKEAWAYS</h3>
                        <div className='text-image-container'>
                            <p>
                                This was a major project in which I was able to design and develope a site from scratch. It was an incredibly rewarding experience to be able to build a project from the initial brainstorming mood boards to a deploying a web application.
                            </p>
                            <img className='world' src={world} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CaseStudy1