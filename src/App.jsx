import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('bhavishya-theme') || 'light')
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('bhavishya-theme', theme) }, [theme])
  useEffect(() => { const sections = document.querySelectorAll('section[id]'); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: '-35% 0px -55% 0px' }); sections.forEach((section) => observer.observe(section)); const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: 0.12 }); document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element)); return () => { observer.disconnect(); revealObserver.disconnect() } }, [])
  return <><Navbar activeSection={activeSection} theme={theme} onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} /><main><Hero /><About /><Education /><Skills /><Projects /><Certifications /><Contact /></main><Footer /></>
}
