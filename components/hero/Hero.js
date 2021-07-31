import React from "react";
import Link from "next/link";
import styles from "./Hero.module.scss";
import Equalizer from "../icons/Equalizer";
import University from "../icons/University";
import Councelling from "../icons/Councelling";
import Discussions from "../icons/Discussions";
import EnglishTest from "../icons/EnglishTest";
import Calender from "../icons/Calender";
import Application from "../icons/Application";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-circle-big"]}></div>
      <div className={styles["hero-circle-small"]}></div>

      <div className={`container ${styles["hero-wrapper"]}`}>
        <div className={styles["hero-top"]}>
          <div className={styles["hero-top-left"]}>
            <div className={styles["hero-left-img-1"]}>
              <img src="/assets/images/hero-img-01.png" alt="event 1" />
            </div>
            <div className={styles["hero-left-img-2"]}>
              <img src="/assets/images/hero-img-02.png" alt="event 2" />
            </div>

            <div className={styles["hero-top-left-oval"]}>
              <img src="/assets/images/oval.png" alt="oval" />
            </div>
          </div>

          <div className={styles["hero-center"]}>
            <div className={styles["hero-heading-wrapper"]}>
              <h1 className="hero-heading">
                Your Dream University
                <br />
                Is Not A Dream Anymore
              </h1>
              <span className={styles.arc}></span>
            </div>

            <h4 className="hero-sub-heading">
              Apply to Universities Abroad with expert guidance from existing
              students
            </h4>

            <div className={styles["hero-search"]}>
              <input type="text" placeholder="Enter course, college or exam" />
              <input type="text" placeholder="Location" />
              <button>
                <Equalizer />
              </button>
              <button className={styles["btn-search"]}>SEARCH</button>
            </div>
          </div>

          <div className={styles["hero-top-right"]}>
            <div className={styles["hero-right-img-1"]}>
              <img src="/assets/images/hero-img-03.png" alt="event 1" />
            </div>
            <div className={styles["hero-right-img-2"]}>
              <img src="/assets/images/hero-img-04.png" alt="event 2" />
              <div className={styles["hero-quote"]}>
                <h5>Get insights into</h5>
                <p>Universities, Courses, Exams, Admissions, Student Visas</p>
              </div>
            </div>
            <div className={styles["hero-top-right-oval"]}>
              <img src="/assets/images/oval.png" alt="oval" />
            </div>
          </div>
        </div>

        <div className={styles["hero-bottom"]}>
          <ul className={styles["hero-links"]}>
            <Link href="#">
              <a className={styles["hero-link"]}>
                <li>
                  <span
                    className={`${styles["hero-link-icon"]} ${styles.university}`}
                  >
                    <University />
                  </span>
                  <span>Explore University</span>
                </li>
              </a>
            </Link>

            <Link href="#">
              <a className={styles["hero-link"]}>
                <li>
                  <span
                    className={`${styles["hero-link-icon"]} ${styles.councelling}`}
                  >
                    <Councelling />
                  </span>
                  <span>Free Counselling</span>
                </li>
              </a>
            </Link>

            <Link href="#">
              <a className={styles["hero-link"]}>
                <li>
                  <span
                    className={`${styles["hero-link-icon"]} ${styles.discussions}`}
                  >
                    <Discussions />
                  </span>
                  <span>Discussions</span>
                </li>
              </a>
            </Link>

            <Link href="#">
              <a className={styles["hero-link"]}>
                <li>
                  <span
                    className={`${styles["hero-link-icon"]} ${styles.english}`}
                  >
                    <EnglishTest />
                  </span>
                  <span>English Test</span>
                </li>
              </a>
            </Link>

            <Link href="#">
              <a className={styles["hero-link"]}>
                <li>
                  <span
                    className={`${styles["hero-link-icon"]} ${styles.application}`}
                  >
                    <Application />
                  </span>
                  <span>Application</span>
                </li>
              </a>
            </Link>

            <Link href="#">
              <a className={styles["hero-link"]}>
                <li>
                  <span
                    className={`${styles["hero-link-icon"]} ${styles.event}`}
                  >
                    <Calender />
                  </span>
                  <span>Event</span>
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
