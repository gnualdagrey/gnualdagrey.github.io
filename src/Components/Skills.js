import React from "react";

function Skills() {
  return (
    <>
     <section id="skills">
            <h2>My Skills</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <h3>HTML5</h3>
                    <p>Semantic markup and structure</p>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: "80%"}}></div>
                    </div>
                </div>
                <div className="skill-card">
                    <h3>CSS3</h3>
                    <p>Styling and responsive design</p>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: "80%"}}></div>
                    </div>
                </div>
                <div className="skill-card">
                    <h3>JavaScript</h3>
                    <p>Interactive web functionality</p>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: "70%"}}></div>
                    </div>
                </div>
                <div className="skill-card">
                    <h3>Responsive Design</h3>
                    <p>Mobile-first approach</p>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: "70%"}}></div>
                    </div>
                </div>
                <div className="skill-card">
                    <h3>Git & GitHub</h3>
                    <p>Version control and collaboration</p>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: "80%"}}></div>
                    </div>
                </div>
                <div className="skill-card">
                    <h3>Problem Solving</h3>
                    <p>Debugging and optimization</p>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: "80%"}}></div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Skills;