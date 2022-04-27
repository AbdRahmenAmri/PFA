import Logo from '../logo/logo'
import Footer from '../footer/footer'
import select from './select.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './landingPage.css'



const LandingPage = () => {
  Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));
  class Testominal {
    constructor(){
      this.testominals = [
        {
          id : 1,
          data : {
            name : 'User One',
            pic : '/assets/user-pic/user1.jpeg',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore inventore voluptas illo corporis nisi rerum explicabo, blanditiis tempora totam culpa dolore eos natus! Libero error laboriosam commodi odio saepe fugiat?'
          }
        },
        {
          id : 2,
          data : {
            name : 'User Two',
            pic : '/assets/user-pic/user2.jpg',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore inventore voluptas illo corporis nisi rerum explicabo, blanditiis tempora totam culpa dolore eos natus! Libero error laboriosam commodi odio saepe fugiat?'
          }
        },
        {
          id : 3,
          data : {
            name : 'User Three',
            pic : '/assets/user-pic/user3.jpeg',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore inventore voluptas illo corporis nisi rerum explicabo, blanditiis tempora totam culpa dolore eos natus! Libero error laboriosam commodi odio saepe fugiat?'
          }
        },
        {
          id : 4,
          data : {
            name : 'User Four',
            pic : '/assets/user-pic/user4.webp',
            paragraph : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore inventore voluptas illo corporis nisi rerum explicabo, blanditiis tempora totam culpa dolore eos natus! Libero error laboriosam commodi odio saepe fugiat?'
          }
        }
      ];
    }
    ListPic = ()=>{
      this.testominals.map(user =>{
        if(this.testominals[0] === user){
          return <div className="box active" key={user.id}><img src={user.data.pic} alt="" /></div>
        }else return <div className="box" key={user.id}><img src={user.data.pic} alt="" /></div>
      })
    }
    get name(){
      return this.filterById().data.name;
    }
    get paragraph(){
      return this.filterById().data.paragraph;

    }
    get key(){
      console.log(document.querySelector('.box.active'))
      return parseInt(document.querySelector('.box.active').key);
    }

    filterById(){
      for(let user of this.testominals){
        if(user.id === this.key)
        return user;
      }
      return null;
    }
  }
  const instanceTestominals = new Testominal();

  const arrow = (e) => {
    let disable = false;
    let x = ((e.target.parentNode).parentNode).querySelector('.users');
    let transX = parseInt(window.getComputedStyle(x).transform.split(',')[4]) || 0;
    let siblings = [e.target.previousSibling , e.target.nextSibling];
    for(let sibling of siblings){
    if (sibling && sibling.classList.contains('disable')) sibling.classList.toggle('disable');
    }
    for(let el of x.querySelectorAll('.box')) {
      if (el.classList.contains('active')) {
        if (e.target.classList.contains('arrowleft') && !e.target.classList.contains('disable')) {
          if (el.previousSibling) {
            el.classList.toggle('active');
            el.previousSibling.classList.toggle('active');
            if ((el.previousSibling).previousSibling === null) {
              if (!(e.target.classList.contains('disable'))){
                disable = !disable;
              }
            }
          }
        }
        else if (e.target.classList.contains('arrowright') && !e.target.classList.contains('disable')) {
          if (el.nextSibling) {
            el.classList.toggle('active');
            el.nextSibling.classList.toggle('active');
            if ((el.nextSibling).nextSibling === null) {
              if (!(e.target.classList.contains('disable'))){
                disable = !disable;
              }
            }
          }
        }
        break;
      }
    }
    if (!e.target.classList.contains('disable')) {
      if(e.target.classList.contains('arrowleft')){
        transX =  parseInt(transX + 170);
      }else if(e.target.classList.contains('arrowright')){
        transX = parseInt(transX - 170);
      }
      if (disable) e.target.classList.toggle('disable')
      x.style.transform = "translateX(" + transX + "px)";
      let name = document.querySelector('.main #name')
      let paragraph = document.querySelector('.main #paragraph')
      name.innerHTML = instanceTestominals.name;
      paragraph.innerHTML = instanceTestominals.paragraph;
    }


  }
  const isOnScreen = (el) => {
    return (el.getBoundingClientRect().y < window.scrollY - el.getBoundingClientRect().height / 2)
  }
  const clickNav = (e) => {
    document.querySelectorAll(".nav a li").forEach(el => {
      if (el.classList.contains('active')) el.classList.toggle('active')
    })
    if (!e.target.classList.contains('active')) e.target.classList.toggle('active')
  }



  document.addEventListener('scroll', () => {
    document.querySelectorAll('.counter').forEach(el => {
      if (isOnScreen(el) && !el.classList.contains('done')) {
        el.classList.add('done');
        let h = el.querySelector('.h');
        let t = el.querySelector('.t');
        let o = el.querySelector('.o');
        let c = el.querySelector('.c');
        let numbers = [h, t, o];
        let data = el.getAttribute('data-number');
        let timer = setInterval(() => {
          numbers.forEach(x => {
            x.innerHTML = Math.floor(Math.random() * 10);
          })
        }, 50)
        setTimeout(() => {
          clearInterval(timer);
          for (let i = 0; i < numbers.length; i++) {
            numbers[i].innerHTML = data[i];
          }
          c.innerHTML = el.getAttribute('data-unit');
        }, 5000);
      }
    })
  })


  return (
    <>
      <div className="navbar">
        <Logo />
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
      <section id="progress">
        <div className="container">
          <div className="box" id="articles">
            <h1>articles</h1>
            <div className="content">
              <span className="counter" id="articleCounter" data-number="950" data-unit="K">
                <span className="h"></span>
                <span className="t"></span>
                <span className="o"></span>
                <span className="c"></span>
              </span>
              <p>this is all today articles</p>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
          <div className="box" id="account">
            <h1>accounts</h1>
            <div className="content">
              <span className="counter" id="userCounter" data-number="180" data-unit="M" >
                <span className="h"></span>
                <span className="t"></span>
                <span className="o"></span>
                <span className="c"></span>
              </span>
              <p>this is all today accounts</p>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </section>
      <section id="testominals">
        <div className="container">
          <FontAwesomeIcon icon={faQuoteLeft} className="big" />
          <aside>
            <h1>what people are saying </h1>
            <p>only members can submit their opinion about us. <br />what are waiting for join us</p>
          </aside>
          <div className="content">
            <div className="users">
              {
                instanceTestominals.testominals.map(user =>{
                  if(instanceTestominals.testominals[0] === user){
                    return <div className="box active" key={user.id} data-key={user.id}><img src={user.data.pic} alt="" /></div>
                  }else return <div className="box" key={user.id}  data-key={user.id}><img src={user.data.pic} alt="" /></div>
                })
              }

            </div>
            <q className="main">
              <h1 id="name">Your Name</h1>
              <FontAwesomeIcon icon={faQuoteLeft} className="topleft" />
              <span id="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore inventore voluptas illo corporis nisi rerum explicabo, blanditiis tempora totam culpa dolore eos natus! Libero error laboriosam commodi odio saepe fugiat?</span>
              <FontAwesomeIcon icon={faQuoteLeft} className="bottomright" />
            </q>
            <div className="arrows">
              <FontAwesomeIcon icon={faArrowLeft} className="arrowleft disable" onClick={arrow} />
              <FontAwesomeIcon icon={faArrowRight} className="arrowright" onClick={arrow} />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default LandingPage
