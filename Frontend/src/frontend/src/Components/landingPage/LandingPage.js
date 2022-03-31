import Logo from '../logo/logo'
import select from './select.svg'
import './landingPage.css'
const LandingPage = () => {
  const clickNav = (e)=>{
    document.querySelectorAll(".nav a li").forEach(el => {
      if (el.classList.contains('active')) el.classList.toggle('active')
    })
    if (!e.target.classList.contains('active')) e.target.classList.toggle('active')
  }
  return (
    <>
    <div className="navbar">
      <Logo/>
      <ul className="nav">
      <a href="#home">
          <li onClick={clickNav} className="active">Home</li>
        </a>
        <a href="#progress">
          <li onClick={clickNav}>Our Progress</li>
        </a>
        <a href="#testominals">
          <li onClick={clickNav}>Testominals</li>
        </a>
        <a href="#ourdev">
          <li onClick={clickNav}>Our Develepors</li>
        </a>
        <a href="#contactus">
          <li onClick={clickNav}>Contact US</li>
        </a>
      </ul>
      <div className="loginorregister">
        <span id="login">
          Login
        </span>
        <span>OR</span>
        <span id="register">
          Register
        </span>
      </div>
    </div>
    <section id="home">
      <div className="text">
        <h1>
          Stop losing your <span>time !!</span><br />
          Just get it <span>#3asr_esor3a</span><br /> 
        </h1>
        <p>Lezem X Lezem is a platform that provide Articles, Posts, Courses only that you care about stop losing time by reading scrolling the trush<br />
        <span>You are a gold member deserve a gold articles.</span></p>
        <button id="join">Join Us</button>
      </div>

      <img src={select} alt="" />
    </section>
    <section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, labore est reprehenderit, ullam enim nulla excepturi praesentium provident aspernatur impedit minus dolor delectus magni voluptas quibusdam, harum eveniet nostrum quia.
    </section>

    </>
  )
}

export default LandingPage
