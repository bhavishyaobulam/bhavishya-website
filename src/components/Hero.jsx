import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'

export default function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-copy reveal">
      <p className="eyebrow"><span className="status-dot" /> Available for new opportunities</p>
      <h1>Building ideas<br /><em>into impact.</em></h1>
      <p className="hero-subtitle">Computer Science Student <span>·</span> AI & Data Science Enthusiast</p>
      <p className="hero-text">Hello! I am a B. Tech student specializing in Artificial Intelligence and Data Science at REVA University. I am passionate about programming, learning new technologies, and creating innovative projects.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">View My Projects <FiArrowUpRight /></a><a className="button button-ghost" href="#contact">Contact Me</a></div>
      <div className="hero-meta"><span><FiMapPin /> Kadapa District, India</span><span className="hero-rule" /><span>Currently at REVA University</span></div>
    </div>
    <div className="hero-visual reveal delay-1">
      <div className="photo-placeholder"><div className="photo-inner"><span className="photo-initial">B</span><span>Add Profile Photo Here</span></div><span className="photo-corner corner-tl" /><span className="photo-corner corner-br" /></div>
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="floating-note note-one"><strong>02</strong><span>semester<br />in progress</span></div>
      <div className="floating-note note-two"><strong>7.95</strong><span>current<br />SGPA</span></div>
    </div>
    <div className="social-rail"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a><a href="mailto:obulambhavishya@gmail.com" aria-label="Email"><FiMail /></a></div>
  </section>
}
