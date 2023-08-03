/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Home.css';

function Home() {
  return (
    <div>

        <div className='profile'>
            <div className='profilel'>
              <h1>Hi ! I'm Saiteja 👋</h1> <br></br>
              <h3>Front End Developer</h3>  <br></br>
              <h3>A passionate Front End Developer having design-minded front end developer focused on building beautiful interfaces & experiences 👨‍💻</h3>
            
            </div>
            <div className='profiler'>
              <img className='Homeimg' src='https://ebooks.bloggerspassion.com/wp-content/uploads/2020/04/man-is-blogging.jpg' alt='a man working with laptop'></img>
             </div>


        </div>

        <div className='footer'>
            <div className='footer'><h1>What I Do ?</h1></div>
            <div className='footer2'>
            <div className='footer2l'>
                <h1>Web Development</h1><br></br>
                <h3>💥 Building Fully responsive website front end using HTML, CSS, Bootstrap Javascript and React.</h3>
            </div>
            <div className='footer2r'>
            <img src="https://eacoder-f073.kxcdn.com/wp-content/uploads/2018/06/programmer-at-work-350x350.jpg" alt="a man using  the laptop" ></img>

            </div>
            </div>

        </div>
    </div>
  )
}

export default Home