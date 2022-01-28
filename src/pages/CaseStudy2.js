import React from 'react'

import '../index.css'
import './caseStudy.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import oldWebsite1 from '../images/fid/compressed/old-website.svg'
import userPersona from '../images/fid/compressed/fid-user-persona.svg'
import branding from '../images/fid/compressed/fid-branding.svg'
import lofi from '../images/fid/compressed/fid-lofi.svg'
import hifi from '../images/fid/compressed/fid-hifi.svg'
import fid from '../images/fid/compressed/fid-dec-1.svg'
import pocket from '../images/fid/compressed/fid-dec-2.svg'

function CaseStudy1() {
    return (
        <div className='Parent'>
            <div className='App'>
                <Navbar />
                {/* <img></img> */}
                <div className='CaseStudy'>            
                    <h1 className='h1'>F*ck It Denim Website Design</h1>
                    <img className='pocket' src={pocket} alt=''></img>
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
                    <div className='section'>
                        <h3 className='h3'>PROBLEM STATEMENT</h3>
                        <p>
                            F*ck it Denim (FID), a startup that makes jeans that fit all body types, needed a coming soon page and visual identity for their site. The founder, Michelle, wanted it to stand out amongst other clothing brands and be bold and catchy to fit with the brand name. The developer had created a design for the coming soon page but it was visually unappealing and did not draw customers in.
                        </p>
                        <div className='image-with-caption'>
                            <div className='image-container'>
                                <img className='single-fid-old-page' src={oldWebsite1} alt=''></img>
                            </div>
                            <p className='caption'>The old coming soon page– double yikes!</p>
                        </div>
                    </div>        
                    <div className='section'>
                    <h3 className='h3'>OBJECTIVE</h3>
                        <p>Design a coming soon page with and a strong visual impact to get potential customers to join the mailing list to stay updated about the brand.</p>
                    </div> 
                    <div className='section'>
                        <h3 className='h3'>RESEARCH</h3>
                        <p>My boss gave me examples of websites whose style and content she liked such as <a className='a' href='https://yourparade.com' target='_blank' rel="noopener noreferrer">Parade</a> and <a className='a' href='https://starface.world/' target='_blank' rel="noopener noreferrer">Starface</a>.
                        <br />
                        The target audience was women in their mid 20s to early 30s who are looking to purchase closet staples. I did research on components that successful brands geared towards these women exhibited and found that the demographic gravitated toward fun and casual branding. I also created a detailed user persona for our target audience to help me better understand who I was designing for
                        <br />
                        </p>
                        <div className='image-with-caption'>
                            <div className='image-container'>
                                <img className='single-fid-old-page' src={userPersona} alt=''></img>
                            </div>
                            <p className='caption'>The user persona I curated.</p>
                        </div>
                    </div>    
                    <div className='section'>
                        <h3 className='h3'>SOLUTION</h3>
                        <p>
                            Under the instructions of my boss who wanted an unconventional primary color within the branding, I chose a neon green as the primary color coupled with easy to read sans-serif fonts. The brand voice would be bold, cool, and casual.
                        </p>
                        <div className='image-with-caption center'>
                            <img className='image-scale' src={branding} alt=''></img>
                            <p className='caption'>The FID branding.</p>
                        </div>
                    </div>
                    <div className='section'>
                        <h3 className='h3'>LOW FIDELITY WIREFRAMES</h3>
                        <p>I created the low fidelity wireframes for the site layout with all the necessary content needed. I recieved approval from my boss and then moved onto the high fidelity iterations.</p>
                        <div className='image-with-caption'>
                            <div className='single'>
                                <img className='single-page-image' src={lofi} alt=''></img>
                                <p className='caption'>The low fidelity wireframe with placeholders for images and text.</p>
                            </div>
                        </div>
                    </div>
                    <div className='section'>
                        <h3 className='h3'>HIGH FIDELITY WIREFRAMES</h3>
                        <p>
                            I turned the low fidelity wireframes into high fidelity ones, adding illustrations I created in Adobe Illustrator. I went through sevral iterations and presented 
                            different versions to my boss, to get her feedback and perference for a certain design choice over another. I implemented feedback from her until we produced a satisfying final result.
                        </p>
                        <div className='image-with-caption'>
                            <div className='single'>
                                <img className='single-page-image' src={hifi} alt=''></img>
                                <p className='caption'>The final high fidelity wireframe.</p>
                            </div>
                        </div>
                    </div>
                    <div className='section'>
                        <h3 className='h3'>DELIVERABLE</h3>
                        <p>
                            My final deliverable was the wireframe design which I handed off to the developer on the team.
                        </p>
                    </div>
                    <div className='section last-section'>
                        <h3 className='h3'>TAKEAWAYS</h3>
                        <div className='text-image-container'>
                            <p>
                                The internship gave me an opportunity to design for a buisness in a professional capacity. I developed important skills such as learning to incorporate critique and iterating until a satisfactory design is produced. It was a greatly rewarding and fun experience to be able to work with the founder and make her vision come to life.
                            </p>
                            <img className='fid' src={fid} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CaseStudy1