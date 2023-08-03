/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Skills.css"
import javascript from "../src/icons/javascript.svg"
import html from "../src/icons/html.svg"
import css3 from "../src/icons/icons8-css3.svg"
import react from "../src/icons/icons8-react-native.svg"
// import laptop from "../src/icons/41546-man-working-in-laptop.svg"




function Skills() {
  return (
    <div className='Skill'>
      <section className='Section1'>
        <img src="https://media.istockphoto.com/id/861136546/vector/businessman-or-office-worker-sitting-at-a-desk-and-working-on-t.jpg?s=612x612&w=0&k=20&c=HtJOGmUyFF5s75BOdG8r8AaKW5sm_RAlnrR8TypZG4U=" ></img>
      </section>
      <section className='Section2'>
            <h3>Proficiency</h3>
           <div className='s21'><img className='s21img' src={html} ></img></div>
           <div className='s22'><img className='s22img' src={css3} ></img></div>
           <div className='s23'><img className='s23img' src={javascript} ></img></div>
           <div className='s24'><img className='s24img' src={react} ></img></div>

        </section>
  
    </div>
  )
}

export default Skills