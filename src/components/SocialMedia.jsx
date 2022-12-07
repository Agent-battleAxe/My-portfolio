import React from 'react'

import {BsTwitter, BsInstagram}  from 'react-icons/bs'
import ReactTooltip from 'react-tooltip'

import {FaFacebookF, FaArrowAltCircleDown}  from 'react-icons/fa'


const SocialMedia = () => {
  
  return (
    <div className='app__social'>
        <div>
          <FaArrowAltCircleDown  />
          
        </div>
        <div>
            <FaFacebookF />
        </div>
    </div>
  )
}

export default SocialMedia