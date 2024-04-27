import React from 'react'
import "./Education.css"
import { useEffect } from 'react'
const Education = () => {
  useEffect(()=>{
    const sections = document.getElementById('education')
    const handleScroll = ()=>{
          let top = window.scrollY;
        let offset= sections.offsetTop - 150;
        let height = sections.offsetHeight;
        sections.classList.remove("appear");
        if(top >= offset && top < offset + height){
          sections.classList.add("appear");
        }
    }
    window.addEventListener("scroll",handleScroll);
        }
    ,[])
  return (
    <section className="education" id="education">
    <h2 className="heading">Education</h2>
    <div className="timeline-items">
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-date">2019</div>
        <div className="timeline-content">
          <h3>Hight school</h3>
          <p>thích được cùng nhau vui vẻ, cùng nhau ca hát, cùng nhau tự do</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-date">2019</div>
        <div className="timeline-content">
          <h3>Hight school</h3>
          <p>thích được cùng nhau vui vẻ, cùng nhau ca hát, cùng nhau tự do</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-date">2019</div>
        <div className="timeline-content">
          <h3>Hight school</h3>
          <p>thích được cùng nhau vui vẻ, cùng nhau ca hát, cùng nhau tự do</p>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Education