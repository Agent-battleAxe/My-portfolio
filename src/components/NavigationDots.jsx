import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
       {[
        'home','about','work','skills','testimonials','contact'
        ].map((item,i)=>(
          <a 
          key={item+i}
          className = "app__navigation-dot"
          href={`#${item}`}
          
          style = {active=== item ? {backgroundColor : '#2287c4'}: {}}
          
          />
        
      ))}


    </div>
  )
}

export default NavigationDots