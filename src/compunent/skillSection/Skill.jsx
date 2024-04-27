import React from 'react'
import { useEffect } from 'react';
import "./Skill.css"
const Skill = () => {
    useEffect(()=>{
        const circles = document.querySelectorAll('.circle');
        circles.forEach(eleme=>{
          var dots = eleme.getAttribute("data-dots");
          var marked = eleme.getAttribute("data-percent");
          var percent = Math.floor(dots*marked/100);
          var points = "";
          var rotate = 360 / dots;
          for(let i = 0; i<dots ; i++){
            points += `<div class="points" style = "--i:${i}; --rot:${rotate}deg"></div>`;
          }
          eleme.innerHTML = points;
          const pointsMarked = eleme.querySelectorAll('.points');
          for(let i =0 ; i<percent ; i++){
            pointsMarked[i].classList.add('marked');
          }
        })
      },[])
      
      useEffect(()=>{
        const sections = document.getElementById('skills')
        const html = document.querySelector('.html1');
        const css = document.querySelector('.css1');
        const js = document.querySelector('.js1');
        const sql = document.querySelector('.sql1');
        const react = document.querySelector('.react1');
        const node = document.querySelector('.node1');
        const handleScroll = ()=>{
              let top = window.scrollY;
            let offset= sections.offsetTop - 150;
            let height = sections.offsetHeight;
            sections.classList.remove("appear");
            html.classList.remove('html');
            css.classList.remove('css');
            js.classList.remove('js');
            sql.classList.remove('sql');
            react.classList.remove('react');
            node.classList.remove('node');
            if(top >= offset && top < offset + height){
              sections.classList.add("appear");
              html.classList.add('html');
              css.classList.add('css');
              js.classList.add('js');
              sql.classList.add('sql');
              react.classList.add('react');
              node.classList.add('node');
            }
            if(top >= offset && top < offset + 29 )
            {
              const circles = document.querySelectorAll('.circle');
              circles.forEach(eleme=>{
                var dots = eleme.getAttribute("data-dots");
                var marked = eleme.getAttribute("data-percent");
                var percent = Math.floor(dots*marked/100);
                var points = "";
                var rotate = 360 / dots;
                for(let i = 0; i<dots ; i++){
                  points += `<div class="points" style = "--i:${i}; --rot:${rotate}deg"></div>`;
                }
                eleme.innerHTML = points;
                const pointsMarked = eleme.querySelectorAll('.points');
                for(let i =0 ; i<percent ; i++){
                  pointsMarked[i].classList.add('marked');
                }
              })
            }
            if(top >=  offset + height-25 && top <  offset + height )
            {
              const circles = document.querySelectorAll('.circle');
              circles.forEach(eleme=>{
                var dots = eleme.getAttribute("data-dots");
                var marked = eleme.getAttribute("data-percent");
                var percent = Math.floor(dots*marked/100);
                var points = "";
                var rotate = 360 / dots;
                for(let i = 0; i<dots ; i++){
                  points += `<div class="points" style = "--i:${i}; --rot:${rotate}deg"></div>`;
                }
                eleme.innerHTML = points;
                const pointsMarked = eleme.querySelectorAll('.points');
                for(let i =0 ; i<percent ; i++){
                  pointsMarked[i].classList.add('marked');
                }
              })
            }
        }
        window.addEventListener("scroll",handleScroll);
            }
        ,[])
  return (
    <section className="skills" id="skills">
        <div className="main-text">
          <h2 className="heading">My skills</h2>
        </div>
        <div className="skill-main">
          <div className="skill-left">
            <h3>Techical skills</h3>
            <div className="skill-bar">
              <div className="info">
                <p>HTML</p>
                <p>75%</p>
              </div>
              <div className="bar"><span className='html1 html'></span></div>
            </div>

            <div className="skill-bar">
              <div className="info">
                <p>CSS</p>
                <p>75%</p>
              </div>
              <div className="bar"><span className='css1 css'></span></div>
            </div>

            <div className="skill-bar">
              <div className="info">
                <p>JAVASCRIPT</p>
                <p>72%</p>
              </div>
              <div className="bar"><span className='js1 js'></span></div>
            </div>

            <div className="skill-bar">
              <div className="info">
                <p>SQL</p>
                <p>40%</p>
              </div>
              <div className="bar"><span className='sql1 sql'></span></div>
            </div>

            <div className="skill-bar">
              <div className="info">
                <p>REACTJS</p>
                <p>75%</p>
              </div>
              <div className="bar"><span className=' react1 react'></span></div>
            </div>

            <div className="skill-bar">
              <div className="info">
                <p>NODEJS</p>
                <p>40%</p>
              </div>
              <div className="bar"><span className='node1 node'></span></div>
            </div>
          </div>
          <div className="skill-right">
            <h3>Profestional skills</h3>
            <div className="porfesstional">
            <div className="box">
              <div className="circle" data-dots ="80" data-percent ="90">
              </div>
              <div className="text">
                <big>90%</big>
                <small>Team work</small>
              </div>
            </div>

            <div className="box">
              <div className="circle" data-dots ="80" data-percent ="70">
                
              </div>
              <div className="text">
                <big>70%</big>
                <small>creativity</small>
              </div>
            </div>

            <div className="box">
              <div className="circle" data-dots ="80" data-percent ="80">
              
              </div>
              <div className="text">
                <big>80%</big>
                <small>communication</small>
              </div>
            </div>

            <div className="box">
              <div className="circle" data-dots ="80" data-percent ="60">
              
              </div>
              <div className="text">
                <big>60%</big>
                <small>project Mangement</small>
              </div>
            </div>

          </div>
          </div>
        </div>
      </section>
  )
}

export default Skill