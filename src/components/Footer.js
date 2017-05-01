import React from 'react'

import img from '../img/algolia-logo.svg'

const Footer = () => (
  <footer className="mt2 h6">
    <div className="mb1">
      <a
        href="https://github.com/brendansudol/conan-jokes"
        className="mr2 black"
      >
        Code on GitHub
      </a>
      <a href="https://brendansudol.com" className="black">
        Made by @brensudol
      </a>
    </div>
    <div>
      Search is powered by{' '}
      <a href="https://www.algolia.com/">
        <img alt="algolia" className="align-middle" src={img} width="50" />
      </a>
    </div>
  </footer>
)

export default Footer
