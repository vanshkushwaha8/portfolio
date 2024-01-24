import React ,{useRef} from 'react';
import './contact.css';
import uiverse from '../../assets/img.jpeg';
import hostinger from '../../assets/img1.jpeg';


import emailjs from '@emailjs/browser';

 
 const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2ix0x2s', 'template_0vxmnmj', form.current, 'Za2nD_gUMfjcsSq_U')
            .then((result) => {
              console.log(result.text);
              console.log("message sent");
              e.target.reset();
              alert('Email Sent !');
            }, (error) => {
              console.log(error.text);
            });
      };
  return (
   <section id='contactPage'>
    <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>There are all sorts of clients out there, from the highly engaged and collaborative to the<br/> demanding and hands-off. Knowing how to work effectively with different personalities is <br/>crucial for any service professional.</p>
        <div className='clientImgs'>
        <img src={uiverse} alt='adobe' className='clientImg'></img>
        <img src={hostinger} alt='facebook' className='clientImg'></img>
       
        </div>
    </div>
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDsec'>please fill the form and let me know the feedback.</span>
        
        
        <form className='contactForm' ref={form} onSubmit={sendEmail}>

        <div class="container">
  <input  type="text" name="from_name" className="input" placeholder='userName'/>
  
</div>

<div class="container">
  <input  type="text" name="from_email" className="input" placeholder='Email'/>
  
</div>

<div class="container">
  <textarea  type="text" name="message" className="input" placeholder='message'></textarea>
 
</div>
<button className='button' value='Send' type='submit'>
  Submit
</button>

            <div className='links'>
            
            
            
<div class="tooltip-container">
  <div class="tooltip">
    <div class="profile">
      <div class="user">
        <div class="img">Ui</div>
        <div class="details">
          <div class="name">Vansh kushwaha</div>
          <div class="username">vansh_kushwaha__</div>
        </div>
      </div>
      <div class="about">2000+ Followers</div>
    </div>
  </div>
  <div class="text">
    <a class="icon" href="https://www.instagram.com/vansh_kushwaha__/">
      <div class="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="instagramSVG">
          <svg
            fill="white"
            class="svgIcon"
            viewBox="0 0 448 512"
            height="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
        </span>
      </div>
      <div class="text">Instagram</div>
    </a>
  </div>
</div>

<div class="tooltip-container">
  <div class="tooltip">
    <div class="profile">
      <div class="user">
        <div class="img">Ui</div>
        <div class="details">
          <div class="name">Vansh Kushwaha</div>
          <div class="username">@vanshkushwaha</div>
        </div>
      </div>
      <div class="about">100+ Connections</div>
    </div>
  </div>
  <div class="text">
    <a class="icon" href="https://www.linkedin.com/in/vansh-kushwaha-71640a25b/">
      <div class="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="fab fa-linkedin">
          <svg viewBox="0 0 448 512" height="1em">
            <path
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            ></path>
          </svg>
        </span>
      </div>
      <div class="text">LinkedIn</div>
    </a>
  </div>
</div>



            </div>
        </form>

       

    </div>
   </section>
  );
};

export default Contact;
