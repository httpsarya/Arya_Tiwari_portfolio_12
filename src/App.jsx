import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CyberBackground from './CyberBackground';
import ScrambleText from './ScrambleText';

const springTransition = {
  type: "spring",
  stiffness: 40,
  damping: 20,
  mass: 1
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: springTransition }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  visible: { 
    opacity: 1, scale: 1, filter: "blur(0px)",
    transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] } 
  }
};

const SkillsSection = () => {
  const techSkills = ["Penetration Testing", "Cybersecurity", "Ethical Hacking", "Networking", "AI/ML"];
  const tools = ["Nmap", "Burp Suite", "Metasploit Framework", "OWASP ZAP/Nessus", "SQL Map/Hydra"];
  const programming = ["C/C++", "Java (Basic)", "Python", "Shell Scripting"];
  const professional = ["Public Speaking", "Leadership", "Team Management", "Marketing"];

  return (
    <div style={{ marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontStyle: 'italic', marginBottom: 'var(--spacing-sm)' }}>Skills &amp; Capabilities.</h2>
        <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-sand)' }}>Technical &amp; Professional Arsenal</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        
        {/* Technical Skills Card */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
          className="glass-panel"
          style={{
            padding: '2rem', borderRadius: '16px', borderTop: '2px solid rgba(0, 240, 255, 0.4)',
            backgroundColor: 'rgba(19, 19, 20, 0.6)', backdropFilter: 'blur(12px)',
            position: 'relative', overflow: 'hidden'
          }}
        >
          <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)', color: 'var(--text-champagne)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <span style={{ width: '8px', height: '8px', backgroundColor: '#00F0FF', borderRadius: '50%', boxShadow: '0 0 10px #00F0FF' }}></span>
             Technical Skills
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {techSkills.map((skill, i) => (
              <span key={i} style={{ padding: '8px 16px', backgroundColor: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '4px', fontSize: '0.85rem', color: 'var(--text-champagne)' }}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools Card */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} transition={{ delay: 0.1 }}
          className="glass-panel"
          style={{
            padding: '2rem', borderRadius: '16px', borderTop: '2px solid rgba(212, 175, 55, 0.4)',
            backgroundColor: 'rgba(19, 19, 20, 0.6)', backdropFilter: 'blur(12px)',
            position: 'relative', overflow: 'hidden'
          }}
        >
          <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)', color: 'var(--text-champagne)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <span style={{ width: '8px', height: '8px', backgroundColor: '#D4AF37', borderRadius: '50%', boxShadow: '0 0 10px #D4AF37' }}></span>
             Tools &amp; Frameworks
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {tools.map((tool, i) => (
              <span key={i} style={{ padding: '8px 16px', backgroundColor: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '4px', fontSize: '0.85rem', color: 'var(--text-champagne)' }}>
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Programming Card */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} transition={{ delay: 0.2 }}
          style={{ padding: '1rem' }}
        >
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Programming Languages</h4>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {programming.map((prog, i) => (
              <li key={i} style={{ color: 'var(--text-champagne)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--accent-sand)' }}>//</span> {prog}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Professional Skills Card */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} transition={{ delay: 0.3 }}
          style={{ padding: '1rem' }}
        >
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Professional Attributes</h4>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {professional.map((prof, i) => (
              <li key={i} style={{ color: 'var(--text-champagne)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--accent-sand)' }}>&rarr;</span> {prof}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yHeroImg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      // Adjust scrollPosition slightly down from the top of the viewport (under the header)
      const scrollPosition = window.scrollY + 250; 

      let currentActive = "";

      sections.forEach((section) => {
        // Get absolute position relative to the document
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentActive = section.getAttribute("id");
        }
      });

      // Absolute fallback for the very top of the page (top 50% of screen)
      if (window.scrollY < window.innerHeight * 0.5) {
        currentActive = "home";
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial check on mount
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const certs = [
    { title: "Certified Ethical Hacker (CEH)", thumb: "ceh_thumbnail.png", pdf: "CEH_by_ec_council.pdf", issuer: "EC-Council" },
    { title: "Intro to Cybersecurity", thumb: "intro_cyber_thumbnail.png", pdf: "introduction to Cybersecurity and cyebrtools.pdf", issuer: "Cyber Tools" },
    { title: "AI Workflow Data Analysis", thumb: "ai_workflow_thumbnail.png", pdf: "AI_Workflow_Data_Analysis.pdf", issuer: "Specialization" },
    { title: "Explore ML Using Python", thumb: "explore_ml_thumbnail.png", pdf: "Explore_ML_using_python.pdf", issuer: "Machine Learning" },
    { title: "Data Structures & Algorithms", thumb: "dsa_thumbnail.png", pdf: "Data Structures and Algorithms.pdf", issuer: "Core CS" },
    { title: "OOP in C++", thumb: "oops_cpp_thumbnail.png", pdf: "Object-Oriented_Data_Structures_in_Cpp.pdf", issuer: "Core CS" }
  ];

  return (
    <div style={{ backgroundColor: 'transparent' }}>
      <CyberBackground />
      <div className="atmosphere"></div>
      
      {/* Full-width Navigation Bar */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="nav-header"
        style={{ 
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(6, 9, 7, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(242, 235, 217, 0.05)',
          width: '100%',
          left: 0
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--spacing-md) var(--spacing-lg)' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', letterSpacing: '0.05em', fontStyle: 'italic' }}>
            A. Tiwari
          </div>
          <nav>
            <ul className="nav-list" style={{ listStyle: 'none', display: 'flex', gap: 'var(--spacing-lg)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0, padding: 0 }}>
              <li><a href="#home" className={`hover-underline ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
              <li><a href="#about" className={`hover-underline ${activeSection === 'about' ? 'active' : ''}`}>Profile</a></li>
              <li><a href="#certs" className={`hover-underline ${activeSection === 'certs' ? 'active' : ''}`}>Certifications</a></li>
              <li><a href="#projects" className={`hover-underline ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
              <li><a href="#media" className={`hover-underline ${activeSection === 'media' ? 'active' : ''}`}>Media</a></li>
              <li><a href="#contact" className={`hover-underline ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </motion.header>

      <div className="container">
        
        {/* Hero Section */}
        <section id="home" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', paddingTop: 'var(--spacing-xl)' }}>
          <div className="hero-grid">
            
            {/* Left: Typography & Layout - Glassmorphism Cyber-Brutalist */}
            <motion.div style={{ y: yHeroText }} variants={staggerContainer} initial="hidden" animate="visible" className="glass-panel" style={{ padding: '3rem', borderRadius: '24px' }}>
              <motion.p variants={fadeUp} style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)' }}>
                System Access Granted
              </motion.p>
              
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.5rem', color: 'var(--text-champagne)', textTransform: 'uppercase' }}>
                <ScrambleText text="ARYA TIWARI" delay={10} />
              </h1>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontStyle: 'italic', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                <ScrambleText text="Architecting Resilience." delay={40} />
              </h2>
              
              <motion.div variants={fadeUp} style={{ color: 'var(--text-champagne)', opacity: 0.8, fontFamily: 'var(--font-sans)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '500px' }}>
                Cyber Security Engineer &amp; Professional Video Editor. Bridging the gap between deep technical threat analysis and high-end cinematic storytelling.
              </motion.div>

              <motion.div variants={fadeUp} className="hero-buttons" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a href={`${import.meta.env.BASE_URL}Assets/Resume/Arya_Tiwari_Resume.pdf`} target="_blank" rel="noreferrer" className="glass-btn" style={{ 
                  fontFamily: 'var(--font-sans)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em',
                  padding: '12px 24px', borderRadius: '8px', textDecoration: 'none'
                }}>
                  Extract Resume
                </a>
                <a href="#media" style={{ 
                  fontFamily: 'var(--font-sans)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em',
                  color: 'var(--text-champagne)', opacity: 0.7, padding: '12px 24px', textDecoration: 'none'
                }}>
                  Visual Media
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Soft glowing animated picture with Zoom and Glassmorphism */}
            <motion.div style={{ y: yHeroImg, display: 'flex', justifyContent: 'center' }} initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div 
                variants={imageReveal} 
                className="img-container glass-panel" 
                style={{ width: '260px', height: '340px', borderRadius: '24px', overflow: 'hidden', padding: '10px' }}
                animate={{
                  boxShadow: ['0px 8px 32px 0px rgba(0,0,0,0.5)', '0px 8px 50px 10px rgba(212,175,55,0.15)', '0px 8px 32px 0px rgba(0,0,0,0.5)'],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.img 
                  src={`${import.meta.env.BASE_URL}Assets/MyPic/MyPic.jpeg`} 
                  alt="Arya Tiwari" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', filter: 'contrast(1.1) sepia(0.1) saturate(0.8)' }} 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Study Information & All About Me */}
        <section id="about">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontStyle: 'italic' }}>About Me.</h2>
            <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-sand)', marginTop: 'var(--spacing-sm)' }}>Background &amp; Expertise</p>
          </motion.div>

          <div className="about-grid">
            {/* Left Column: Bio & List */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-champagne)', opacity: 0.9 }}>
                I craft impactful visual stories with a strong foundation in Cyber Security and modern production tools. I’ve worked as a personal reel editor for Aryan Preet (@aryanpreet) and freelanced for 12+ creators across platforms. I love building clean, engaging visuals with smooth pacing and crisp color.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <div className="glass-panel tool-hover-card" style={{ padding: '1.2rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                  <span style={{ color: 'var(--text-champagne)', fontWeight: 500, letterSpacing: '0.05em' }}>Cyber Security Engineer</span>
                </div>
                <div className="glass-panel tool-hover-card" style={{ padding: '1.2rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                  <span style={{ color: 'var(--text-champagne)', fontWeight: 500, letterSpacing: '0.05em' }}>Personal Reel Editor for Aryan Preet</span>
                </div>
                <div className="glass-panel tool-hover-card" style={{ padding: '1.2rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                  <span style={{ color: 'var(--text-champagne)', fontWeight: 500, letterSpacing: '0.05em' }}>Freelance Video Editor for 12+ Creators</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column: Education & Focus Cards */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', height: '100%' }}>
              <div className="glass-panel tool-hover-card" style={{ padding: '2.5rem 2rem', borderRadius: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-champagne)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Education
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  B.Tech in Computer Science &amp; Engineering (Cyber Security), Bennett University — Third Year.
                </p>
              </div>
              
              <div className="glass-panel tool-hover-card" style={{ padding: '2.5rem 2rem', borderRadius: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-champagne)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Focus
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Mastering Cyber Security concepts and practices while delivering professional end-to-end photo and video production content.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="divider"></div>

          <SkillsSection />
        </section>

        <div className="divider"></div>

        {/* Certifications */}
        <section id="certs">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '4rem', lineHeight: 1, fontStyle: 'italic', marginBottom: 'var(--spacing-sm)' }}>Certifications.</h2>
            <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-sand)' }}>Verified Credentials</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
            {certs.map((cert, idx) => (
              <motion.a 
                href={`${import.meta.env.BASE_URL}Assets/certificates/${cert.pdf}`} 
                target="_blank" 
                rel="noreferrer"
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
                style={{ 
                  display: 'block', 
                  padding: 'var(--spacing-lg)', 
                  backgroundColor: 'var(--bg-panel)',
                  borderRadius: '16px',
                  border: '1px solid rgba(242, 235, 217, 0.05)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                className="cert-card"
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--accent-gold)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(242, 235, 217, 0.05)'; }}
              >
                <div style={{ width: '100%', height: '200px', backgroundColor: 'var(--bg-forest)', borderRadius: '8px', marginBottom: 'var(--spacing-md)', overflow: 'hidden', position: 'relative' }}>
                  <img src={`${import.meta.env.BASE_URL}Assets/certificates/${cert.thumb}`} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)', color: 'var(--text-champagne)', marginBottom: '0.5rem' }}>{cert.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cert.issuer}</p>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>View Credential &rarr;</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        {/* Engineering Projects */}
        <section id="projects">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '4rem', lineHeight: 1, fontStyle: 'italic', marginBottom: 'var(--spacing-sm)' }}>Engineering.</h2>
            <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-sand)' }}>AI/ML &amp; Cybersecurity</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            {[
              { title: "VerifEye-Browser Extension", type: "CYBERSECURITY", desc: "A Chrome extension that enhances user security by identifying online threats and protecting against them by injecting a script into the webpage.", link: "#" },
              { title: "Sakhasampark", type: "COMMUNICATIONS", desc: "A serverless, decentralized chat platform leveraging WebRTC for secure, encrypted communication, ensuring complete privacy and confidentiality.", link: "#" },
              { title: "WhiteCrow", type: "PENETRATION TESTING", desc: "A comprehensive web vulnerability scanner with a sleek desktop GUI, designed for professional security testing and penetration testing.", link: "#" }
            ].map((proj, idx) => (
              <motion.a 
                href={proj.link} 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
                style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: 'var(--spacing-lg)', border: '1px solid rgba(242, 235, 217, 0.1)', borderRadius: '12px'
                }}
                className="glass-panel project-card"
              >
                <div className="project-card-inner" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--accent-gold)' }}>0{idx + 1}</span>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', textTransform: 'none', letterSpacing: '0', marginBottom: '0.5rem' }}>{proj.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-champagne)', opacity: 0.8, marginBottom: '0.5rem', maxWidth: '600px' }}>{proj.desc}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{proj.type}</p>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-champagne)', padding: '8px 16px', border: '1px solid rgba(242, 235, 217, 0.2)', borderRadius: '4px' }}>View on GitHub &rarr;</span>
              </motion.a>
            ))}
          </div>
        </section>

        <div className="divider"></div>
        
        {/* Visual Media Archive */}
        <section id="media">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', lineHeight: 1, fontStyle: 'italic', marginBottom: 'var(--spacing-sm)' }}>Visual Media Archive.</h2>
            <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-sand)' }}>Video Editing &amp; Production</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {[
              { title: "Dynamic Short-Form Edit", link: "https://www.instagram.com/reel/DN3MwT-Qk8i/?igsh=MTQxb2Z2b2dhNGdidA==" },
              { title: "Rhythmic Transitions", link: "https://www.instagram.com/reel/DNVJB7sxIr5/?igsh=cjB5bm52dGJ5YTQx" },
              { title: "Smooth Motion Cuts", link: "https://www.instagram.com/reel/DGlFT0rTAiB/?igsh=MzlpZGZqYTdkYmk2" },
              { title: "High-Energy Cuts", link: "https://www.instagram.com/reel/DNVZObhsx67/?igsh=NWNtMjhvcHg3MG1y" },
              { title: "Cinematic Reel", link: "https://www.instagram.com/reel/DCT8WdJSqjl/?igsh=ZmlkeTlhMzg3Ymk2" }
            ].map((proj, idx) => (
              <motion.a 
                href={proj.link} target="_blank" rel="noreferrer" key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
                style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: 'var(--spacing-sm) 0', borderBottom: '1px solid rgba(242, 235, 217, 0.05)'
                }}
                className="hover-underline media-item"
              >
                <h3 style={{ fontSize: '1.2rem', textTransform: 'none', letterSpacing: '0', color: 'var(--text-champagne)' }}>{proj.title}</h3>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Watch Film &rarr;</span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section id="contact" style={{ padding: 'var(--spacing-xxl) 0' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginBottom: 'var(--spacing-xl)' }}>
              Ready to <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Innovate?</span>
            </h2>
            
            <div className="footer-flex" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-xl)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.15em', flexWrap: 'wrap' }}>
              <a href="mailto:Arya2tiwari@gmail.com" className="hover-underline">Email</a>
              <a href="https://www.linkedin.com/in/arya-tiwari-01ba84292?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover-underline" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/cap.videoguru?igsh=bjlwNXQwMTZzamY5" className="hover-underline" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://wa.me/919999606103" className="hover-underline" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href={`${import.meta.env.BASE_URL}Assets/Resume/Arya_Tiwari_Resume.pdf`} className="hover-underline" target="_blank" rel="noreferrer">Resumé</a>
            </div>
            
            <p style={{ marginTop: 'var(--spacing-xxl)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              © {new Date().getFullYear()} Arya Tiwari. All Rights Reserved.
            </p>
          </motion.div>
        </section>

      </div>
    </div>
  );
}

export default App;
