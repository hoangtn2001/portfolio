import './App.css';
import React, { useEffect } from 'react'
import Header from './compunent/header/Header';
import Home from './compunent/homeSection/Home';
import Skill from './compunent/skillSection/Skill';
import Experience from './compunent/experienceSection/Experience';
import Education from './compunent/educationSection/Education';
import Contact from './compunent/contactSection/Contact';
function App() {
  useEffect(()=>{
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('header nav a ');
    const handleScroll = ()=>{
        sections.forEach(sec =>{
          let top = window.scrollY;
        let offset= sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top >= offset && top < offset + height){
          links.forEach(lim=>{
          lim.classList.remove('active');
          document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
          })
        }

        })
        
    }
    window.addEventListener("scroll",handleScroll);
        }
    ,[])
  return (
    <div className="App">
      <body>
     <Header/>

      {/* home Section */}
      <Home/>

       {/* experience Section */}

     <Experience/>

      {/* skills Section */}

     <Skill/>

      {/* education Section */}
      <Education/>
      {/*contact Section */}
      <Contact/>
      <footer className="footer">

        <div className="social">
        <a href="#home"><i class="fa-brands fa-facebook"></i></a>
        <a href="#home"><i class="fa-brands fa-github"></i></a>
        <a href="#home"><i class="fa-solid fa-envelope"></i></a>
        </div>
        <ul className="list">
          <li><a href="#home">FAQ</a></li>
          <li><a href="#home">ABOUT</a></li>
          <li><a href="#home">CONTACT</a></li>
          <li><a href="#home">PRIVACY POLICIES</a></li>
        </ul>
        
        <p className="coppyright">
        <div className="line"></div>
          2024 | Cố gắng hết sức
        </p>
      </footer>
      </body>
    </div>
    
  );
}

export default App;
