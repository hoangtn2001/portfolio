import React from 'react'
import "./Contact.css"
import { useEffect } from 'react'
const Contact = () => {
  useEffect(()=>{
    const sections = document.getElementById('contact')
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
    <section className="contact" id='contact'>
        <h3 className="heading">Contact</h3>
        <form action="#">
          <input type="text" placeholder='Your name'/>
          <input type="text" placeholder='Your email'/>
          <input type="text" placeholder='Your address'/>
          <input type="number" placeholder='Phone number'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
          <div>
            <button type='submit' className="btn">Send me!</button>
          </div>
        </form>
      </section>
  )
}

export default Contact