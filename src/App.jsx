import './App.scss';
import logo from './assets/169218576.jfif';
import tkaPreview from './assets/tka-preview.png';
import githubLogo from './assets/github-mark.svg';
import globe from './assets/globe.svg';
import trees from './assets/trees.jpg';
import { useState, useEffect } from 'react';
import mountain from './assets/mountain.jpg';

function App() {
  const images = [trees, mountain];
  const [heroImage, setHeroImage] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setHeroImage(images[randomIndex]);

    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero').offsetHeight;
      setIsScrolled(window.scrollY > 0.9 * heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <h4 className='header__title'>braedon.</h4>
        <nav className='header-nav'>
          <ul className='header-nav__list'>
            <li className='header-nav__item'>home</li>
            <li className='header-nav__item'>
              <a href="#projects">projects</a>
            </li>
            <li className='header-nav__item'>
              <a href='#me'>me</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className='hero'>
        <h1 className='hero__cta'>creating tools to help and inspire</h1>
        <img src={heroImage} alt="trees hero image" className='hero__image' />
      </section>
      <section id='me' className='me'>
        <h4>me.</h4>
        <img src={logo} alt="" />
        <p>Passionate software engineering professional transitioning from a strong background in exercise physiology and project coordination...</p>
      </section>
      <section id='projects' className='projects'>
        <h4>projects.</h4>
        <p>Hover project for more information</p>
        <article className='projects-card'>
          <p>Total Kinetic Advantage</p>
          <img src={tkaPreview} alt="" className='projects-card__preview' />
          <div className='icon-container'>
            <a href="https://github.com/braedonrossum/total-kinetic-advantage-frontend" target="_blank" rel="noopener noreferrer">
              <img className='icon' src={githubLogo} alt="Github octocat logo" />
            </a>
            <a href="https://totalkineticadvantage.com" target="_blank" rel="noopener noreferrer">
              <img className='icon' src={globe} alt="link to website" />
            </a>
          </div>
        </article>
      </section>
      <footer id='footer'>
        <p>braedon &copy; 2024</p>
        <a href='https://github.com/braedonrossum'>
          <img src={githubLogo} alt="" />
        </a>
      </footer>
    </>
  );
}

export default App;