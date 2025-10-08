import React from "react";
function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-image">
          <img src="public/cv.png"/>
        </div>
        <div className="about-text">
          <p>Hello! I'm a passionate web developer with a love for creating beautiful and functional websites. I enjoy turning complex problems into simple, elegant solutions.</p>
          <p>I'm currently learning HTML, CSS, and JavaScript to build amazing web experiences. My goal is to become a full-stack developer and create applications that make a difference.</p>
          <p>When I'm not coding, you can find me exploring new technologies, reading tech blogs, or working on personal projects.</p>
        </div>
      </div>
    </section>
  );
}

export default About;