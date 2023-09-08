import React from 'react'
// import me from "../assets/atul1.png";

const Testmonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testmonial</h2>
      
      <section>
        <TestmonialCard name={"Atul"} 
        feedback={""} 
        />
        <TestmonialCard name={"Atul"} 
        feedback={""} 
        />
        <TestmonialCard name={"Atul"} 
        feedback={""} 
        />

      </section>
    </div>
  )
}

const TestmonialCard=({name,feedback})=>(
<article>
  <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
  <h4>{name}</h4>
  <p>{feedback}</p>

</article>
)
export default Testmonial

