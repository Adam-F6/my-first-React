import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <div className=' flex-column d-flex align-items-center justify-content-center Home-BG'>


<img className=' HOME-IMG' src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="" />
<h2 class="text-uppercase mb-3 fs-1 fw-bolder text-white mt-5">START FRAMEWORK</h2>

<div className='d-flex align-items-center justify-content-center'>

<span className='LINE'></span>

<FontAwesomeIcon className=' text-white STAR mx-3' icon={faStar} size="2x" style={{margin: '0 10px'}} />

<span className='LINE'></span>

</div>
<p className=' text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
