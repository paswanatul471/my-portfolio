import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={"https://avatars.githubusercontent.com/u/90141410?v=4"} alt="Founder" />
            <h2>Atuk Paswan</h2>
            <p>When nothing goes right... Swipe!</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.instagram.com/paswanatul07/" target='blank'>
                    <AiFillInstagram />
                </a>
                <a href="https://github.com/paswanatul471" target='blank'>
                    <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/atul-paswan-121ba91b8/" target='blank'>
                    <AiFillLinkedin />
                </a>
            </article>
        </aside>
        <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  )
}

export default Footer