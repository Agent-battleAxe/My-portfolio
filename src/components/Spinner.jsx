import React from 'react';

import {Dna, ThreeDots} from 'react-loader-spinner';

function Spinner({message}) {
  return (
    <div className='app__flex'>
        <Dna
            color = "#ffc749"
            height={70}
            width = {120}
            style = {{margin : "5px"}}
        
        />
        <p className='p-text'> {message} </p>
    </div>
  )
}

export default Spinner