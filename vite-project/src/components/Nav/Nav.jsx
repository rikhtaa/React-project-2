import React from 'react'
import styles from './Nav.module.css'
const Nav = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className='logo'>
        <img src="/images/logo.png" alt="" />
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
       
      </ul>
    </nav>
  )
}

export default Nav