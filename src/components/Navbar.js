import frog from '../images/frog.svg'

import '../index.css'
import './Navbar.css'

import {Link} from "react-router-dom"

function Navbar() {
    return (  
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'><img className='logo' src={frog} alt='frog'/></Link>
            </div>
            <div className='navbar-links'>
                <a href='/#work'>Work</a>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar