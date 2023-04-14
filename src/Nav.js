import React from 'react'

import {Link} from 'react-router-dom'

export function Nav(){
  return(
    <nav className='navClass'>
      <Link to='/' >Home</Link>
      <Link to='/contact' >Contact</Link>
    </nav>
  )
}