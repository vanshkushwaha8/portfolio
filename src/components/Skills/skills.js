import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = () => {
  return (
    <section id='skills'>
       
        <span className='skillTitle'>What I Do  </span>
        <span className='skillDesc'>I bridge the gap between technology and humans by crafting beautiful,intuitive interfaces that users love to<br/> interact with.That's the power I wield. From the grand architecture of websites to the intimate touch of app <br/>interfaces, I craft digital worlds that are both beautiful and functional.  </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX DESIGN</h2>
                    <p>Creates the visual language of a product, including color palettes, typography, icons, and layouts.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WEBSITE DESIGN</h2>
                    <p>I craft visual experiences that capture attention, engage visitors, and convey your brand's message</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>APP DEVELOPMENT</h2>
                    <p>Bringing sleek and intuitive interfaces to life, mastering the art of user interaction and visual appeal</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills
