import React from 'react'

import img from '../img/conan.jpg'

const Header = () => (
  <header className='mb3'>
    <img alt='conan' className='mb1 block' src={img} width='60' height='72' />
    <h1 className='mt0 h3 bold'>Conan’s monologue jokes (2010—2017)</h1>
  </header>
)

export default Header
