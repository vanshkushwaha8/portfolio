import React from 'react'
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
   <sections id='works'>

    <h1 className='workstitle'>My Portfolio</h1>
    <span className='workDesc'>With a brain wired for logic and a heart that beats for aesthetics, I'm a web designer on a mission <br/>to bridge the digital divide. As a B.Tech CSE student at Centurion University, I've learned<br/> to speak the language of both machines and humans. I translate your vision into captivating websites<br/> that are not only technically sound but also resonate with your audience on an emotional level. <br/>Let's craft a digital masterpiece that tells your story in a way that words never could."</span>
     <div className='worksImgs'>


      
        <img src={portfolio1} alt='portfolio1' className='worksImg'/>
        <img src={portfolio2} alt='portfolio2' className='worksImg'/>
        <img src={portfolio3} alt='portfolio3' className='worksImg'/>
        <img src={portfolio4} alt='portfolio4' className='worksImg'/>
        <img src={portfolio5} alt='portfolio5' className='worksImg'/>
        <img src={portfolio6} alt='portfolio6' className='worksImg'/>
     </div>
     <button className='workBtn'>See MOre</button>
   </sections>
  )
}

export default Works;
