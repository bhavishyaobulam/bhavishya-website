import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

const navItems = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact']

export default function Navbar({ activeSection, theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Bhavishya home">
        <span className="brand-mark">B</span><span>bhavishya<span className="brand-dot">.</span></span>
      </a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navItems.map((item) => <a className={activeSection === item ? 'active' : ''} href={`#${item}`} key={item} onClick={closeMenu}>{item}</a>)}
      </nav>
      <div className="nav-actions">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="nav-social" aria-label="GitHub"><FiGithub /></a>
        <button className="theme-toggle" onClick={onThemeToggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>{theme === 'light' ? <FiMoon /> : <FiSun />}</button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">{menuOpen ? <FiX /> : <FiMenu />}</button>
      </div>
    </header>
  )
}

export { FiGithub, FiLinkedin, FiMail }
