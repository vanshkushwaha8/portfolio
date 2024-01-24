import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';



const Intro = () => {
  return (
     <section id='intro'>
        <div className='introContent'>

<div class="card">
  <div class="content"><span >Hello</span>
    <p class="heading">VANSH KUSHWAHA <br/> Website Designer
    </p><p class="para">My interest in an internship position in web design With understanding skills <br/> in web development, as well as proficiency in Excel, Word, and video<br/> editing, dobe photoshop, I believe I can make a valuable contribution in <br/>software development and gain practical industry experience.
    </p>
    <button class="btn">Read more</button>
  </div>
</div>

       <div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
</div>

      <Link><button className='btn'><img src={btnImg} alt='hire me' className='btnImg'/>Hire Me</button></Link>

        </div>
        <img src={bg} alt='profile' className='bg'/>
       
     </section>
     
   
  )
}

export default Intro
