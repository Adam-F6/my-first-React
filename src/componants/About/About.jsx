import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function About() {
  return (
    <div className='flex-column d-flex align-items-center justify-content-center ABOUT'>



<h2 className=' text-white Ab2'>ABOUT COMPONENT</h2>

<div className='d-flex align-items-center justify-content-center'>

<span className='LINE'></span>

<FontAwesomeIcon className=' text-white STAR mx-3' icon={faStar} size="2x" style={{margin: '0 10px'}} />

<span className='LINE'></span>

</div>


<div className=' w-100 text-white d-flex'><p className=' w-50'>Freelancer is a free bootstrap theme created by Route.
   The download includes the complete source files including HTML, CSS,
    and JavaScript as well as optional SASS stylesheets
     for easy customization.</p>
     
      <p className=' w-50'>Freelancer is a free bootstrap theme created by Route. The download includes the
         complete source files including HTML,
         CSS, and JavaScript as well as optional
          SASS stylesheets for easy customization.</p></div>


    </div>
  )
}
