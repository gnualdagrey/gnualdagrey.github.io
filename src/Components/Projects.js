import React from 'react'
import { projects } from "../data/projectsData"

function Projects() {
  console.log(projects)
  return (
    <>
    <section id="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-image">🌐</div>
                    <div className="project-info">
                        <h3>Personal Website</h3>
                        <p>A responsive portfolio website showcasing my work and skills using HTML and CSS.</p>
                        <div className="project-tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">Responsive</span>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">📝</div>
                    <div className="project-info">
                        <h3>Blog Layout</h3>
                        <p>A clean and modern blog layout with sidebar navigation and article cards.</p>
                        <div className="project-tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">Grid</span>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">🍕</div>
                    <div className="project-info">
                        <h3>Restaurant Page</h3>
                        <p>A beautiful landing page for a restaurant with menu and contact information.</p>
                        <div className="project-tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">Flexbox</span>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">🎨</div>
                    <div className="project-info">
                        <h3>Color Palette</h3>
                        <p>An interactive color palette generator for designers and developers.</p>
                        <div className="project-tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">JavaScript</span>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">📱</div>
                    <div className="project-info">
                        <h3>Mobile App Landing</h3>
                        <p>A modern landing page design for a mobile application with smooth animations.</p>
                        <div className="project-tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">Animation</span>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">⚙️</div>
                    <div className="project-info">
                        <h3>Dashboard UI</h3>
                        <p>A clean dashboard interface with cards, charts, and data visualization.</p>
                        <div className="project-tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">Grid</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Projects;