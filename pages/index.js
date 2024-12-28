/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import cardDetails from "../data/cardInfo.json";
import testimonial from "../data/testimonial.json";
import styles from "../styles/Home.module.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Tile from "./Components/Tile";
import ReactGA from "react-ga";
import { colors } from "@mui/material";
import Domain from "./Components/Domain";

ReactGA.initialize("UA-217065873-1");

export default function Home(props) {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
    ReactGA.send("pageview");
  }, []);

  return (
    <div className={styles.parallax}>
      <div className={props.theme ? styles.container_light : styles.container}>
        <Head>
          <title>Robotic Club</title>
          <meta name="description" content="Official SSN Coding Club Website" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <Navbar transfer={props.theme} setTheme={props.setTheme} />
        <main className={styles.main}>
          <div className={styles.headerSection}>
            {isAppleDevice ? (
              <img
                src="./Title.png"
                className={styles.responsive}
                alt="Title"
              />
            ) : (
              <div className={styles.header}>
                <h1>Robotics Club VIT Chennai</h1>
              </div>
            )}
            <h1 className={props.theme ? styles.h1Text_light : styles.h1Text}>
              More than just a club.
            </h1>
            <a href="#knowUs">
              {props.theme ? (
                <BsChevronDoubleDown
                  color="black"
                  size="45"
                ></BsChevronDoubleDown>
              ) : (
                <BsChevronDoubleDown
                  color="white"
                  size="45"
                ></BsChevronDoubleDown>
              )}
            </a>
          </div>
        </main>
        <div 
        id="knowUs"
        className={styles.knowmore}>
          <h1>Know More About The Club</h1>
        </div>
        <div>
        <div 
          className={styles.about}>
            <div className={styles.textContainer}>
              <h2>Our Small step would be a giant leap in robotics education.</h2>
              <p>At the Robotics Club, we firmly believe that every small step we take towards robotics education can have a significant impact on the future of the field. By educating and inspiring the next generation of engineers, we are contributing to the advancement of technology and the growth of innovation. Our workshops, events, and projects aim to equip individuals with the skills and knowledge needed to make a real difference in the world of robotics. We are proud to be a part of this transformative journey, and we believe that every contribution, no matter how small, can lead to a giant leap in the field of robotics education.</p>
              <a href="/about">
                <u>Explore more ➔</u> 
              </a>
            </div>
            <div className={styles.imageContainer}>
              <img src="\robot.webp" alt="Robotics" />
            </div>
          </div>
        </div>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <div id="info">
          <Container className={styles.infoContainer}>
            <Row>
              {cardDetails.map((cardInfo, i) => {
                return (
                  <Col md="6" sm="12" lg="4">
                    <Card
                      className={
                        props.theme
                          ? styles.infoContainerCard_light
                          : styles.infoContainerCard
                      }
                    >
                      <Card.Img variant="top" src={cardInfo.img} />
                      <Card.Body>
                        <Card.Title
                          className={
                            props.theme
                              ? styles.infoContainerCardTitle_light
                              : styles.infoContainerCardTitle
                          }
                        >
                          {cardInfo.title}
                        </Card.Title>
                        <Card.Text> {cardInfo.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <div className={styles.achievement}>
          <h1>Achievements</h1>
          <div className={styles.achievementContent}>
            <div className={styles.achievementText}>
              <h2>Breaking boundaries through our exceptional performance.</h2>
              <p>Have a look over our achievements and certification <br></br>
                <i className="fa fa-check" aria-hidden="true"></i> From the Club<br></br>
                <i className="fa fa-check" aria-hidden="true"></i> From the Faculty Coordinator
              </p>
            </div>
            <div className={styles.achievementImage}>
              <img src="/achievement.gif" alt="Achievements" className={styles.achievementGif} />
            </div>
          </div>
          <Button href="/achievements" className={styles.achievementButton}>
            Achievements
          </Button>
          <div className={styles.quote}>
            <div>QUOTE OF THE DAY</div>
            <h2>Start small, think big</h2>
            <p>Hope is the light that keeps us going, even in the darkest of times.<br></br>Never let it fade away.</p>
          </div>
          <div className={styles.our}><b>Discover Our Activeness</b></div>
          <div className={styles.discover}>
            <div className={styles.vertical}><div className={styles.number}><b>150+</b></div><div className={styles.thing}>Members</div></div>
            <div className={styles.vertical}><div className={styles.number}><b>75+</b></div><div className={styles.thing}>Projects completed</div></div>
            <div className={styles.vertical}><div className={styles.number}><b>2</b></div><div className={styles.thing}>Times Best Club Award</div></div>
            <div className={styles.vertical}><div className={styles.number}><b>10+</b></div><div className={styles.thing}>Undergoing Projects</div></div>
          </div>
        </div>
        
        <div className={styles.domainSection}>
          {/* lots of domains */}
          <Row>
            <Col sm="12" md={`${isAppleDevice ? 8 : 12}`}>
              {isAppleDevice ? (
                <img
                  src="./HomePage/LoD.png"
                  className={styles.domainHeaderApple}
                  alt="Title"
                />
              ) : (
                <div className={styles.domainHeader}>
                  <div className={styles.domainHeader1}>Lots of Domains</div>
                  <div className={styles.domainHeader2}></div>
                </div>
              )}
            </Col>
          </Row>
          <Row className={styles.domainRow}>
            <Col sm="12" md="5" className={styles.domainImgContainer}>
              <img
                src="/rp.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h4
                className={
                  props.theme ? styles.domainName_light : styles.domainName
                }
              >
                Robotic department
              </h4>
            </Col>
            <Col sm="12" md="7" className={styles.domainInfoContainer}>
              <p
                className={
                  props.theme ? styles.domainInfo_light : styles.domainInfo
                }
              >
                Building robots is no less than crafting the future, and we’re here to guide you every step of the way! Explore cutting-edge robotics, from hardware design to AI-driven automation, and master the art of creating intelligent systems. Got specific ideas or challenges? Our experienced team is ready to assist and ensure you have the tools and knowledge to bring your vision to life. Let’s innovate and shape tomorrow together!
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "last" }}
              md={{ span: 7, order: "first" }}
              className={styles.domainInfoContainer}
            >
              <p
                className={
                  props.theme ? styles.domainInfo_light : styles.domainInfo
                }
              >
               Soaring to new heights, our drone department is where technology meets innovation! Dive into the world of drone engineering, from flight mechanics to autonomous navigation and real-time data processing. Whether you're looking to build your own drone or explore advanced applications like aerial mapping or surveillance, our expert team is here to guide you. No matter your level of expertise, we’ll help you take your drone skills to the next level. Let’s fly high and make the sky our playground!
              </p>
            </Col>
            <Col
              xs={{ order: "first" }}
              sm={{ order: "first" }}
              md={{ span: 5, order: "last" }}
              className={styles.domainImgContainer}
            >
              <img
                src="/dp.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h4
                className={
                  props.theme ? styles.domainName_light : styles.domainName
                }
              >
                Drone
              </h4>
            </Col>
          </Row>
          <Row className={styles.domainRow}>
            <Col s m="12" md="5" className={styles.domainImgContainer}>
              <img
                src="./HomePage/cp.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h4
                className={
                  props.theme ? styles.domainName_light : styles.domainName
                }
              >
                Competitive Programming
              </h4>
            </Col>
            <Col sm="12" md="7" className={styles.domainInfoContainer}>
              <p
                className={
                  props.theme ? styles.domainInfo_light : styles.domainInfo
                }
              >
                Embark on an exciting journey to master the art of competitive programming! Explore essential CP concepts, algorithms, and strategies that will sharpen your problem-solving, logical thinking, and coding interview skills. Join our community for regular contests, where you can test your skills against peers and push your limits. Our team is available round the clock to answer your questions and provide any support you need. Let's code, learn, and grow together!
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "last" }}
              md={{ span: 7, order: "first" }}
              className={styles.domainInfoContainer}
            >
              <p
                className={
                  props.theme ? styles.domainInfo_light : styles.domainInfo
                }
              >
                 Great apps take time, just like Rome wasn’t built in a day! Dive into state-of-the-art app development and master end-to-end full-stack solutions without cutting corners. Have something specific in mind to learn? No worries! Our expert developers, skilled in diverse domains, are here to guide and assist you whenever needed. Let’s build something amazing together!
              </p>
            </Col>
            <Col
              xs={{ order: "first" }}
              sm={{ order: "first" }}
              md={{ span: 5, order: "last" }}
              className={styles.domainImgContainer}
            >
              <img
                src="./HomePage/sd.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h4
                className={
                  props.theme ? styles.domainName_light : styles.domainName
                }
              >
                Software Development
              </h4>
            </Col>
          </Row>
        </div>
        <div className={styles.hr}>
          <hr></hr>
        </div>
        <div className={styles.testimonial}>
          <div>TESTIMONIALS</div>
          <h1><b>What people say about us</b></h1>
          <br></br>
          <p>"Discover What Our Members Have to Say: Testimonials from Passionate</p>
          <p>Robotics Enthusiasts"</p>
        </div>
        <div className={styles.content}>
        {testimonial.map((testimonial, i) => {
            return <Domain key={i} domain={testimonial} theme={props.theme} />;
          })}
        </div>

      </div>
      <div className={styles.placeholder}>
        <Footer theme={props.theme} />
      </div>
    </div>
  );
}
