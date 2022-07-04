import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";

import header from "../../assets/HTW.png";
import fullPath from "../../assets/fullpath.png";
import randomize from "../../assets/randomize.png";
import admin from "../../assets/admin.png";
import borderTop from "../../assets/borderTop.svg";
import borderRight from "../../assets/borderright.svg";
import dotLine from "../../assets/dotline.svg";
import borderRightProject from "../../assets/borderrightproject.svg";
import borderLeftProject from "../../assets/borderleftproject.svg";
import Ampoule from "../../assets/ampoule.svg";
import Laptop from "../../assets/laptop.svg";
import LinkedIn from "../../assets/linkedin.svg";
import GitHub from "../../assets/github.svg";

import {
  navigateToLoginPage,
  navigateToLinkedin,
  navigateToGithub,
  navigateToGithubProjectPage,
} from "../../navigate-functions/navigate-functions";

import "./info.style.scss";

const Info = () => {
  const { ref: featureOne, inView: featureOneVisible } = useInView();
  const { ref: featureTwo, inView: featureTwoVisible } = useInView();
  const { ref: featureThree, inView: featureThreeVisible } = useInView();
  const { ref: aboutCard, inView: aboutCardVisible } = useInView();
  const { ref: teamCard, inView: teamCardVisible } = useInView();

  return (
    <div className="info-container">
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Info</title>
      </Helmet>
      <img src={borderTop} className="border-top" alt="boardertop" />
      <img src={borderRight} className="border-right" alt="boarderright" />
      <div className="info-header-container">
        <img src={header} alt="hearder" />
        <div className="info-header-content">
          <h1 className="info-header-logo">Hippo'nterview</h1>
          <h1 className="info-title-left">Break Coding Interviews</h1>
          <h1 className="info-title-right">
            Design to get you <span>hired</span>
          </h1>
          <div className="info-button" onClick={navigateToLoginPage}>
            Get started
          </div>
          <div className="info-navbar-container">
            <ul className="info-navbar-ul">
              <li>
                <Link
                  to="feature"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                >
                  Project Features
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={800}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="learn-more"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={1000}
                >
                  Learn More
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src={dotLine} alt="dotline" className="dot-line-separator" />
      <div className="info-section-container">
        <img
          src={borderRightProject}
          alt="barderrightproject"
          className="border-right-project"
        />
        <img
          src={borderLeftProject}
          alt="barderleftproject"
          className="border-left-project"
        />
        <h1 className="info-section-title" id="feature">
          Project Features
        </h1>
        <div
          className={`info-feature right ${
            featureOneVisible ? "isVisible" : ""
          }`}
          ref={featureOne}
        >
          <h1>Full Path courses</h1>
          <img src={fullPath} alt="fullPath" />
          <p>
            A full path design to train you on the most common interview
            questions patern.
          </p>
          <p>5 sections for 5 weeks of training.</p>
        </div>
        <div
          className={`info-feature left ${
            featureTwoVisible ? "isVisible" : ""
          }`}
          ref={featureTwo}
        >
          <h1>Randomize Question trainning</h1>
          <img src={randomize} alt="randomize" />
          <p>
            As your interviews approach, time to challenge you with random
            questions.
          </p>
          <p>
            Code as you were in interview with a random question from our
            full-path, and even more
          </p>
        </div>
        <div
          className={`info-feature right ${
            featureThreeVisible ? "isVisible" : ""
          }`}
          ref={featureThree}
        >
          <h1>Admin section control</h1>
          <img src={admin} alt="admin" />
          <p>
            Monitor all checker call from students and help them to find issues
            in their codes
          </p>
        </div>
      </div>
      <img src={dotLine} alt="dotline" className="dot-line-separator" />
      <div className="info-section-container">
        <h1 className="info-section-title" id="about">
          About
        </h1>
        <div className="about-container">
          <div
            className={`project-about-card left ${
              aboutCardVisible ? "isVisible" : ""
            }`}
            ref={aboutCard}
          >
            <h1>The Idea</h1>
            <p>
              The idea of the project started when I wanted to train my skills
              and get ready for coding interview questions. There were not so
              much ressources from Holberton to train on it and was completly
              fustrated to spend more money on other platform to have acces to
              pedagogic content to get in good shape for it.
            </p>
            <img src={Ampoule} alt="ampoule" className="info-logo-project" />
            <p>
              That why I decide to create this platform, fully free for
              Holberton School students, to help them through this proccess.
            </p>
            <img src={Laptop} alt="laptop" className="info-logo-project" />
            <p>
              The project was made in a week and half, from thinking of the
              whole idea and how check code, to implement code, and create
              platform
            </p>
          </div>
          <div
            className={`team-github-cards right ${
              teamCardVisible ? "isVisible" : ""
            }`}
            ref={teamCard}
          >
            <div className="team-card">
              <h1>The Team</h1>
              <h2>Mickael</h2>
              <h2>Full-Stack Developer</h2>
              <h3>Student @ Holberton School</h3>
              <div className="social-logo-container">
                <img
                  src={LinkedIn}
                  onClick={navigateToLinkedin}
                  alt="linkedin"
                  className="social-logo"
                />
                <img
                  src={GitHub}
                  onClick={navigateToGithub}
                  alt="github"
                  className="social-logo"
                />
              </div>
            </div>
            <h1 onClick={navigateToGithubProjectPage} className="github-title">
              GITHUB PAGE
            </h1>
          </div>
        </div>
      </div>
      <img src={dotLine} alt="dotline" className="dot-line-separator" />
      <div className="info-section-container">
        <h1 className="info-section-title" id="learn-more">
          Learn More
        </h1>
      </div>
    </div>
  );
};

export default Info;
