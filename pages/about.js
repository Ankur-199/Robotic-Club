import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import Domain from "./Components/Domain";
import domains from "../data/domains.json";
import faculty from "../data/faculty.json";
import Faq from "./Components/Faq";
import { Container, Row } from "react-bootstrap";
import Footer from "./Components/Footer";
import OffBearSec from "./Components/OffBearSec";
import exofficebearers_23_24 from "../data/exofficebearers_23-24.json";
import styles from "../styles/about.module.css";

export default function About(props) {
  const [isAppleDevice, setIsAppleDevice] = useState(false);
  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>About-Robotic Club</title>
        <meta name="description" content="Official Robotic Club Website" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </Head>
      <Navbar transfer={props.theme} setTheme={props.setTheme} />

      <main
        className={
          props.theme
            ? styles.about_main_container_light
            : styles.about_main_container
        }
      >
        {isAppleDevice ? (
          <div className={styles.appleHeader}>
            <h1>Get To Know Us</h1>
            <p>Innovation is when Imagination meets Ambition</p>
          </div>
        ) : (
          <div className={styles.header}>
            <h1>Get To Know Us</h1>
            <p>Innovation is when Imagination meets Ambition</p>
          </div>
        )}<div className={styles.subcontainer}>
        <h2
          className={props.theme ? styles.subheader_light : styles.subheader}
        >
          About VIT Chennai
        </h2>
        <div className={styles.aboutrc}>
          <div>
            <h2>"A place to learn, a chance to grow"</h2>
            <p className={props.theme ? styles.para_light : styles.para}>
              We are a group of ardent tech enthusiasts with the zeal to learn, 
              to build and a thirst to be the best. A small group of passionate 
              techies to explore different domains of technology has now 
              blossomed into the official Robotics club of VIT, Vellore. Our 
              mission is to spread knowledge about robotics by organizing 
              various free workshops and seminars that help people out in 
              finding their technical niches and build their own projects. Our 
              members collaborate on some incredible projects and nurture 
              glorious teams that represent us all over the world, and have 
              several accolades to their name. With pride, all RoboVITians try 
              to live up to the legacy left by our predecessors.
            </p>
            <a href="https://chennai.vit.ac.in/"><u>Know More ➔</u></a>
          </div>
          <div>
            <img src="\vitchennai.jpeg"></img>
          </div>
        </div>
      </div>
        <div className={styles.subcontainer}>
          <h2
            className={props.theme ? styles.subheader_light : styles.subheader}
          >
            About Robotic Club
          </h2>
          <div className={styles.aboutrc}>
            <div>
              <h2>Turning Ambitions to Reality</h2>
              <p className={props.theme ? styles.para_light : styles.para}>
                We are a group of ardent tech enthusiasts with the zeal to learn, 
                to build and a thirst to be the best. A small group of passionate 
                techies to explore different domains of technology has now 
                blossomed into the official Robotics club of VIT, Vellore. Our 
                mission is to spread knowledge about robotics by organizing 
                various free workshops and seminars that help people out in 
                finding their technical niches and build their own projects. Our 
                members collaborate on some incredible projects and nurture 
                glorious teams that represent us all over the world, and have 
                several accolades to their name. With pride, all RoboVITians try 
                to live up to the legacy left by our predecessors.
              </p>
            </div>
            <div>
              <img src="\rclogo.png"></img>
            </div>
          </div>
        </div>
        
        <div className={styles.content}>
          <h2
            className={props.theme ? styles.subheader_light : styles.subheader}
          >
            Meet the team!
          </h2>
          <h3><b>FACULTY COORDINATOR</b></h3>
          <div className={styles.incharge}>
            <div className={styles.anchor}>
              <h1><b>Dr. Arockia Selvakumar Arockia Doss</b></h1>
              <p>As the faculty coordinator of the Robotics Club, it is my privilege to introduce our dynamic and vibrant community. Our club is a hub of creativity, innovation, and collaborative learning. We provide a platform for students to explore their passion for robotics, expand their technical skills, and cultivate a problem-solving mindset. Through engaging workshops, exciting projects, and competitive events, we aim to inspire and empower our members to excel in the world of robotics. Our club fosters a supportive environment where students can network, share ideas, and work together to push the boundaries of technological advancement. With a dedicated team of mentors and enthusiastic members, we strive to create a transformative experience that prepares students for future challenges and opportunities in the field of robotics.</p>
              <a href="https://roboticsclubvitc.co/Dr%20Arockia%20Selvakumar%20Portfolio%20Website/index.html"><u>Know More ➔</u></a>
            </div>
            <div>
              {faculty.map((domain, i) => {
              return <Domain key={i} domain={domain} theme={props.theme} />;
              })}
            </div>
          </div>
          <div className={styles.experience}><div><h1><b>Our Talented and Experienced Team Members</b></h1></div>
              <div><p>Discover the Expertise and Passion of Our Highly Capable Team Members</p></div>
              <div><p>in Delivering Exceptional Solutions and Services</p></div>
          </div>
          <div className={styles.academic}><b>Academic Year 2024-25</b></div>
          <div>
            {domains.map((domain, i) => {
            return <Domain key={i} domain={domain} theme={props.theme} />;
            })}
          </div>
        </div>
        {/*  Alumni Section */}
        <h2
          className={props.theme ? styles.subheader_light : styles.subheader}
          style={{ fontSize: "30px" }}
        >
          Ex-Office Bearer
        </h2>
        <OffBearSec
          year="2023-24"
          theme={props.theme}
          file={exofficebearers_23_24}
        />

        <div className={styles.faq}>
          <h2
            className={props.theme ? styles.subheader_light : styles.subheader}
          >
            Frequently asked questions
          </h2>
          <Container className={styles.faqContainer}>
            <Faq theme={props.theme} />
          </Container>
        </div>
      </main>
      <div className={styles.placeholder}>
        <Footer theme={props.theme} about={true} />
      </div>
    </div>
  );
}
