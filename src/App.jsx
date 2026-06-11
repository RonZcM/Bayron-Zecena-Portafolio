import React, { useState } from 'react';
import { projects } from './projectsData';
import { certifications } from './certificationsData';
import './App.css'; 

import profileImg from './assets/Profile.png';
import photoBanner from './assets/Photo-banner.png';
import cvFile from './assets/CV Bayron Zecena.pdf';
import itsiLogo from './assets/itsi-logo.png';
import unicaesLogo from './assets/UNICAES-logo.png';
import pdfSkills1 from './assets/reconocimientos/ITCA-SKILLS-pimer-lugar.pdf';
import pdfSkills2 from './assets/reconocimientos/ITCA-SKILLS.pdf';
import pdfSobresaliente from './assets/reconocimientos/Sobresaliente.pdf';
import pdfEmprendimiento from './assets/reconocimientos/castor_primer_lugar.pdf';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

// import required modules
import { Pagination, Zoom, Autoplay } from 'swiper/modules';

function App() {
  const [filter, setFilter] = useState('Todos');
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  // Filter logic
  const allCategories = ['Todos', ...new Set(projects.flatMap(p => p.categories))];
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

  return (
    <>
      {/* Navegación Lateral */}
      <aside className="sidebar">
        <div className="profile-section">
          <img src={profileImg} alt="Bayron Zeceña" className="profile-img" />
          <a href="#home" className="logo">Bayron<span>.</span></a>
        </div>
        
        <ul className="nav-links">
          <li><a href="#home"><span className="nav-index">01.</span> Inicio</a></li>
          <li><a href="#about"><span className="nav-index">02.</span> Sobre mí</a></li>
          <li><a href="#education"><span className="nav-index">03.</span> Estudios</a></li>
          <li><a href="#work"><span className="nav-index">04.</span> Proyectos</a></li>
          <li><a href="#certifications"><span className="nav-index">05.</span> Certificaciones</a></li>
          <li><a href="#contact"><span className="nav-index">06.</span> Contacto</a></li>
        </ul>

        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>

        <div className="social-links">
          <a href="https://github.com/RonZcM" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ronaldo-zece%C3%B1a-57514a391/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="main-content">
        
        {/* Sección Inicio */}
        <section id="home" className="hero-section">
          <div className="hero-text">
            <p className="section-title">Hola, mundo</p>
            <h1>Soy Bayron<br/>Zeceña.</h1>
            <p>Desarrollador de Software Full-Stack ubicado en Santa Ana, El Salvador. Especializado en crear soluciones robustas, gestión de bases de datos y soporte técnico.</p>
            <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <a href="#work" className="btn-primary">Ver Mis Proyectos</a>
              <a href={cvFile} download className="btn-primary" style={{backgroundColor: 'transparent', border: '2px solid var(--accent)', color: 'var(--text-main)'}} onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--accent)'; e.target.style.color = '#fff'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--text-main)'; }}>Descargar CV</a>
            </div>
          </div>
          <div className="hero-img-container">
            <img src={photoBanner} alt="Bayron Zeceña Banner" className="hero-img" />
          </div>
        </section>

        {/* Sección Sobre Mí / Habilidades */}
        <section id="about">
          <p className="section-title">Mi Arsenal Técnico</p>
          <h2>Tecnologías y Herramientas</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Tengo experiencia desarrollando aplicaciones institucionales, plataformas web y soluciones móviles, además de gestionar bases de datos relacionales. Me adapto rápidamente para implementar la mejor tecnología en cada reto, manteniendo buenas prácticas de versionado y trabajo colaborativo.
          </p>
          
          <div className="skills-container">
            <span className="skill-tag">Java & SpringBoot</span>
            <span className="skill-tag">PHP & Laravel</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Bootstrap</span>
            <span className="skill-tag">Tailwind</span>
            <span className="skill-tag">Android Studio</span>
            <span className="skill-tag">Jmeter</span>
            <span className="skill-tag">Postman</span>
            <span className="skill-tag">Soporte Técnico (Cisco IT)</span>
            <span className="skill-tag">Google Cloud</span>
            <span className="skill-tag">Metodologías Ágiles (SCRUM)</span>
          </div>
        </section>

        {/* Sección Estudios */}
        <section id="education">
          <p className="section-title">Mis Estudios</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Formación y Logros Académicos</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Mi trayectoria está respaldada por la excelencia y el compromiso constante con mi formación técnica y profesional en el área de tecnología.
          </p>

          <div className="education-container">
            <div className="education-column">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Educación Superior</h3>
              
              <div className="edu-card">
                <img src={unicaesLogo} alt="UNICAES" className="edu-logo" />
                <div className="edu-info">
                  <h4>Ingeniería en Desarrollo de Software</h4>
                  <p className="edu-institution">Universidad Católica de El Salvador (UNICAES)</p>
                  <span className="edu-date">Presente</span>
                </div>
              </div>

              <div className="edu-card">
                <img src="/projects/logos/LogoITCA_Web.png" alt="ITCA-FEPADE" className="edu-logo" />
                <div className="edu-info">
                  <h4>Técnico en Ingeniería de Desarrollo de Software</h4>
                  <p className="edu-institution">Escuela Especializada en Ingeniería ITCA-FEPADE</p>
                  <span className="edu-date">2024 - 2025</span>
                </div>
              </div>

              <div className="edu-card">
                <img src={itsiLogo} alt="INSA" className="edu-logo" />
                <div className="edu-info">
                  <h4>Bachillerato en Infraestructura Tecnológica y Servicios Informáticos</h4>
                  <p className="edu-institution">Centro Escolar INSA Santa Ana</p>
                  <span className="edu-date">2021 - 2023</span>
                </div>
              </div>
            </div>

            <div className="education-column">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Reconocimientos y Distinciones</h3>
              
              <div className="edu-card" style={{justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <div className="edu-info">
                  <h4>Primer Lugar en Competencia SKILLS ITCA</h4>
                  <p className="edu-institution">ITCA-FEPADE</p>
                  <span className="edu-date">2025</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a href={pdfSkills1} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}}>Ver 1er Lugar</a>
                  <a href={pdfSkills2} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}}>Ver Certificado</a>
                </div>
              </div>

              <div className="edu-card" style={{justifyContent: 'space-between'}}>
                <div className="edu-info">
                  <h4>Estudiante Sobresaliente</h4>
                  <p className="edu-institution">ITCA-FEPADE</p>
                  <span className="edu-date">2025</span>
                </div>
                <a href={pdfSobresaliente} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}}>Ver Certificado</a>
              </div>

              <div className="edu-card" style={{justifyContent: 'space-between'}}>
                <div className="edu-info">
                  <h4>Ganador de Feria de Emprendimiento</h4>
                  <p className="edu-institution">ITCA-FEPADE</p>
                  <span className="edu-date">2024</span>
                </div>
                <a href={pdfEmprendimiento} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}}>Ver Certificado</a>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Trabajos */}
        <section id="work">
          <p className="section-title">Portafolio</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Sistemas Desarrollados</h2>

          {/* Botones de Filtro */}
          <div className="filter-buttons">
            {allCategories.map(category => (
              <button 
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="work-grid">
            {filteredProjects.map(project => (
              <div 
                className="work-card" 
                key={project.id} 
                onClick={() => setSelectedProject(project)} 
                style={{cursor: 'pointer'}}
              >
                {/* Carrusel de Imágenes */}
                <Swiper
                  pagination={{ dynamicBullets: true }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {project.images.map((imgUrl, index) => (
                    <SwiperSlide key={index}>
                      <img src={imgUrl} alt={`${project.title} - imagen ${index + 1}`} className="work-img" />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="work-card-content">
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem'}}>
                    {project.logo && <img src={project.logo} alt="Logo" style={{height: '35px', maxWidth: '80px', objectFit: 'contain'}}/>}
                    <h3 style={{marginBottom: 0}}>{project.title}</h3>
                  </div>
                  <p className="work-card-details"><strong>Contexto:</strong> {project.context}</p>
                  <p className="work-card-details"><strong>Enfoque:</strong> {project.focus}</p>
                  <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.categories.map(cat => (
                      <span key={cat} style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '600' }}>#{cat}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Certificaciones */}
        <section id="certifications">
          <p className="section-title">Mi Aprendizaje</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Certificaciones</h2>
          
          <div className="cert-grid">
            {certifications.map(cert => (
              <div className="cert-card" key={cert.id}>
                <div className="cert-card-pdf-wrapper">
                  <iframe 
                    src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                    title={cert.title}
                    className="cert-pdf-iframe"
                  ></iframe>
                </div>
                <div className="cert-card-content">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>
                <div className="cert-card-actions">
                  <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="btn-secondary" title="Pantalla Completa">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
                    </svg> Ampliar
                  </a>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn-primary cert-btn" title="Ver Credencial">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg> Ver
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Contacto */}
        <section id="contact" className="contact">
          <p className="section-title">¿Hablamos?</p>
          <h2>Desarrollemos tu<br/>próxima idea.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '500px' }}>
            Actualmente estoy abierto a nuevas oportunidades en el área de desarrollo de software y soporte técnico. ¡Contáctame y conectemos!
          </p>
          <div className="contact-cards-container">
            <a href="mailto:ronaldomoran2016@gmail.com" className="contact-action-card">
              <div className="contact-icon-wrapper" style={{color: 'var(--accent)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
              </div>
              <div className="contact-action-info">
                <span>Escríbeme un correo</span>
                <strong>ronaldomoran2016@gmail.com</strong>
              </div>
            </a>

            <a href="https://wa.me/50372885772" target="_blank" rel="noopener noreferrer" className="contact-action-card whatsapp-card">
              <div className="contact-icon-wrapper" style={{color: '#25D366'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </div>
              <div className="contact-action-info">
                <span>Contáctame por WhatsApp</span>
                <strong>+503 7288-5772</strong>
              </div>
            </a>
          </div>
        </section>

      </main>

      {/* Modal de Detalle de Proyecto */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content-large" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            
            <div className="modal-split">
              {/* Lado Izquierdo: Carrusel */}
              <div className="modal-left">
                <Swiper
                  pagination={{ dynamicBullets: true, clickable: true }}
                  zoom={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Zoom, Autoplay]}
                  className="modal-swiper-large"
                >
                  {selectedProject.images.map((imgUrl, index) => (
                    <SwiperSlide key={index}>
                      <div className="swiper-zoom-container">
                        <img src={imgUrl} alt={`${selectedProject.title} - imagen ${index + 1}`} className="modal-img-large" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Lado Derecho: Detalles */}
              <div className="modal-right">
                <div className="modal-header-split">
                  {selectedProject.logo && <img src={selectedProject.logo} alt="Logo" className="modal-logo" />}
                  <h2>{selectedProject.title}</h2>
                </div>

                <div className="modal-body-split">
                  <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {selectedProject.description}
                  </p>
                  
                  <div className="modal-details-grid">
                    <div>
                      <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.4rem' }}>Contexto</strong>
                      <p>{selectedProject.context}</p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.4rem' }}>Enfoque</strong>
                      <p>{selectedProject.focus}</p>
                    </div>
                  </div>

                  <div className="modal-tags">
                    {selectedProject.categories.map(cat => (
                      <span key={cat} className="skill-tag" style={{padding: '0.4rem 1rem', fontSize: '0.85rem'}}>#{cat}</span>
                    ))}
                  </div>

                  {selectedProject.links && selectedProject.links.length > 0 && (
                    <div className="modal-links" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      {selectedProject.links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {link.title.includes('GitHub') ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                          ) : link.title.includes('Documento') || link.title.includes('Presentación') || link.title.includes('Criterios') || link.title.includes('Manual') || link.title.includes('Plan Financiero') ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.14c.05.867.275 1.693.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.646-2.5h-2.14a13.7 13.7 0 0 1-.652 2.5m2.802-3.5a7 7 0 0 0-.646-2.5h-2.146a13.7 13.7 0 0 1 .652 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                            </svg>
                          )}
                          {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;