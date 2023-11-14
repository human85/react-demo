import './Navbar.css'
import { menuIcon, closeIcon } from '../../assets'
import { useState } from 'react'

const Navbar = () => {
  const [closed, setClosed] = useState(false)

  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">DZign</span>
        </a>

        <ul>
          <li>
            <a href="#topics">Course Detail</a>
          </li>
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setClosed(false)}>
          <img src={menuIcon} />
        </div>
      </nav>

      <div className={closed ? 'mobile-menu-container hidden' : 'mobile-menu-container'}>
        <ul className="menu-items">
          <li>
            <a onClick={() => setClosed(true)} href="#topics">
              Course Detail
            </a>
          </li>
          <li>
            <a onClick={() => setClosed(true)} href="#info">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setClosed(true)} href="#blog">
              Blog
            </a>
          </li>
          <li>
            <a onClick={() => setClosed(true)} href="#testimonials">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="close-icon" onClick={() => setClosed(true)}>
          <img src={closeIcon} />
        </div>
      </div>
    </>
  )
}

export default Navbar
