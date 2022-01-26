import line from '../images/horizontal-line.svg'
import './Footer.css'
import footerImage from '../images/frog-with-heart.svg'

function Footer() {
    return (
        <div>
            <img className='horizontal-line' src={line}></img>
            <div className='footer'>
                <div className='footer-text-image-container'>
                    <div className='footer-text'>
                        <h1 className='header-no-margin'>Say howdy</h1>
                        <p className='p-right-align'>&amp; have a wonderful day!</p>
                        <div className='footer-links-container'>
                        <a className='footer-link' href='mailto:yan.kelly11@gmail.com'><h3>EMAIL</h3></a>
                        <h3>|</h3>
                        {/* <a className='footer-link' href='https://www.linkedin.com/in/kellyyann/' target='_blank'><h3>LINKEDIN</h3></a> */}
                        <a className='footer-link' href='https://www.github.com/kellyyan/' target='_blank'><h3>GITHUB</h3></a>
                    </div>   
                </div>
                <img className='footer-image' src={footerImage}></img>
                </div>
                <h4 className='footer-copyright'>COPYRIGHT KELLY YAN 2022</h4>
            </div>
        </div>
    )
}

export default Footer