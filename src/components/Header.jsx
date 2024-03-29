import React from "react";
// import  "../styles/app.scss";
import {AiOutlineMenu} from "react-icons/ai"
const Header = ({setMenuOpen, menuOpen}) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen}/>
      </nav>
      <button className="navBtn" onClick={()=> setMenuOpen(!menuOpen)}>
          <AiOutlineMenu/>
        </button>
     
    </>
  );
};
export const HeaderPhone = ({menuOpen, setMenuOpen}) => {

  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
        <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  )
}


const NavContent = ({setMenuOpen}) => {
  const Link = "https://drive.google.com/file/d/1nP5BuHnys5hmWUQmhqpr5dQpzt2JuWrN/view?usp=sharing"
return(
  <>
  <h2>Atul Paswan</h2>
  <div>
    <a onClick={()=>setMenuOpen(false)} href="#home">Home</a>
    <a onClick={()=>setMenuOpen(false)} href="#work">Work</a>
    <a onClick={()=>setMenuOpen(false)} href="#timeline">Experience</a>
    <a onClick={()=>setMenuOpen(false)} href="#services">Services</a>
    <a onClick={()=>setMenuOpen(false)} href="#contact">Contact</a>
    <a onClick={()=>setMenuOpen(false)} href={Link} download>Resume</a>
  </div>
  <a href="mailto:atulpaswan324@gmail.com">
    <button>Email</button>
  </a>
  </>
)
};

export default Header;