import React from "react";

function Skills() {
  return (
    <div id="skill">
      <h2>Skills</h2>
      <div className="skill-set">
        <div className="primary-skill">
          <p >Technical Skills</p>
          <ul className="list-element">
            <li>ReactJS, React Hooks, React Redux</li>
            <li>JavaScript, C#, Python, C++</li>
            <li>.Net, ASP.Net</li>
            <li>NodeJS, ExpressJS</li>
            <li>MYSQL, MongoDB</li>
            <li>Bootstrap, Tailwind CSS</li>
            <li>HTML, CSS, SCSS</li>
            <li>Git, Github</li>
          </ul>
        </div>
        <div className="secondary-skill">
        <p >Soft Skills</p>
          <ul type="circle">
            <li>Excellent written and verbal communication skills </li>
            <li>Critical thinking and problem-solving abilities</li>
            <li>Adaptability and ability to work effectively in a team </li>
            <li>Strong work ethic and attention to detail </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            
          </ul>
        </div>
       
      </div>
    </div>
  );
}

export default Skills;
