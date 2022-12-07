import React from 'react';

import {AppWrap} from '../../wrapper';
import {motion} from 'framer-motion';
import {images} from '../../constants'

import './Header.scss';

const scaleVariance ={
  whileInView :{ 
    scale :[0,1],
    opacity:[0,1],
    transition:{
      duration : 1,
      ease : 'easeInOut'
    }
  }
}


const Header = () => {
  return (
    <div  className='app__header app__flex'>
      <motion.div
        whileInView={{x : [-100, 0], opacity : [0,1]}}
        transition = {{duration : 2}}
        className = "app_header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft:20}}>
                <p className='p-text'>Hello, I am</p>
                <h1 className='head-text'>Junior</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web and Mobile Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
       whileInView={{opacity : [0,1]}}
       transition = {{duration : 1,delayChildren:0.5}}
       className = "app_header-img">

       <img src={images.profile} alt="" />

        <motion.img
          whileInView={{scale : [0,1]}}
          transition = {{duration : 1,ease:'easeInOut'}}
        
          src =  {images.square}
          alt = "cicles"
          className = "overlay_circle"
        /> 

        
      </motion.div>


      <motion.div
        variance = {scaleVariance}
        whileInView={scaleVariance.whileInView}
       
       className = "app__header-circles">
        {[
          images.flutter,images.react, images.django
        ].map((circle, i)=>(
          <div className='circle-cmp app__flex' key={`circle-${i}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
        
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')