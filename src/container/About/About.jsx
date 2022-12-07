import React,{useState,  useEffect} from 'react'

import './About.scss';
import {images} from '../../constants';
import {motion} from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import {urlFor, client} from '../../client';

// const abouts =[
//   {title : 'Web Frontend Development', description : 'I am an intermididate front end web developer with React. I asure i can do good stuff', imgUrl : images.about01},
//   {title : 'Mobile Frontend Development', description : 'I a good Mobile developer with flutter. Just say what you need and i will get it done', imgUrl : images.about02},
//   {title : 'Back end Developper', description : 'I am an intermidiate backend developer with django. I asure i can do good stuff', imgUrl : images.about03},
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) =>setAbouts(data))
  }, []);

  return (
    <>
      <h3 className='head-text'>
        I will add <span>"good Apps"</span> to <br />your <span>Triumph</span>
      </h3>

      <div className='app__profiles'>
        {abouts.map((about, i)=>(
          <motion.div
          whileInView={{opacity : 1}}
          whileHover = {{scale:1.1}}
          transition = {{duration : 0.5, type : 'tween'}}
          className="app__profile-item"
          key={i}>
            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <h2 className='bold-text' style={{marginTop : 20}}>
              {about.title}
            </h2>
            <p className='p-text' style={{marginTop : 10}}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </> 
  )
}

export default AppWrap(
  MotionWrap(About,'app__about'), 
  'about',
  'app__whitebg'


)