import '../index.css'
import './caseStudy.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import oldWebsite1 from '../images/fid/old-website.svg'
import branding from '../images/fid/fid-branding.svg'
import lofi from '../images/fid/fid-lofi.svg'
import hifi from '../images/fid/fid-hifi.svg'
import fid from '../images/fid/fid-dec-1.svg'
import pocket from '../images/fid/fid-dec-2.svg'

function CaseStudy1() {
    return (
        <div className='Parent'>
            <div className='App'>
                <Navbar />
                <img></img>
                <div className='CaseStudy'>            
                    <h1 className='h1'>F*ck It Denim Website Design</h1>
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
                                <img className='page-image' src={oldWebsite1} alt=''></img>
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
                        <p>My boss gave me examples of websites she liked and whose general style she wanted to imitate such as <a className='a' href='https://yourparade.com' target='_blank'>Parade</a> and <a className='a' href='https://starface.world/' target='_blank'>Starface</a>.
                        <br />
                        The target audience was women in their early 20s who are looking to purchase closet staples. Through my research, I found that the demographic gravitated toward fun and casual branding, with a preference towards warm colors.
                        <br />
                        </p>
                    </div>    
                    <div className='section'>
                        <h3 className='h3'>SOLUTION</h3>
                        <p>
                            Under the instructions of my boss who wanted an unconventional primary color within the branding, I chose a neon green as the primary color coupled with easy to read sans-serif fonts.
                        </p>
                        <div className='image-with-caption center'>
                            <img className='image-scale' src={branding} alt=''></img>
                            <p className='caption'>The FID branding.</p>
                        </div>
                    </div>
                    <div className='section'>
                        <h3 className='h3'>LOW FIDELITY WIREFRAMES</h3>
                        <p>I then created the low fidelity wireframes for the site layout with all the necessary content needed. I recieved approval from my boss and then moved onto the high fidelity iterations.</p>
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
                            I created high fidelity wireframes, with illustrations created in Adobe Illustrator. I went through various iterations and presented to my boss
                            designs with different color options, so she could help choose the best one. I implemented feedback from her until we produced a satisfying final result.
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
                            My final deliverable was the wireframe design which I presented to the developer.
                        </p>
                    </div>
                    <div className='section last-section'>
                        <h3 className='h3'>TAKEAWAYS</h3>
                        <div className='text-image-container'>
                            <p>
                                The internship gave me an opportunity to design for a buisness in a professional capacity. I gained skills such as not taking feedback personally and working with others to iterate until a satisfactory design is produced.
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