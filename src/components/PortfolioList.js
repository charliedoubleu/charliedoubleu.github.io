// import { Link } from 'react-router-dom'
import border from '../assets/border1.png'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// styles
import './PortfolioList.css'

function Card({ page }) {
    const [flipped, setFlip] = useState(false)

    return (
        <motion.div layout='position' animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{layout:{duration: 0.5}, duration:0.5}} className='card' onClick={() => setFlip(!flipped)} key={page.id}>
        {/* <Link to={`/projects/${page.id}`}> */}
        
            
            {/* <img className = {!flipped ? 'thumbnail' : 'flipped'} src={process.env.PUBLIC_URL + page.thumbnail} alt='project' /> */}
            <img className = {!flipped ? 'thumbnail' : 'flipped'} src={process.env.PUBLIC_URL + './thumbnails/subparticles.png'} alt='project' />
            <img className = {!flipped ? 'thumbnail' : 'flipped'} src='./thumbnails/subparticles.png' alt='project' />

            <img className = {flipped ? 'border' : 'flipped'} src={border} alt='border' />
            <div className= {flipped ? "back" : 'flipped'}>
                <h1>{page.title}</h1>
                <p>{page.description}</p>
                <a href={page.link} target="_blank"> 
                    project link
                </a>
            </div>

            
            
        {/* </Link> */}
        </motion.div>
    )
}
export default function PortfolioList({ filtered }) {


    if(filtered.length === 0){
        return <div className='error'>No pages to load...</div>
    }

    return (
        
        <motion.div className="projects-list">
            <AnimatePresence>
            {filtered.map(page => (
                <Card key = {page.id} page = {page}/>

                
            ))}
            </AnimatePresence>
        </motion.div>
    )
}