import { useState } from 'react'
import Filter from '../../components/Filter'
import PortfolioList from '../../components/PortfolioList'
import './Portfolio.css'

export default function Portfolio() {

    //game = 1, web = 2, anim = 3
    const [projects, setProjects] = useState([
        {title: 'sub particles', description: 'A data visualization of YouTube subscribers using YouTube API, P5.js, Node.js and Firebase', link: 'https://subparti.com', thumbnail: './charlieuu/thumbnails/subparticles.png', tags: [2], id: 5},
        {title: 'uu', description: 'An animated music video created in Adobe Photoshop, Animate, and Premiere', link: 'https://youtu.be/ZMMSAJkdWTM', thumbnail: './charlieuu/thumbnails/uu.png', tags: [3], id: 4},
        {title: 'not now', description: 'A story based, audio reactive, 2D platformer video game created in Unity', link: 'https://charliedoubleu.itch.io/not-now', thumbnail: './thumbnails/notnow.png', tags: [1,3], id: 3},
        {title: 'fly on the wall', description: 'A public installation that uses an Arduino/Python to capture and send overheard words to a Realtime Database', link: 'https://flyonthewall-ict36.ondigitalocean.app/', thumbnail: './thumbnails/flyonwall.png', tags: [2], id: 2},
        {title: 'personal website', description: 'My personal website created using React.js and full of orginal assets/animations', link: '/', thumbnail: './thumbnails/portfolio.png', tags: [2], id: 1},

    ])
    const [filtered, setFiltered] = useState([])
    const [activeTag, setActiveTag] = useState(0)

    

    return (
        <div className='portfolio'>
            
            <Filter projects={projects} setFiltered={setFiltered} activeTag={activeTag} setActiveTag={setActiveTag}/>
            <PortfolioList filtered={filtered} />
        </div>
    )
}