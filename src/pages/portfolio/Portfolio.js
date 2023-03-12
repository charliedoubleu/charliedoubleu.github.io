import { useState } from 'react'
import Filter from '../../components/Filter'
import PortfolioList from '../../components/PortfolioList'
import './Portfolio.css'

export default function Portfolio() {

    //game = 1, web = 2, anim = 3
    const [projects, setProjects] = useState([
        {title: 'ghost legs', description: 'A walk cycle composition made in after effects', link: 'https://youtube.com/shorts/5NnCbMqmq_o?feature=share', thumbnail: './thumbnails/ghostLegs.png', tags: [3], id: 6},
        {title: 'waterfall', description: 'A short animation inspired by a waterfall in my backyard', link: 'https://youtube.com/shorts/sbZZ0oYoPsM?feature=share', thumbnail: './thumbnails/waterfall.png', tags: [3], id: 5},
        {title: 'sub particles', description: 'A data visualization of YouTube subscribers using YouTube API, P5.js, Node.js and Firebase', link: 'http://subparti.com/particles/charlie', thumbnail: './thumbnails/subparticles.png', tags: [2], id: 4},
        {title: 'uu', description: 'An animated music video created in Adobe Photoshop, Animate, and Premiere', link: 'https://youtu.be/ZMMSAJkdWTM', thumbnail: './thumbnails/uu.png', tags: [3], id: 3},
        {title: 'not now', description: 'A story based, audio reactive, 2D platformer video game created in Unity', link: 'https://charliedoubleu.itch.io/not-now', thumbnail: './thumbnails/notnow.png', tags: [1,3], id: 2},
        {title: 'fly on the wall', description: 'A public installation that uses an Arduino/Python to capture and send overheard words to a Realtime Database', link: 'https://flyonthewall-ict36.ondigitalocean.app/', thumbnail: './thumbnails/flyonwall.png', tags: [2], id: 1}

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