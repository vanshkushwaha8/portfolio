import React ,{useRef} from 'react';
import './contact.css';
import adobe from '../../assets/adobe.png';
import facebook from '../../assets/facebook.png';
import microsoft from '../../assets/microsoft.png';
import walmart from '../../assets/walmart.png';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import facebookicon from '../../assets/facebook-icon.png';
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
        <img src={adobe} alt='adobe' className='clientImg'></img>
        <img src={facebook} alt='facebook' className='clientImg'></img>
        <img src={microsoft} alt='microsoft' className='clientImg'></img>
        <img src={walmart} alt='walmart' className='clientImg'></img>
        </div>
    </div>
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDsec'>please fill the form and let me know the feedback.</span>
        
        
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='name' className='name' name='from_name' />
            <input type='email' placeholder='your email' className='email' name='from_email'/>
            <textarea name='message' className='msg' rows='5' placeholder='your message'>  </textarea>
            <button className='submitBtn' value='Send' type='submit'>Submit</button>
            <div className='links'>
                <img src={youtube} alt='youtube' className='link' />
                <img src={instagram} alt='instagram' className='link' />
                <img src={twitter} alt='twitter' className='link' />
                <img src={facebookicon} alt='facebook' className='link' />
            </div>
        </form>

       

    </div>
   </section>
  );
};

export default Contact;
