import './Home.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from "./Images"
import here from '../../assets/here.png'
import hereHov from '../../assets/hereHov.png'



export default function Home() {
  const [count, setCount] = useState(0)
  const [fade, setFade] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image.path
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.path)
          }, 2000)
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])

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
    if(progress > -1 && progress < 93 ){
      setCount(progress)
    }
  }

  return (
    <div className='home'>
      <h2 className={!loaded ? 'loaded' : 'loading'}>scrolling animation is loading...</h2>
      <div className="scroll">
        <img className={loaded ? 'loaded' : 'loading'} src={`./scroll/${count.toString()}.png`}/>
        

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
