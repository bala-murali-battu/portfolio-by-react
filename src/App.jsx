import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  

  return (
    <>
      <nav>
        <h2>Murali</h2>

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <div className="hero" id="home" >
        <h1>Hello, I'm Battu Bala Murali</h1>

        <p>BTech Student at KKR & KSR Institute of Technology and Sciences,</p>
        <p>specializing in Full-Stack Development and Machine Learning</p>

        <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Java</span>
            <span>Python</span>
        </div>

        <a href="#experience" className="btn">View Experience</a>
    </div>

    <section id="experience">

        <h2>My Experience</h2>

    <section className="cardcontainer">

        <div className="card">
            <h3>MERN Stack Internship</h3>
            <p><b>TFI Company</b></p>
            <p>
                Learning MERN Stack and creating web applications using
                MongoDB, Express, React and Node.js.
            </p>
        </div>

        <div className="card">
            <h3>Machine Learning Internship</h3>
            <p><b>Winz Education</b></p>
            <p>
                Learning Machine Learning concepts and working on Python projects.
            </p>
        </div>

        <div className="card">
            <h3>Portfolio Website</h3>
            <p><b>Personal Project</b></p>
            <p>
                Created my own portfolio website using HTML and CSS.
            </p>
        </div>
     </section>

    </section>

    <section id="contact">

        <h2>Contact Me</h2>

        <form>

            <label>Name</label>
            <input type="text" placeholder="Enter your name"/>

            <label>Email</label>
            <input type="email" placeholder="Enter your email"/>

            <label>Message</label>
            <textarea rows="5" placeholder="Enter your message"></textarea>

            <button className="message"  type="submit">Send Message</button>

        </form>

    </section>

    <footer>
        <p>© 2026 Battu Bala Murali</p>
    </footer>

    </>
  );
}

export default App;
