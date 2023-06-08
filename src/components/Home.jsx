import React from "react";
import "../styles/app.scss"
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/atul1.png";
const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I'm <br />
            Atul Paswan
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div className="hireMe">
            <a href="mailto:atulpaswan324@gmail.com">Hire Me</a>
            <a href="#home">
              Projects <BsArrowUpRight />
            </a>
          </div>
        </div>
        <article>
          <p>
            +<span>5</span>
          </p>
          <span>Projects Done</span>
        </article>
        <aside>
          {/* <article>
            <p>
              +<span>0</span>
            </p>
            <span>Clients Worldwide</span>
          </article> */}
          <article dataspcial>
            <p>Contact</p>
            <span>atulpaswan324@gmail.com</span>
            {/* <span>Projects Made </span> */}
          </article>
        </aside>
      </section>
      <section>
        <img src={me} alt="Atul" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
