import './About.css'
import { Link } from 'react-router-dom'
import cloud from '../../assets/cloud.png'
import cloudHov from '../../assets/cloudHov.png'
import tree from '../../assets/tree.png'
import treeHov from '../../assets/treeHov.png'

export default function About() {
  return (
    <div className='about'>
      <img className='tree' src={tree} 
        onMouseOver={e => (e.currentTarget.src = treeHov)}
        onMouseLeave={e => (e.currentTarget.src = tree)}
        alt="tree drawing" /> 
      <p className='bio'>Hello! My name is Charlie and I am a coder, musician, and animator from Santa Cruz, CA. I am a recent graduate from University of California San Diego with a degree in Computing and the Arts looking for opportunities in web development, game development, or animation. I am particularly passionate about the various applications and synthesis of code, music, and animation as a vehicle for artistic expression. I have experience using the MERN stack and I taught game design/animation fundamentals using Javascript for 4 years. I produce music in Ableton and Logic and I regularly use Photoshop, Premier, Animate, and Unity for game development/animations. In my free time, you can find me surfing, skating, or playing piano. Thank you for taking a look at my website and feel free to reach out using the <Link to={"/contact"} className='contact-link'>contact</Link> page!</p>
      <img className='cloud' src={cloud} 
        onMouseOver={e => (e.currentTarget.src = cloudHov)}
        onMouseLeave={e => (e.currentTarget.src = cloud)}
        alt="cloud drawing" /> 

    </div>
  )
}