import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
  return (
    
    <>

    <div className=' bg-white'>

    <div className="d-flex flex-column text-center container">

<h2 className='PORO'>PORTFOLIO COMPONENT</h2>



<div className='d-flex align-items-center justify-content-center '>

<span className='LINE bg-black'></span>

<FontAwesomeIcon className=' text-black STAR mx-3 ' icon={faStar} size="2x" style={{margin: '0 10px'}} />

<span className='LINE bg-black'></span>

</div>

<div className=' d-flex flex-wrap justify-content-center align-items-center '>

<div className='col-lg-4 col-md-6 p-4 position-relative'>
  <div className=''>
  <div  className='Img-Contan position-absolute w-100'></div>
  <img className=' w-100 IMG-dff' src="	https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
 </div>
</div>


<div className='col-lg-4 col-md-6 p-4 position-relative'>
  <div className=''>
  <div  className='Img-Contan position-absolute w-100'></div>
  <img className=' w-100 IMG-dff' src="	https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
 </div>
</div>

<div className='col-lg-4 col-md-6 p-4 position-relative'>
  <div className=''>
  <div  className='Img-Contan position-absolute w-100'></div>
  <img className=' w-100 IMG-dff' src="	https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
 </div>
</div>

</div>

    </div>
    </div>
    <div className=''></div>
    </>
  )
}
