import React from 'react'
import './Hero.css'
import kermit from '../images/kermit.png'

function Hero() {

    return (
        <div className='hero-container'>
            <div className='header-image-container'>
                <div className='kermit-text-container'>
                    <h1 className='header NewYork'>
                        Hello and welcome!
                        <br/>
                        I’m Kelly, an aspiring designer and developer.
                    </h1>
                    <img className='kermit' src={kermit} alt=''></img>
                </div>
                <div>
                    <svg className='sparkle-img' width="156" height="109" viewBox="0 0 156 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M88.9375 27C89.2938 33.0073 88.2963 47.1846 81.4563 55.8352C74.6163 64.4857 66.9688 67.5495 64 68" stroke="black" stroke-width="2"/>
                        <path d="M145.975 1C146.118 3.1978 145.719 8.38462 142.983 11.5495C140.247 14.7143 137.188 15.8352 136 16" stroke="black" stroke-width="2"/>
                        <path d="M89.1422 108.608C88.7341 102.668 89.5757 88.6209 96.2071 79.9521C102.838 71.2832 110.317 68.1311 113.227 67.6387" stroke="black" stroke-width="2"/>
                        <path d="M145.943 30.1253C145.782 28.0053 146.114 22.9919 148.737 19.8981C151.36 16.8042 154.317 15.6793 155.468 15.5035" stroke="black" stroke-width="2"/>
                        <path d="M89.06 27C88.718 33.0073 89.6756 47.1846 96.242 55.8352C102.808 64.4857 110.15 67.5495 113 68" stroke="black" stroke-width="2"/>
                        <path d="M146.022 1C145.894 3.1978 146.253 8.38462 148.716 11.5495C151.178 14.7143 153.931 15.8352 155 16" stroke="black" stroke-width="2"/>
                        <path d="M88.8817 108.609C89.1731 102.658 88.0561 88.642 81.2566 80.1874C74.4571 71.7328 66.9191 68.8203 64 68.4209" stroke="black" stroke-width="2"/>
                        <path d="M145.84 30.1256C145.955 28.0017 145.514 22.9994 142.825 19.9821C140.136 16.9647 137.154 15.9253 136 15.7827" stroke="black" stroke-width="2"/>
                        <path d="M21 15V30" stroke="black" stroke-width="2"/>
                        <path d="M42 39L27 39" stroke="black" stroke-width="2"/>
                        <path d="M15 39L1.19209e-07 39" stroke="black" stroke-width="2"/>
                        <path d="M21 45V64" stroke="black" stroke-width="2"/>
                        <circle cx="21" cy="39" r="2" fill="black"/>
                    </svg>
                </div>
            </div>
            <div className='hero-p-container'>
                <p>
                    My favorite projects involve UI/UX design, graphic design, and web development.
                    <br />
                    Feel free to check out my work below.
                </p>
            </div>
        </div>
    )
}

export default Hero