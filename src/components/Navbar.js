import { Link } from 'react-router-dom'
import { useState } from 'react'

import name from '../assets/name.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import about from '../assets/nav/about.png'
import aboutHov from '../assets/nav/aboutHov.png'
import contact from '../assets/nav/contact.png'
import contactHov from '../assets/nav/contactHov.png'
import port from '../assets/nav/port.png'
import portHov from '../assets/nav/portHov.png'
import './Navbar.css'



export default function Navbar() {

  const [navExpanded, setNavExpanded] = useState(false)

  return (
    <div className="navbar">
        <nav>
            <Link to = "/" className='name'>
                <img className = 'name' src={name} alt='logo' />
            </Link>

            <button href="#" onClick={() => {setNavExpanded(!navExpanded)}} className='toggle-button'>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </button>

            <div className="logos">
              <a href="https://github.com/charliedoubleu" target="_blank" rel="noreferrer">
                <img className = 'github' src={github} alt='github-logo' />
              </a>
              <a href="https://www.youtube.com/@charlieuu" target="_blank" rel="noreferrer">
                <img className = 'youtube' src={youtube} alt='youtube-logo' />
              </a>
            </div>
           
           <div className={ navExpanded ? "links-active" : "links"}>
              <Link to="/about" onClick={() => {setNavExpanded(false)}}className='page'>About</Link>
              <Link to="/portfolio" onClick={() => {setNavExpanded(false)}} className='page'>Portfolio</Link>
              <Link to="/contact" onClick={() => {setNavExpanded(false)}}className='page'>Contact</Link>
            </div>

            <div className='icons'>
              <Link to="/about">
                <img src={about} alt="about"             
                onMouseOver={e => (e.currentTarget.src = aboutHov)}
                onMouseLeave={e => (e.currentTarget.src = about)}/>
              </Link>
              <Link to="/portfolio">
                <img src={port} alt="portfolio" 
                onMouseOver={e => (e.currentTarget.src = portHov)}
                onMouseLeave={e => (e.currentTarget.src = port)}/>
              </Link>
              <Link to="/contact">
                <img src={contact} alt="contact" 
                onMouseOver={e => (e.currentTarget.src = contactHov)}
                onMouseLeave={e => (e.currentTarget.src = contact)}/>
              </Link>
            </div>
        </nav>
    </div>
  )
}
