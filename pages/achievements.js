import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import cardDetails from "../data/cardInfo.json";
import styles from "../styles/achievements.module.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Tile from "./Components/Tile";
import ReactGA from "react-ga";
import { colors } from "@mui/material";
import Link from 'next/link';

ReactGA.initialize("UA-217065873-1");

export default function Home(props) {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
    ReactGA.send("pageview");
  }, []);

  return (
    <div>
        <Navbar />
        <div className={styles.main}>
        <div className={styles.heading}>
          <div>
            <h1>Robotics club <br></br>VIT Chennai</h1>
            <h4>Innovation is when Imagination meets Ambition</h4>
            <div className={styles.home}>
            <Link href="/">
                <button>Home</button>
            </Link>
            </div>
          </div>
          <div>
          <img src="/achieve.png"></img>
          </div>
        </div>
        <div className={styles.list}><h1>List of the Achievements</h1></div>
        <div className={styles.listachievement}>
          <div>
            <h2>2 Times best club Award</h2>
            <p>On behalf of the Robotics Club, we are immensely proud to announce that we have been honored with the prestigious Best Club Award not once, but twice. This recognition is a testament to the hard work, dedication, and innovation of our club members. Through our collaborative efforts, we have demonstrated excellence in the field of robotics, showcasing our passion and expertise. These accolades validate our commitment to providing an exceptional platform for learning, experimentation, and technological advancement. We are grateful for the support of our members, mentors, and the entire robotics community, and we are motivated to continue pushing boundaries and achieving even greater heights in the future.</p>
            <a href="https://chennai.vit.ac.in/"><u>Explore more ➔</u></a>
          </div>
          <div>
            <img src="/1.jpg"></img>
          </div>
        </div>
        </div>
        <div className={styles.placeholder}>
        <Footer theme={props.theme} />
        </div>
    </div>
  );
}