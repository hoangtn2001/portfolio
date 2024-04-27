import anh2 from '../../public/img/image1.jpg';
import "./Experience.css"
import { useEffect } from 'react';
const Experience = () => {
  useEffect(()=>{
    const sections = document.getElementById('experience')
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
    <section className="experience" id="experience">
    <h2 className="heading">Experiences</h2>
    <div className="experience-gallelry">
      <div className="exper-box">
        <div className="exper-img">
          <img src={anh2} alt="khong ảnh" />
        </div>
        <div className="exper-content">
          <h3>Web design</h3>
          <p>thích được cùng nhau vui vẻ, cùng nhau ca hát, cùng nhau tự do</p>
          <a href="#experience"> <i class="fa fa-external-link" aria-hidden="true"></i></a>
        </div>
      </div>

      <div className="exper-box">
        <div className="exper-img">
          <img src={anh2} alt="không ảnh" />
        </div>
        <div className="exper-content">
          <h3>Web design</h3>
          <p>thích được cùng nhau vui vẻ, cùng nhau ca hát, cùng nhau tự do</p>
          <a href="#home"> <i class="fa fa-external-link" aria-hidden="true"></i></a>
        </div>
      </div>

      <div className="exper-box">
        <div className="exper-img">
          <img src={anh2} alt="không ảnh" />
        </div>
        <div className="exper-content">
          <h3>Web design</h3>
          <p>thích được cùng nhau vui vẻ, cùng nhau ca hát, cùng nhau tự do</p>
          <a href="#home"> <i class="fa fa-external-link" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Experience