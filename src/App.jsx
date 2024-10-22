import './App.scss';
import logo from './assets/169218576.jfif';
import tkaPreview from './assets/tka-preview.png';
import githubLogo from './assets/github-mark.svg'

function App() {

  return (
    <>
      <header className='header'>
        {/* <img className='header-logo' src={logo} alt="" /> */}
        <h4 className='header__title'>braedon.</h4>
        <nav className='header-nav'>
        <ul className='header-nav__list'>
          <li className='header-nav__item'>home</li>
          <li className='header-nav__item'>projects</li>
          <li className='header-nav__item'>contact</li>
        </ul>
        </nav>
      </header>
      <section className='hero'>
        <img src="" alt="" />
        <h4>creating tools to help and inspire</h4>
      </section>
      <section className='me'>
        <h4>me.</h4>
      </section>
      <section className='projects'>
        <h4>projects.</h4>
        <p>Hover project for more information</p>
        <article className='projects-card'>
          <p>Total Kinetic Advantage</p>
          <img src={tkaPreview} alt="" className='projects-card__preview' />
          <div>
            <img className='icon' src={githubLogo} alt="" />
          </div>
        </article>
      </section>
    </>
  )
}

export default App
