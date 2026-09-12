import { useEffect, useState } from 'react'
import mahroof from './assets/mahroof.png'
import velscent from "./assets/velscent.png"
import sahachari from './assets/sahachari.png'
import { skills } from './skillData'
import './App.css'
import './skill-icons.css'

const profile = { name: 'Mahroof', title: 'MERN Full Stack Developer', location: 'Manjeshwer, Kerala', email: 'rahimanmahroof@gmail.com', github: 'https://github.com/abdulmahroof3010-tech', linkedIn: 'https://www.linkedin.com/in/mahroof1030/' }
const navItems = [['HOME', 'home'], ['ABOUT', 'about'], ['PROJECTS', 'projects'], ['SERVICES', 'services'], ['SKILLS', 'skills']]
const experience = [
  ['2025 - PRESENT', 'MERN FULL STACK DEVELOPER', 'Building full-stack web applications to solve real-life problems and improve development and design skills.'],
]
  
const services = [
  ['01', 'FULLSTACK ARCHITECTURE', 'Full Stack Development', 'Building complete web applications with modern frontend, backend, APIs, databases, authentication, and responsive interfaces.'],
  ['02', 'QUALITY & SUPPORT', 'Maintenance & Bug Fixing',  'Fixing bugs, improving existing applications, implementing new features, and maintaining reliable web applications.'],
]
const serviceDetails = {
 
  '01': { overview: 'Building complete web applications with responsive interfaces, backend APIs, database integration, authentication, and reliable application logic.', provide: [ 'Responsive frontend development','Backend API development', 'Database integration',   'Authentication & authorization',  'Full-stack application development',], technologies: ['React', 'Node.js', 'Express', 'MongoDB','TypeScript', 'REST API'] },
  '02': { overview:   'Improving existing web applications by identifying bugs, implementing features, refining interfaces, and maintaining application functionality.', provide: ['Bug fixing & debugging', 'Feature implementation', 'Code improvements', 'UI refinement', 'Application maintenance',], technologies: ['JavaScript', 'React', 'TypeScript','Node.js', 'Git',] },
}
const projects = [
  { number: '01', name: 'VELSCENT', image: velscent, description: 'A full-stack perfume e-commerce platform with a responsive frontend and robust backend, featuring product management, authentication, cart, wishlist, and order management.', technologies: [], url: 'https://www.velscent.store/' ,type:"live"},
  { number: '02', name: 'SAHACHARI CARE', image: sahachari, description: 'A full-stack medical equipment management platform where organizations can manage equipment and track bookings, while users can browse and reserve equipment and make donations.', url: 'https://github.com/abdulmahroof3010-tech/Sahachari_Care-backend' ,type:"code"},

]
function CornerFrame({ children, className = '' }) { return <div className={`corner-frame ${className}`}><span className="corner tl" /><span className="corner tr" /><span className="corner bl" /><span className="corner br" />{children}</div> }
function SectionHeading({ eyebrow, title, number }) { return <div className="section-heading"><span className="eyebrow">{number} / {eyebrow}</span><h2>{title}</h2></div> }
function SocialLinks() { return <div className="social-links"><a href={`mailto:${profile.email}`}>✉ EMAIL</a><a href={profile.github} target="_blank" rel="noreferrer">GH GITHUB</a><a href={profile.linkedIn} target="_blank" rel="noreferrer">LI LINKEDIN</a></div> }
function ProjectCard({ project, className = '' }) {const linkType=project.type==="live"?"View Project":"View Code"; return( <CornerFrame className={`project-card ${className}`}><a className="project-image-link" href={project.url} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={`${project.name} project screenshot`} /></a><div className="project-meta"><span className="project-number">{project.number}</span><span className="eyebrow">{project.type==="live"?'LIVE PROJECT' : 'IN DEVELOPMENT'}</span></div><h3>{project.name}</h3><p>{project.description}</p><a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">{linkType}</a></CornerFrame> )}
function ServiceDetailsModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return undefined
    const handleKeyDown = (event) => event.key === 'Escape' && onClose()
    document.body.classList.add('service-modal-open')
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.classList.remove('service-modal-open')
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [service, onClose])
  if (!service) return null
  const details = serviceDetails[service[0]]
  return <div className="service-modal" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <CornerFrame className="service-modal-panel" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
      <div className="service-modal-header"><span className="eyebrow">SERVICE {service[0]}</span><button className="service-modal-close" type="button" onClick={onClose} aria-label="Close service details">× CLOSE</button></div>
      <h2 id="service-modal-title">{service[2]}</h2>
      <div className="service-modal-section"><span className="eyebrow">OVERVIEW</span><p>{details.overview}</p></div>
      <div className="service-modal-section"><span className="eyebrow">WHAT I PROVIDE</span><ul>{details.provide.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="service-modal-section"><span className="eyebrow">TECHNOLOGIES</span><div className="service-modal-tech">{details.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
    </CornerFrame>
  </div>
}
function IntroOverlay() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)
  useEffect(() => {
    if (!visible) return undefined
    window.scrollTo(0, 0)
    document.body.classList.add('intro-active')
    const beginExit = () => {
      document.body.classList.remove('intro-active')
      document.body.classList.add('intro-complete')
      setExiting(true)
    }
    const exitTimer = window.setTimeout(beginExit, 2800)
    const removeTimer = window.setTimeout(() => {
      setVisible(false)
    }, 3000)
    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
      document.body.classList.remove('intro-active')
    }
  }, [visible])
  if (!visible) return null
  const skipIntro = () => {
    document.body.classList.remove('intro-active')
    document.body.classList.add('intro-complete')
    setExiting(true)
    window.setTimeout(() => setVisible(false), 200)
  }
  return <div className={`intro-overlay${exiting ? ' is-exiting' : ''}`} role="status" aria-label="Welcome to Amine's portfolio">
    <div className="intro-shell">
      <div className="intro-center"><span className="intro-name">Mahroof</span><span className="intro-welcome">WELCOME TO MY PORTFOLIO</span><span className="intro-loader" aria-hidden="true"><span /></span></div>
      <button className="intro-skip" type="button" onClick={skipIntro}>SKIP INTRO <span>→</span></button>
    </div>
  </div>
}
function MinimalSkillIcon({ kind }) {
  const shapes = { design: <path d="M12 3 21 12 12 21 3 12 12 3Z" />, motion: <path d="m5 5 14 14M19 5 5 19" />, video: <path d="M4 6h16v12H4zM8 6v12M16 6v12" />, photo: <><circle cx="12" cy="12" r="6" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></>, ai: <><path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z" /><path d="m19 4 .6 2.4L22 7l-2.4.6L19 10l-.6-2.4L16 7l2.4-.6L19 4Z" /></>, terminal: <><path d="m5 7 5 5-5 5" /><path d="M12 17h7" /></> }
  return <svg className="skill-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">{shapes[kind]}</svg>
}
function SkillIcon({ skill }) { return skill.icon ? <img className="skill-svg" src={skill.icon} alt="" /> : <MinimalSkillIcon kind={skill.kind} /> }

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFile, setActiveFile] = useState('BIO.MD')
  const [activeSkill, setActiveSkill] = useState('Languages')
  const [selectedService, setSelectedService] = useState(null)
  const files = {
    'BIO.MD': <><strong>MAHROOF</strong><h3>MERN FULL STACK DEVELOPER</h3><p>I am a passionate Full Stack Developer from Kerala. I build modern, scalable, and user-friendly web applications from idea to deployment.</p></>,
    'EXPERIENCE.MD': <><strong>EXPERIENCE.LOG</strong>{experience.map(([date, title]) => <p className="file-line" key={title}><span>{date}</span>{title}</p>)}</>,
      'EDUCATION.MD': <><strong>P.A First Grade College</strong><h3>BCA</h3><p>Mangalore University</p><p className="mono muted">2022 - 2025</p></>,
    'LOCATION.MD': <><strong>BASE</strong><h3>{profile.location}</h3><p className="mono muted">OPEN TO SELECT OPPORTUNITIES</p></>,
  }
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light' }, [dark])
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 }); document.querySelectorAll('.reveal').forEach((element) => observer.observe(element)); return () => observer.disconnect() }, [])
  return <><IntroOverlay /><div className="site-shell">
    <header className="navbar"><a className="brand" href="#home"><span className="brand-mark">M/</span><span>Mahroof</span></a><button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>☰</button><nav className={menuOpen ? 'open' : ''}>{navItems.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? '☼' : '◐'}</button></header>
    <main>
      <section id="home" className="hero-section section-pad"><div className="hero-copy reveal"><span className="eyebrow hero-step hero-step-1">01 / HELLO_WORLD</span><p className="greeting hero-step hero-step-2">HI, I'M</p><h1 className="hero-step hero-step-3">Mahroof<span className="blue-dot">.</span></h1><div className="title-stack hero-step hero-step-4"><span>MERN FULL STACK</span><strong>DEVELOPER</strong></div><p className="intro hero-step hero-step-5">I am a passionate Full Stack Developer from Kerala. I build modern, scalable, and user-friendly web applications from idea to deployment.</p><div className="button-row hero-step hero-step-6"><a className="button button-dark" href="#projects">VIEW PROJECTS <span>→</span></a><a className="button" href="/mahroofCV.pdf">DOWNLOAD CV <span>↓</span></a></div></div><div className="hero-side reveal"><CornerFrame className="portrait-frame"><div className="frame-label">MAHROOF.DEV <span>01 / 01</span></div><img src={mahroof} alt="Illustrated portrait of Mahroof" /></CornerFrame><div className="connect"><span className="eyebrow">LET'S CONNECT:</span><SocialLinks /></div></div></section>
      <section className="stats section-pad reveal"><div className="stats-step stats-step-1"><strong>1</strong><span>YEARS DEVELOPMENT EXPERIENCE</span></div></section>
      <section id="about" className="section-pad reveal"><SectionHeading number="02" eyebrow="PROFILE.EXE" title="About me" /><CornerFrame className="explorer"><aside><div className="window-title">ABOUT_ME.EXE</div>{Object.keys(files).map((file) => <button className={activeFile === file ? 'file active' : 'file'} onClick={() => setActiveFile(file)} key={file}><span>□</span>{file}</button>)}</aside><article><div className="path">/home/mahroof/profile/{activeFile.toLowerCase()}</div><div className="file-content">{files[activeFile]}</div><span className="status">● FILE_READY</span></article></CornerFrame></section>
      <section className="section-pad reveal"><SectionHeading number="03" eyebrow="TIMELINE.LOG" title="Experience" /><div className="timeline">{experience.map(([date, title, description]) => <article key={title}><span className="timeline-dot" /><span className="timeline-date">{date}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>
      <section id="projects" className="section-pad reveal"><SectionHeading number="04" eyebrow="SELECTED_WORK" title="Projects" /><div className="project-grid">{projects.map((project, index) => <ProjectCard project={project} className={`project-reveal project-reveal-${index + 1}`} key={project.name} />)}</div></section>
      <section id="services" className="section-pad reveal"><SectionHeading number="05" eyebrow="WHAT_I_BUILD" title="Services" /><div className="service-grid">{services.map(([number, category, title, description], index) => <CornerFrame className={`service-card ${index % 2 ? 'dark-card' : ''}`} key={title}><span className="service-number">{number}</span><span className="eyebrow">{category}</span><h3>{title}</h3><p>{description}</p><button className="text-link service-details-trigger" type="button" onClick={() => setSelectedService([number, category, title, description])}>[ CLICK TO VIEW DETAILS ]</button></CornerFrame>)}</div></section>
      <section id="skills" className="section-pad reveal"><SectionHeading number="06" eyebrow="TECH_STACK_AND_TOOLS" title="My expertise" /><div className="skills-layout"><aside>{Object.keys(skills).map((category) => <button className={activeSkill === category ? 'skill-tab active' : 'skill-tab'} onClick={() => setActiveSkill(category)} key={category}><span>▰</span>{category}<b>{skills[category].length}</b></button>)}</aside><CornerFrame className="skill-panel"><div className="path">/skills/{activeSkill.toLowerCase().replaceAll(' ', '-')}</div><div className="skill-cards">{skills[activeSkill].map((skill, index) => <div className={`skill-card skill-reveal skill-reveal-${index + 1}`} key={skill.name}><span className="skill-icon"><SkillIcon skill={skill} /></span><strong>{skill.name}</strong></div>)}</div></CornerFrame></div></section>
      <section id="contact" className="contact section-pad reveal"><span className="eyebrow">08 / OPEN_CHANNEL</span><h2>LET'S BUILD<br /><span>TOGETHER.</span></h2><p>Crafting performant, accessible, and user-centered web applications from Kasaragod to the world.</p><span className="availability">● AVAILABLE FOR SELECT OPPORTUNITIES</span><SocialLinks /></section>
    </main>
    <footer className="site-footer reveal"><div><span className="brand-mark">M/</span><h3>Let's build<br />together.</h3><p>MERN Full Stack Developer<br />Mangalore,kerala</p></div><div><span className="eyebrow">NAVIGATION</span>{navItems.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div><span className="eyebrow">SOCIALS</span><a href={profile.github}>GITHUB</a><a href={profile.linkedIn}>LINKEDIN</a><a className="footer-mail" href={`mailto:${profile.email}`}>GET IN TOUCH →</a></div><div className="footer-bottom"><span>© 2026 MAHROOF</span><a href="#home" aria-label="Back to top">↑ BACK TO TOP</a></div></footer>
  </div><ServiceDetailsModal service={selectedService} onClose={() => setSelectedService(null)} /></>
}
export default App
