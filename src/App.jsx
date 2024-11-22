import './App.scss';
import logo from './assets/169218576.jfif';
import githubLogo from './assets/github-mark.svg';
import githubLogoWhite from './assets/github-mark-white.svg';
import linkedinLogo from './assets/linkedin.svg';
import emailLogo from './assets/email.svg';
import emailLogoWhite from './assets/email-white.svg';
import globe from './assets/globe.svg';
import trees from './assets/trees.jpg';
import { useState, useEffect } from 'react';
import mountain from './assets/mountain.jpg';
import headshot from './assets/headshot.jpg'
import lightModeButton from './assets/light-mode.svg'
import darkModeButton from './assets/dark-mode.svg'
import Card from './components/Card/Card';


function App() {
  const images = [trees, mountain];
  const [heroImage, setHeroImage] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setHeroImage(images[randomIndex]);

    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero').offsetHeight;
      setIsScrolled(window.scrollY > 0.01 * heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className='header__left'>
        <a href='#hero'>
        <h4 className='header__title'>braedon.</h4>
        </a>
        <button onClick={toggleDarkMode} className='dark-mode-toggle'>
        <img className='dark-mode-toggle__img'
    src={darkMode ? lightModeButton : darkModeButton} 
    alt={darkMode ? "Switch to light mode" : "Switch to dark mode"} 
  />
        </button>
        </div>
        <nav className='header-nav'>
          <ul className='header-nav__list'>
            <li className='header-nav__item'>
              <a href="#hero">home</a>
            </li>
            <li className='header-nav__item'>
              <a href='#me'>me</a>
            </li>
            <li className='header-nav__item'>
              <a href="#projects">projects</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className='hero-container'>
      <section id='hero' className='hero' style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className='hero__cta'>creating tools to help and inspire</h1>
        <div className='hero__scroll'>
          <h4 className='hero__scroll-title'>Scroll Down</h4>
          <a className='hero__scroll-arrow' href="#me"></a>
        </div>
      </section>
      </div>
      <section id='me' className='me'>
        <h4 className='me__title'>me.	</h4>
        <div className='me__content'>
        <img className='me__content-headshot' src={headshot} alt="" />
        <p className='me__content-bio'>Hi!👋 I am Braedon, a passionate software engineering professional transitioning from a strong background in exercise physiology and project coordination. Driven by a desire to create impactful digital solutions, I aim to develop innovative applications that integrate fitness and health into everyday life. My expertise in exercise science, combined with my personal experience in rehabilitation, equips me with unique insights to design user-centric fitness technology. Leveraging my project coordination skills and a commitment to lifelong learning, I am excited to apply my software engineering abilities to inspire and help a broader audience through accessible, tech-enabled fitness solutions.</p>
        </div>
      </section>
      <section id='skills' className='skills'>
        <h4 className='skills__title'>Skills.</h4>
        <ul className='skills__list'>
          <li className='me__list-item'>HTML</li>
          <li className='me__list-item'>CSS/SASS</li>
          <li className='me__list-item'>Javascript</li>
          <li className='me__list-item'>React</li>
          <li className='me__list-item'>Node.js</li>
          <li className='me__list-item'>Express.js</li>
          <li className='me__list-item'>REST APIs</li>
          <li className='me__list-item'>MySQL</li>
          <li className='me__list-item'>Git</li>
        </ul>
      </section>
      <section id='projects' className='projects'>
        <h4 className='projects__title'>projects.</h4>
        <p>Hover project for more information</p>
        <Card darkMode={darkMode} />
      </section>
      <footer id='footer'className='footer'>
        <p>braedon &copy; 2024</p>
        <a href='https://github.com/braedonrossum'>
          <img className='footer__icon' src={darkMode ? githubLogoWhite : githubLogo}  alt="Link to Github" />
        </a>
        <a href='https://www.linkedin.com/in/braedonrossum/'>
          <img className='footer__icon' src={linkedinLogo} alt="Link to LinkedIn" />
        </a>
        <a href=''>
          <img className='footer__icon' src={darkMode ? emailLogoWhite : emailLogo} alt="Link to Email" />
        </a>
      </footer>
    </div>
  );
}

export default App;