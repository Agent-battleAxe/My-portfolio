import React,{useState} from 'react'


import {AppWrap, MotionWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import { images } from '../../constants';
import { Spinner } from '../../components';

import './Footer.scss';


const Footer = () => {
  const [formData, setFormData] = useState({name: '', email : '', message : '' });
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name,email,message} = formData;

  const handleChangeInput = (e)=>{
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = ()=>{
    setLoading(true);
    const contact = {
      _type : 'contact',
      name : name,
      email : email,
      message : message,
    }

    client.create(contact)
    .then(()=>{
      setLoading(false);
      setIsFormSubmited(true);
    })

  }

  return (
    <>
      <h2 className='head-text'>Take a breath & <span>Contact</span> me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:danitchakountescott@gmail.com" className='p-text'>danitchakountescott@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +237 650477294" className='p-text'>+237 650477294</a>
        </div>
      </div>

      {!isFormSubmited ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input type="text" className='p-text' placeholder='Your Name Please!' name='name' value={name} onChange ={handleChangeInput}/>
          </div>
          <div className='app__flex'>
            <input type="email" className='p-text' placeholder='Your Email Please!' name='email' value={email} onChange ={handleChangeInput}/>
          </div>
          <div>
            <textarea 
            className='p-text' 
            placeholder='Enter Your Message here Please!' 
            name="message" 
            value={message} 
            onChange ={handleChangeInput}/>
          </div>
          {!loading ? <button type='button' className='button_1 p-text' onClick={handleSubmit} >
            Send Message
          </button> : 
            <h4 className='p-text'>
              <Spinner message="sending message..." />
            </h4>
          }

          {/* <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? <Spinner message="Sending message..."/> : "Send Now" }
          
          </button> */}
        </div> 
        : <div className='p-text'>
          <h3>Thank You for getting in touch. We would reply to you soon!</h3>
        </div> 
        }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'


)