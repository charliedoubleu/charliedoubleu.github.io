import './Home.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import here from '../../assets/here.png'
import hereHov from '../../assets/hereHov.png'

export default function Home() {
  const [count, setCount] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress)

    return () => window.removeEventListener("scroll", scrollProgress)
  }, [])

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = Math.ceil(scrollpx/winHeight * 100 / 0.69)

    if(progress > 90){
      setFade(true)
    }
    if(progress < 93 ){
      setCount(progress)
    }
  }

  return (
    <div className='home'>
      <div className="scroll">
        <img src={require(`./scroll/${count.toString()}.png`)}/>

      {/* </div> */}
      {/* <div className="here"> */}
        <Link to="/portfolio">
          { fade && <img className='herebtn' src={here} 
            onMouseOver={e => (e.currentTarget.src = hereHov)}
            onMouseLeave={e => (e.currentTarget.src = here)}
            alt="portfolio" /> }
        </Link>
      </div>
        
    </div>
  )
}
