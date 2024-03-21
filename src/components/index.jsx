import React from "react";
import styles from "./Card/index.module.css";
import img from "../assets/img.png";
import img2 from "../assets/img2.png";
import hero from "../assets/Hero.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaKickstarter } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
function Card() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.nav}>
              <div className={styles.Nav}>
                <FaKickstarter style={{ fontSize: "30px" }} />
                <h5>Kreed</h5>
              </div>
              <a href="#">Home</a>
              <a href="#">About us</a>
              <a href="#">How it works</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
              <button>Get Started</button>
            </div>
            <h4>
              Connecting all <br /> your banking <br /> needs
            </h4>
            <p>
              A smart mobile application you can control your <br /> business
              needs
            </p>
            <div className={styles.div}>
              <button className={styles.button}>
                <FaApple />
                Download App
              </button>
              <button className={styles.button}>
                <FaGooglePlay />
                Download App
              </button>
            </div>
            <img className={styles.img} src={img} alt="" />
          </div>

          <div className={styles.card} style={{ background: "#F7F7F9" }}>
            <div className={styles.nav}>
              <div className={styles.Nav}>
                <FaKickstarter style={{ fontSize: "30px" }} />
                <h5>Kreed</h5>
              </div>
            </div>
            <h4>
              The easiest way <br /> to manage team <br /> projects & tasks
            </h4>
            <p>
              Take a tour of work management platform to see how you can do{" "}
              <br /> more of your best work.
            </p>
            <div className={styles.div}>
              <button className={styles.button}>Know More</button>
            </div>
            <img
              className={styles.img}
              style={{
                marginTop: "-600px",
                marginLeft: "-45px",
              }}
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
