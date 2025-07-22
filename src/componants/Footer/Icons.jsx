import React from 'react'
import { faFacebook, faTwitter, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icons() {
  return (
    <div className=' mt-3'>
<span className=' icon-style align-items-center text-center'><FontAwesomeIcon className='IC' icon={faFacebook} size="2x" style={{margin: '0 10px'}} /></span>

<span className=' icon-style'><FontAwesomeIcon className='IC' icon={faTwitter} size="2x" style={{margin: '0 10px'}} /></span>

<span className=' icon-style'><FontAwesomeIcon className='IC' icon={faLinkedinIn} size="2x" style={{margin: '0 10px'}} /></span>

<span className=' icon-style'><FontAwesomeIcon className='IC' icon={faGithub} size="2x" style={{margin: '0 10px'}} /></span>


    </div>
  )
}
