import React from 'react'
import anh1 from '../../public/img/pic1.jpg';
import "./Home.css"
const Home = () => {
  return (
    
    <section className="home" id="home">
    <div className="home-img">
      <img src={anh1} alt="" />
    </div>
    <div className="home-content">
      <h1>Hi, I'm <span>Hoàng</span></h1>
      <h3 className='typing-text'>I'm a <span></span></h3>
      <p> I'm always trying to improve myself every day. 
        Currently, my goal is to improve and learn the necessary skills in my front-end job, 
        and in the future, I plan to become a professional about full-stack. 
      </p>

      <div className="social-icon">
        <a href="#home"><i class="fa-brands fa-facebook"></i></a>
        <a href="#home"><i class="fa-brands fa-github"></i></a>
        <a href="#home"><i class="fa-solid fa-envelope"></i></a>
      </div>
      <a href="#home" className="btn">Hire me</a>
    </div>
  </section>
  )
}

export default Home