import React, { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import styles from "../../styles/Footer.module.css";

const Footer = (props) => {
  const [isAppleDevice, setIsAppleDevice] = useState(false);
  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  return (
    <footer
      className={
        props.theme ? styles.footerContainer_light : styles.footerContainer
      }
    >
      <div className={styles.footer}>
        <div
          className={isAppleDevice ? styles.appleFooterText : styles.footerText}
        >
          <h1>Join us today!</h1>
          
        </div>
        <div className={styles.social_media}>
          <a
            href="https://in.linkedin.com/company/robotics-club-vitc"
            className={styles.linkedin}
            target="_blank"
          >
            <FaLinkedin
              className={
                props.theme ? styles.social_icon_light : styles.social_icon
              }
            />
          </a>
          
          {props.about ? (
            <a
              href="https://www.instagram.com/robotics_club_vitc/"
              target="_blank"
              rel="noreferrer"
              className={`fab fa-instagram ${props.theme
                  ? styles.insta + " " + styles.insta_light
                  : styles.social_icon + " " + styles.insta
                }`}
            ></a>
          ) : (
            <a
              href="https://www.instagram.com/robotics_club_vitc/"
              target="_blank"
              rel="noreferrer"
              className={`fa fa-instagram ${props.theme
                  ? styles.insta + " " + styles.insta_light
                  : styles.social_icon + " " + styles.insta
                }`}
            ></a>
          )}
          <a
            href="https://www.facebook.com/VITCCRoboticsClub?mibextid=ZbWKwL"
            className={styles.facebook}
            target="_blank"
          >
            <FaFacebook
              className={
                props.theme ? styles.social_icon_light : styles.social_icon
              }
            />
          </a>
          <br />
          
        </div>
        <div>
          <h4>
            <b>Institution</b>
          </h4>
        </div>
        <div>
          <a className={styles.anchor} href="https://chennai.vit.ac.in/" target="_blank" rel="noreferrer">Official Site</a> 
        </div>
        <div>
          <a className={styles.anchor} href="https://chennai.vit.ac.in/campus/studentchapters_clubs/" target="_blank" rel="noreferrer">YouTube</a> 
        </div>
        <div>
          <a className={styles.anchor} href="https://www.youtube.com/@VITChennaic" target="_blank" rel="noreferrer">Club and Chapters</a> 
        </div>

        <p
          style={{
            color: "grey",
            position: "absolute",
            bottom: "0",
            textAlign: "center",
          }}
        >
         © 2023 Website Designed by Robotics Club VIT Chennai. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
