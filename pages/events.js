import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import styles from "../styles/about.module.css";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import styles1 from "../styles/events.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { BsTrophy } from "react-icons/bs";
import { SiGithubsponsors } from "react-icons/si";
import events from "../data/events.json";
import { Description } from "@mui/icons-material";

const PopupCard = ({ pic, event = [] }) => {
  return (
    <div className={styles1.flex_container}>
      <img src={pic}></img>
      <div className={styles1.flex_div_right}>
        <div className={styles1.top}>
          <h1 className={styles1.event_name}>{event.EventName}</h1>
          <h6 className={styles1.category_tag}>{event.Tag}</h6>
        </div>
        <div className="middle">
          <p className={styles1.description}>{event.Description}</p>
        </div>
        
          
      </div>
    </div>
  );
};

const EventCard = ({ pic, event = [] }) => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const getImg = (img) => {
    setTempImg(img);
    setModal(true);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <div
        className={modal ? styles1.modal + " " + styles1.open : styles1.modal}
      >
        <PopupCard pic={tempImg} event={event} />
        <CloseIcon
          onClick={() => {
            setModal(false);
            document.body.style.overflow = "visible";
          }}
          className={styles1.CloseIcon}
        />
      </div>
      <div
        className={styles1.grid_item}
        onClick={() => {
          getImg(pic);
          document.body.style.overflow = "hidden";
        }}
      >
        <img src={pic} alt="Image"></img>
        <div className={styles1.top}>
          <h1 className={styles1.event_name}>{event.EventName}</h1>
        </div>
      </div>
    </>
  );
};

const Events = (props) => {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  const newEvent1 = {
    Pic: "/events/RevL0.png",
    EventName: "REV-UP-ARDUINO [L1]",
    Tag: "Workshop",
    Description: "The Robotics club launched a three-level series of workshops on Arduino and related projects. The Level 1 workshop, organized in a smart classroom, taught participants C/C++, the language of Arduino boards, and detailed code.",
  };

  const newEvent2 = {
    Pic:"/events/REVUP2.png",
    EventName: "REV-UP-ARDUINO [L2]",
    Tag:"Workshop",
    Description:"The Rev Up Arduino workshop, Level 2, aimed to teach participants how to build three Arduino projects, allowing them to apply theoretical knowled",
  };

  const newEvent3 = {
    Pic:"/events/makeathon.png",
    EventName: "3D PRINITNG WORKSHOP AND MAKE-A-THON",
    Tag:"Workshop and Hackathon",
    Description:"Provided students with practical experience in creating 3-D designs and learning about the latest technology.",
  };
  const newEvent4 = {
    Pic:"/events/robo.png",
    EventName: "ROBO EXPO 2023",
    Tag:"Expo",
    Description:"Robo Expo, in which 50 of the 69 projects submitted were chosen for display. The projects were given to Dr. V S Kanchana Bhaaskaran, Pro Vice-Chancellor, and Dr. Annamalai K, Dean of SMEC",
  };
  const newEvent5 = {
    Pic:"/events/revup3.png",
    EventName: "REV-UU-ARDUINO [L3]",
    Tag:"Workshop",
    Description:"Delivered a hands-on workshop on IoT technology. Students learned how to create and deploy IoT solutions, use the power of automation and explore the fascinating world of connected devices.",
  };
  const newEvent6 = {
    Pic:"/events/skill.png",
    EventName: "SKILL DEVELOPMENT WORKSHOP ON AERIAL VEHICLES",
    Tag:"Workshop",
    Description:"This two-day conference, in collaboration with ASME (American Society of Mechanical Engineers), focused on unmanned aerial vehicles (UAV) and provided participants with an in-depth learning experience.",
  };
  const newEvent7 = {
    Pic:"/events/deep.png",
    EventName: "DEEP LEARNING AND MACHINE LEARNING BOOTCAMP",
    Tag:"Workshop",
    Description:"A two-day workshop, comprised of four engaging sessions, delved into the exciting world of Deep Learning (DL) and its applications using TensorFlow",
  };
  const newEvent8 = {
    Pic:"/events/riact.png",
    EventName: "RIACT",
    Tag:"International Conference",
    Description:"Fourth International Conference on RIACT was conducted by School of Mechanical Engineering, VIT in association with Teesside University (UK) and Bochum University of Applied Sciences (Germany).It was to provide a virtual platform to meet and share cutting-edge developments",
  };

  const upcoming1 = {
    Pic:"/events/coming.webp",
    EventName:"Pitch-A-Thon",
    Tag:"hackathon",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Date: 6th and 7th September",
  };
  const upcoming2 = {
    Pic:"/events/aurdiuno.jpg",
    EventName:"Rev-Up-Ardiono [L1]",
    Tag:"Workshop",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  };
  const upcoming3 = {
    Pic:"/events/coming.webp",
    EventName:"Rev-Up-RPI [L1]",
    Tag:"Workshop",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  };
  const upcoming4 = {
    Pic:"/events/aurdiuno.jpg",
    EventName:"Rev-Up-Ardiono [L2]",
    Tag:"Workshop",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  };
  const upcoming5 = {
    Pic:"/events/coming.webp",
    EventName:"Rev-Up-RPI [L2]",
    Tag:"Workshop",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  };
  const upcoming6 = {
    Pic:"/events/aurdiuno.jpg",
    EventName:"RoboPrix",
    Tag:"Workshop",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  };



  return (
    <div className={styles.container}>
      <Head>
        <title>Events-Robotic Club</title>
        <meta name="description" content="Official SSN Coding Club Website" />
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
            <h1>OUR EVENTES</h1>
          </div>
        ) : (
          <div className={styles.header}>
            <h1>OUR EVENTS</h1>
          </div>
        )}

        <div className={styles1.look}>
          <div><h2>Take A Look</h2></div>
          <div><p>Relive the exciting moments we've shared together!we 
            invite you to reminisce and celebrate the successes 
            achieved. Thank you for your participation and enthusiasm. 
            Stay tuned for more upcoming opportunities!"</p></div>
        </div>
        
        <div className={styles1.grid_container}>
          {events.concat(newEvent1, newEvent2, newEvent3, newEvent4, newEvent5, newEvent6, newEvent7, newEvent8).map((event, i) => (
            <EventCard pic={event.Pic} key={i} event={event} />
          ))}
        </div>
      </main>
      <main
        className={
          props.theme
            ? styles.about_main_container_light
            : styles.about_main_container
        }
      >
        {isAppleDevice ? (
          <div className={styles.appleHeader}>
            <h1>UPCOMING EVENTS</h1>
          </div>
        ) : (
          <div className={styles.header}>
            <h1>UPCOMING EVENTS</h1>
          </div>
        )}

        <div className={styles1.look}>
          <div><h3>Save the Date: Upcoming Events</h3></div>
          <div><p>Stay informed and get ready to participate in our exciting upcoming events. Mark your calendar and join us for a memorable experience.</p></div>
        </div>
        
        <div className={styles1.grid_container}>
          {events.concat(upcoming1, upcoming2, upcoming3, upcoming4, upcoming5, upcoming6 ).map((event, i) => (
            <EventCard pic={event.Pic} key={i} event={event} />
          ))}
        </div>
      </main>
      <div className={styles.placeholder}>
        <Footer theme={props.theme} about={true} />
      </div>
    </div>
  );
};

export default Events;
