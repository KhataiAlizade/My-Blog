import React, { useEffect, useState } from 'react'
import img1 from './img/360_F_483177006_EYf1HAEoA6uGoTVwPMSdstDl8LIRccBp-removebg-preview2.png'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as MenuIcon } from '@fortawesome/free-solid-svg-icons';
import { faXmark as XIcon } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 as htmlicon } from '@fortawesome/free-brands-svg-icons';
import { faGears as gearicon } from '@fortawesome/free-solid-svg-icons';
import { faCode as codeicon } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as mailicon } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as linkedinicon } from '@fortawesome/free-brands-svg-icons';
import { faGithub as githubicon } from '@fortawesome/free-brands-svg-icons';
import { faInstagram as instaicon } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp as whpicon } from '@fortawesome/free-brands-svg-icons';
import img2 from './img/png1.png'
import img3 from './img/Screenshot 2023-07-24 114849.png'
import img4 from './img/Screenshot 2023-07-24 115049.png'
import img5 from './img/Screenshot 2024-10-09 213353.png'
import img6 from './img/Screenshot 2024-10-09 212052.png'


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const OpenedButton = () => {
    setMenuOpen(!menuOpen)
  }
  const ClosedButton = () => {
    setMenuOpen(false)
  }
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation1, setanimation1] = useState(false);
  const [animation2, setanimation2] = useState(false);
  const [bigAnimation, setbigAnimation] = useState(false);
  const [bigAnimation2, setbigAnimation2] = useState(false);
  const [bigAnimation3, setbigAnimation3] = useState(false);
  const [skillsanimation1, setskillsanimation1] = useState(false);
  const [skillsanimation2, setskillsanimation2] = useState(false);
  const [skillsanimation3, setskillsanimation3] = useState(false);
  const [projectanimation1, setprojectanimation1] = useState(false);
  const [projectanimation2, setprojectanimation2] = useState(false);
  const [contactanimation1, setcontactanimation1] = useState(false);
  const [contactanimation2, setcontactanimation2] = useState(false);
  const [contactanimation3, setcontactanimation3] = useState(false);
  const [contactanimation4, setcontactanimation4] = useState(false);
  const [contactanimation5, setcontactanimation5] = useState(false);
  const [bigAnimation4, setbigAnimation4] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);





  const showNavigation = () => {
    const nav1 = document.getElementById('AboutMeSection');
    const nav2 = document.getElementById('MySkills_item1');
    const nav3 = document.getElementById('MySkills_item2');
    const nav4 = document.getElementById('MySkills_item3');
    const nav5 = document.getElementById('MySkills_Container1');
    const nav6 = document.getElementById('Project_Container');
    const nav7 = document.getElementById('MyProjects_divitem');
    const nav8 = document.getElementById('MyProjects_divitem1');
    const nav9 = document.getElementById('first_contact1');
    const nav10 = document.getElementById('first_contact2');
    const nav11 = document.getElementById('first_contact3');
    const nav12 = document.getElementById('first_contact4');
    const nav13 = document.getElementById('first_contact5');
    const nav14 = document.getElementById('Contact_title');


    if (nav1) {
      nav1.classList.remove('hidden');
    }
    if (nav2) {
      nav2.classList.remove('hidden');
    }
    if (nav3) {
      nav3.classList.remove('hidden');
    }
    if (nav4) {
      nav4.classList.remove('hidden');
    }
    if (nav5) {
      nav5.classList.remove('hidden');
    }
    if (nav6) {
      nav6.classList.remove('hidden');
    }
    if (nav7) {
      nav7.classList.remove('hidden');
    }
    if (nav8) {
      nav8.classList.remove('hidden');
    }
    if (nav9) {
      nav9.classList.remove('hidden');
    }
    if (nav10) {
      nav10.classList.remove('hidden');
    }
    if (nav11) {
      nav11.classList.remove('hidden');
    }
    if (nav12) {
      nav12.classList.remove('hidden');
    }
    if (nav13) {
      nav13.classList.remove('hidden');
    }
    if (nav14) {
      nav14.classList.remove('hidden');
    }
  };
  const handleIntersection = (entries) => {

    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;

      if (isIntersecting && !animationTriggered) {
        if (target.id === 'AboutMeSection') {
          setanimation1(true);
          setanimation2(true);
          setbigAnimation(true);
        }
        else if (target.id === 'MySkills_Container1') {
          setbigAnimation2(true);
        }
        else if (target.id === 'MySkills_item1') {
          setskillsanimation1(true);
        }
        else if (target.id === 'MySkills_item2') {
          setskillsanimation2(true);
        }
        else if (target.id === 'MySkills_item3') {
          setskillsanimation3(true);
        }
        else if (target.id === 'Project_Container') {
          setbigAnimation3(true);
        }
        else if (target.id === 'MyProjects_divitem1') {
          setprojectanimation1(true);
        }
        else if (target.id === 'MyProjects_divitem') {
          setprojectanimation2(true);
        }
        else if (target.id === 'first_contact1') {
          setcontactanimation1(true);
        }
        else if (target.id === 'first_contact2') {
          setcontactanimation2(true);
        }
        else if (target.id === 'first_contact3') {
          setcontactanimation3(true);
        }
        else if (target.id === 'first_contact4') {
          setcontactanimation4(true);
        }
        else if (target.id === 'first_contact5') {
          setcontactanimation5(true);
        }
        else if (target.id === 'Contact_title') {
          setbigAnimation4(true);
        }
        setAnimationTriggered(true);
        showNavigation();
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver(handleIntersection, options);

    const imganimation1 = document.getElementById('AboutMeSection');
    const Pelementanimation1 = document.getElementById('AboutMeSection');
    const bigAnimations = document.getElementById('AboutMeSection');
    const skillsAnimation1 = document.getElementById('MySkills_item1');
    const skillsAnimation2 = document.getElementById('MySkills_item2');
    const skillsAnimation3 = document.getElementById('MySkills_item3');
    const bigAnimations2 = document.getElementById('MySkills_Container1');
    const bigAnimation3 = document.getElementById('Project_Container');
    const projectanimation1 = document.getElementById('MyProjects_divitem1');
    const projectanimation2 = document.getElementById('MyProjects_divitem');
    const contactanimation1 = document.getElementById('first_contact1');
    const contactanimation2 = document.getElementById('first_contact2');
    const contactanimation3 = document.getElementById('first_contact3');
    const contactanimation4 = document.getElementById('first_contact4');
    const contactanimation5 = document.getElementById('first_contact5');
    const bigAnimation4 = document.getElementById('Contact_title');

    if (imganimation1) observer.observe(imganimation1);
    if (Pelementanimation1) observer.observe(Pelementanimation1);
    if (bigAnimations) observer.observe(bigAnimations);
    if (skillsAnimation1) observer.observe(skillsAnimation1);
    if (skillsAnimation2) observer.observe(skillsAnimation2);
    if (skillsAnimation3) observer.observe(skillsAnimation3);
    if (bigAnimations2) observer.observe(bigAnimations2);
    if (bigAnimation3) observer.observe(bigAnimation3);
    if (projectanimation1) observer.observe(projectanimation1);
    if (projectanimation2) observer.observe(projectanimation2);
    if (contactanimation1) observer.observe(contactanimation1);
    if (contactanimation2) observer.observe(contactanimation2);
    if (contactanimation3) observer.observe(contactanimation3);
    if (contactanimation4) observer.observe(contactanimation4);
    if (contactanimation5) observer.observe(contactanimation5);
    if (bigAnimation4) observer.observe(bigAnimation4);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);


  const [fix, setFix] = useState(false)

  const setFixed = () => {
    if (window.scrollY >= 480) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  const handleScroll = () => {
    const windowheight = window.innerHeight;

    const active1 = document.getElementById('header');
    const active1Position = active1.getBoundingClientRect();
    const active1Center = active1Position.top + active1Position.height / 2;
    if (active1Center < (windowheight * 3) / 4 && active1Center > windowheight / 10) {
      setActive1(true);
    } else {
      setActive1(false);
    }

    const active2 = document.getElementById('AboutMeSection');
    const active2Position = active2.getBoundingClientRect();
    const active2Center = active2Position.top + active2Position.height / 2;
    if (active2Center < (windowheight * 3) / 4 && active2Center > windowheight / 10) {
      setActive2(true);
    } else {
      setActive2(false);
    }

    const active3 = document.getElementById('MySkills_Container1');
    const active3Position = active3.getBoundingClientRect();
    const active3Center = active3Position.top + active3Position.height / 2;
    if (active3Center < (windowheight * 3) / 4 && active3Center > windowheight / 10) {
      setActive3(true);
    } else {
      setActive3(false);
    }
    const active4 = document.getElementById('Project_Container');
    const active4Position = active4.getBoundingClientRect();
    const active4Center = active4Position.top + active4Position.height / 2;
    if (active4Center < (windowheight * 3) / 4 && active4Center > windowheight / 10) {
      setActive4(true);
    } else {
      setActive4(false);
    }
    const active5 = document.getElementById('Contact_title');
    const active5Position = active5.getBoundingClientRect();
    const active5Center = active5Position.top + active5Position.height / 2;
    if (active5Center < (windowheight * 3) / 4 && active5Center > windowheight / 10) {
      setActive5(true);
    } else {
      setActive5(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', setFixed);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', setFixed);
    };
  }, []);


  return (
    <div>
      <header id='header'>
        <div className={fix ? 'fixed' : "hdr_mainitem"}>
          <div className='hdr_firstitem'>
            <img className={fix ? 'fixedimg' : 'hdrimg'} src={img1} alt='logo' />
            <p className={fix ? 'fixedP' : 'hdrP'}>Web Developer</p>
          </div>
          <FontAwesomeIcon onClick={OpenedButton} className='menuicon' icon={MenuIcon} />
          <nav className={menuOpen ? 'hdr_menuitem' : 'hdr_seconditem'} >
            <FontAwesomeIcon onClick={ClosedButton} className='Xicon' icon={XIcon} />
            <ul>
              <li className={active1 ? 'active' : ''}><a href='#header'><span>Home</span></a></li>
              <li className={active2 ? 'active' : ''}><a href='#AboutMeSection'><span>About</span></a></li>
              <li className={active3 ? 'active' : ''}><a href='#MySkills_Container1'><span>My Skills</span></a></li>
              <li className={active4 ? 'active' : ''}><a href='#Project_Container'><span>My Projects</span></a></li>
              <li className={active5 ? 'active' : ''}><a href='#Contact_title'><span>Contact</span></a></li>

            </ul>
          </nav>
        </div>
        <div className='hdr_thirditem'>
          <h1 className='name_item1'>Hi, </h1>
          <h1 className='name_item2'> I'm <span style={{ color: "#FFD700" }}>K</span>hatai,</h1>
          <h1 className='name_item3'> Full-Stack Developer</h1>
          <p> {"<p> "}  Software Developer / Web Developer  {"</p> "} </p>
          <a href='#Contact_title'>
            <button> Contact Me! </button>
          </a>
        </div>
      </header>
      <main>
        <div id='AboutMeSection' className='AboutMeSection'>
          <h1 className={bigAnimation ? "bigAnimation" : "hidden"}>About Me</h1>
          <div className='main_container'>
            <nav className='main_navbarsecond'>
            <p id='Psection' className={animation2 ? "animation2" : "hidden"}>
  I'm a <label>Full-Stack Developer</label> with a strong focus on 
  <label> Front-End engineering</label>. I specialize in building fast, scalable, 
  and user-friendly web applications using 
  <label> React, TypeScript, and Node.js</label>. My expertise spans crafting responsive 
  interfaces with <label>HTML, CSS, and JavaScript</label> as well as developing and 
  integrating robust <label>RESTful APIs</label> and <label>SQL databases</label> on the back end. 
  I'm passionate about clean architecture, reusable components, and maintainable code 
  that delivers real performance and great user experiences. 
  <strong>I enjoy collaborating with teams to turn ideas into production-ready solutions 
  and continuously explore new technologies to enhance design and efficiency.</strong>
</p>


            </nav>
          </div>
        </div>
        <section id='MySkills_Container1' className='MySkills_Container'>
  <h1 className={bigAnimation2 ? 'bigAnimation' : ''}>My Skills</h1>
  <div className='MySkills_item'>    
    <nav id='MySkills_item1' className={skillsanimation1 ? 'skills_item1' : 'hidden'}>
      <div className='frontendskills'>
        <FontAwesomeIcon className='htmlicon' icon={htmlicon} />
        <h2>Front-End</h2>
      </div>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SCSS</li>
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>Responsive Design</li>
      </ul>
    </nav>

    <nav id='MySkills_item2' className={skillsanimation2 ? 'skills_item2' : 'hidden'}>
      <div className='frontendskills'>
        <FontAwesomeIcon className='gearicon' icon={gearicon} />
        <h2>Frameworks & Libraries</h2>
      </div>
      <ul>
        <li>React.js</li>
        <li>Redux</li>
        <li>Material UI</li>
        <li>Bootstrap</li>
        <li>GraphQL</li>
        <li>Docker</li>
      </ul>
    </nav>

    <nav id='MySkills_item3' className={skillsanimation3 ? 'skills_item3' : 'hidden'}>
      <div className='frontendskills'>
        <FontAwesomeIcon className='codeicon' icon={codeicon} />
        <h2>Backend & Tools</h2>
      </div>
      <ul>
        <li>Node.js</li>
        <li>RESTful APIs</li>
        <li>SQL / MySQL</li>
        <li>MongoDB</li>
        <li>Git & GitHub</li>
        <li>API Integration</li>
      </ul>
    </nav>
  </div>
</section>

        <section id='Project_Container' className='Project_Container'>
          <h1 className={bigAnimation3 ? 'bigAnimation' : ''}>My Projects</h1>
          <div className='MyProjects_blog'>
            <nav id='MyProjects_divitem1' className={projectanimation1 ? 'skills_item2' : 'hidden'}>
              <img src={img3} alt='texnoplus' />
              <div className='MyProjects_divitem'>
                <h2>TexnoPlus  | E-Commerce</h2>
                <div className='projects_hritem'></div>
                <p>TexnoPlus is an online electronic store that allows buyers to log in,
                  browse through multiple categories of electronic items, pick out products,
                  select favorite products, and them to cart and complete the purchase.</p>
                <div className='Myprojectslb_container'>
                  <span>Tech used : </span>
                  <label className='projectslb_item'>React Js </label>
                  <label className='projectslb_item'>CSS </label>
                  <label className='projectslb_item'>Redux </label>
                  <label className='projectslb_item'>JavaScript </label>
                  <label className='projectslb_item'>Bootstrap </label>
                  <label className='projectslb_item'>Material UI </label>
                  <label className='projectslb_item'>Webpack </label>
                  <label className='projectslb_item'>FontAwesome </label>
                  <label className='projectslb_item'>Slider </label>
                </div>
                <div className='projects_buttons'>
                  <a target='_blank' href='https://github.com/KhataiAlizade/TechnoPlus' rel="noreferrer">
                    <button className='Projects_btncode'> Source Code</button></a>
                </div>
              </div>
            </nav>
            <nav id='MyProjects_divitem' className={projectanimation2 ? 'skills_item3' : 'hidden'}>
              <img src={img4} alt='onfuture' />
              <div className='MyProjects_divitem'>
                <h2>OnFuture  | Blog</h2>
                <div className='projects_hritem'></div>
                <p>Welcome to OnFuture Edu-Careers, your gateway to exceptional study opportunities in Poland. OnFuture is an information website that allows users to see their services and career's path.</p>
                <div className='Myprojectslb_container'>
                  <span>Tech used : </span>
                  <label className='projectslb_item'>HTML5 </label>
                  <label className='projectslb_item'>CSS3 </label>
                  <label className='projectslb_item'>JavaScript </label>
                  <label className='projectslb_item'>Bootstrap </label>
                  <label className='projectslb_item'>FontAwesome </label>
                </div>
                <div className='projects_buttons'>
                  <a target='_blank' href='https://onfuture.eu/' rel="noreferrer">
                    <button className='Projects_btnlive'> Live Demo</button></a>
                  <a target='_blank' href='https://github.com/KhataiAlizade/Onfuture' rel="noreferrer">
                    <button className='Projects_btncode'> Source Code</button></a>
                </div>
              </div>
            </nav>
            <nav id='MyProjects_divitem' className={'skills_item3'}>
              <img src={img5} alt='onfuture' />
              <div className='MyProjects_divitem'>
                <h2>Weather App </h2>
                <div className='projects_hritem'></div>
                <p>WeatherTTS is a user-friendly weather application that 
                  allows users to search for any city and view current weather details including temperature,
                   feels like, wind speed, pressure, and humidity.
                  It integrates with the OpenWeather API to fetch real-time weather data.</p>
                <div className='Myprojectslb_container'>
                  <span>Tech used : </span>
                  <label className='projectslb_item'>HTML5 </label>
                  <label className='projectslb_item'>CSS3 </label>
                  <label className='projectslb_item'>TypeScript </label>
                  <label className='projectslb_item'>React </label>
                  <label className='projectslb_item'>OpenWeather Api </label>
                  <label className='projectslb_item'>GeoDB  Api </label>


                </div>
                <div className='projects_buttons'>
                  <a target='_blank' href='https://weathertts.netlify.app/' rel="noreferrer">
                    <button className='Projects_btnlive'> Live Demo</button></a>
                  <a target='_blank' href='https://github.com/KhataiAlizade/WeatherApp' rel="noreferrer">
                    <button className='Projects_btncode'> Source Code</button></a>
                </div>
              </div>
            </nav>
            <nav id='MyProjects_divitem' className={'skills_item3'}>
              <img src={img6} alt='onfuture' />
              <div className='MyProjects_divitem'>
                <h2>KaStore  | Movie</h2>
                <div className='projects_hritem'></div>
                <p>KaStore is a movie and TV show catalog website.
                  It allows users to search, filter, and explore a wide range of movies and TV shows, with features like sorting by popularity, 
                  filtering by genre and language, and viewing detailed information.
                   The app integrates with TMDb for real-time movie data and ensures a responsive, user-friendly interface.</p>
                <div className='Myprojectslb_container'>
                  <span>Tech used : </span>
                  <label className='projectslb_item'>TypeScript </label>
                  <label className='projectslb_item'>React  </label>
                  <label className='projectslb_item'>JavaScript </label>
                  <label className='projectslb_item'>Material UI </label>
                  <label className='projectslb_item'>HTML </label>
                  <label className='projectslb_item'>CSS </label>
                  <label className='projectslb_item'>TMDB Api </label>

                </div>
                <div className='projects_buttons'>
                  <a target='_blank' href='https://kastorel.netlify.app//' rel="noreferrer">
                    <button className='Projects_btnlive'> Live Demo</button></a>
                  <a target='_blank' href='https://github.com/KhataiAlizade/KaStore-site-' rel="noreferrer">
                    <button className='Projects_btncode'> Source Code</button></a>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </main>
      <footer >
        <div className='Contact_title'>
          <h1 id='Contact_title' className={bigAnimation4 ? 'bigAnimation' : 'hidden'}> Contact</h1>
        </div>
        <div className='Contact_Container'>
          <a id='first_contact1' className={contactanimation1 ? 'contacts_item1' : 'hidden'} target='_blank' href='mailto:xataializade01@gmail.com' rel="noreferrer">
            <span className='bordercontact1'></span>
            <span className='bordercontact2'></span>
            <span className='bordercontact3'></span>
            <span className='bordercontact4'></span>
            <nav className='Contact_item'>
              <div className='first_contact'>
                <FontAwesomeIcon className='mailicon brandicon' icon={mailicon} />
                <h5>Email</h5>
              </div>
              <p>Let's get in touch.</p>
            </nav>

          </a>

          <a id='first_contact2' className={contactanimation2 ? 'contacts_item2' : 'hidden'} target='_blank' href='https://www.linkedin.com/in/khatai-alizade-857235242/' rel="noreferrer">
            <span className='bordercontact1'></span>
            <span className='bordercontact2'></span>
            <span className='bordercontact3'></span>
            <span className='bordercontact4'></span>
            <nav className='Contact_item'>
              <div className='first_contact'>
                <FontAwesomeIcon className='linkedinicon brandicon' icon={linkedinicon} />
                <h5>Linkedln</h5>
              </div>
              <p>Let's connect.</p>
            </nav>
          </a>

          <a id='first_contact3' className={contactanimation3 ? 'contacts_item3' : 'hidden'} target='_blank' href='https://github.com/KhataiAlizade' rel="noreferrer">
            <span className='bordercontact1'></span>
            <span className='bordercontact2'></span>
            <span className='bordercontact3'></span>
            <span className='bordercontact4'></span>
            <nav className='Contact_item'>
              <div className='first_contact'>
                <FontAwesomeIcon className='githubicon brandicon' icon={githubicon} />
                <h5>Github</h5>
              </div>
              <p>Check out my repos.</p>
            </nav>
          </a>

          <a id='first_contact4' className={contactanimation4 ? 'contacts_item4' : 'hidden'} target='_blank' href='https://www.instagram.com/the.khatai/?next=%2F' rel="noreferrer">
            <span className='bordercontact1'></span>
            <span className='bordercontact2'></span>
            <span className='bordercontact3'></span>
            <span className='bordercontact4'></span>
            <nav className='Contact_item'>
              <div className='first_contact'>
                <FontAwesomeIcon className='instaicon brandicon' icon={instaicon} />
                <h5>Instagram</h5>
              </div>
              <p>Let's follow each other.</p>
            </nav>
          </a>
          <a id='first_contact5' className={contactanimation5 ? 'contacts_item5' : 'hidden'} target='_blank' href="https://wa.me/+48505311907" rel="noreferrer">
            <span className='bordercontact1'></span>
            <span className='bordercontact2'></span>
            <span className='bordercontact3'></span>
            <span className='bordercontact4'></span>
            <nav className='Contact_item'>
              <div className='first_contact'>
                <FontAwesomeIcon className='whpicon brandicon' icon={whpicon} />
                <h5>Whatsapp</h5>
              </div>
              <p>Let's chat soon.</p>
            </nav>
          </a>
        </div>
        <section className='last_footer'>
          <p>© Copyright 2023 Khatai. All rights reserved.</p>
        </section>
      </footer>
    </div>
  )
}

export default App
