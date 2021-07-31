import React from "react";
import Link from "next/link";
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";
import Facebook from "../icons/Facebook";
import Linkedin from "../icons/Linkedin";
import Youtube from "../icons/Youtube";
import Heart from "../icons/Heart";
import Shuffle from "../icons/Shuffle";
import User from "../icons/User";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <div className={styles["nav-top"]}>
          <div className={`container ${styles["nav-top-wrapper"]}`}>
            <div className={styles["nav-top-contact"]}>
              <Phone />
              <span>+61 02 86280911</span>
              <span className={styles.pipe}></span>
              <Mail />
              <span>info@unisearch.my</span>
            </div>

            <ul className={styles["nav-top-links"]}>
              <Link href="/study">
                <a className="nav-top-link">
                  <li>Study</li>
                </a>
              </Link>
              <Link href="/online-learning">
                <a className="nav-top-link">
                  <li>Online Learning</li>
                </a>
              </Link>
              <Link href="/accommodation">
                <a className="nav-top-link">
                  <li>Accommodation</li>
                </a>
              </Link>
              <Link href="/jobs">
                <a className="nav-top-link">
                  <li>Jobs</li>
                </a>
              </Link>
            </ul>

            <ul className={styles["nav-top-social-links"]}>
              <Link href="#">
                <a>
                  <li className="nav-top-social-link">
                    <Instagram />
                  </li>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <li className="nav-top-social-link">
                    <Twitter />
                  </li>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <li className="nav-top-social-link">
                    <Linkedin />
                  </li>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <li className="nav-top-social-link">
                    <Facebook />
                  </li>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <li className="nav-top-social-link">
                    <Youtube />
                  </li>
                </a>
              </Link>
            </ul>
          </div>
        </div>

        <div className={styles["nav-bottom"]}>
          <div className={`container ${styles["nav-bottom-wrapper"]}`}>
            <div className={styles["nav-bottom-brand"]}>
              <Link href="/">
                <a>
                  <img
                    src="/assets/images/logo/unisearch.png"
                    alt="unisearch"
                  />
                </a>
              </Link>
            </div>

            <ul className={styles["nav-bottom-links"]}>
              <Link href="/study-abroad">
                <a className={styles["nav-bottom-link"]}>
                  <li>Study Abroad</li>
                </a>
              </Link>
              <Link href="/exam">
                <a className={styles["nav-bottom-link"]}>
                  <li>Exam</li>
                </a>
              </Link>
              <Link href="/document">
                <a className={styles["nav-bottom-link"]}>
                  <li>Document</li>
                </a>
              </Link>
              <Link href="/discussions">
                <a className={styles["nav-bottom-link"]}>
                  <li>Discussions</li>
                </a>
              </Link>
              <Link href="/adviser">
                <a className={styles["nav-bottom-link"]}>
                  <li>Adviser</li>
                </a>
              </Link>
              <Link href="/online-tv">
                <a className={styles["nav-bottom-link"]}>
                  <li>Online TV</li>
                </a>
              </Link>
              <Link href="/Blog">
                <a className={styles["nav-bottom-link"]}>
                  <li>Blog</li>
                </a>
              </Link>
            </ul>

            <div className={styles["nav-bottom-actions"]}>
              <Link href="#">
                <a className={styles["nav-bottom-action"]}>
                  <span className={styles.count}>0</span>
                  <span>
                    <Heart />
                  </span>
                </a>
              </Link>
              <Link href="#">
                <a className={styles["nav-bottom-action"]}>
                  <span className={styles.count}>0</span>
                  <span>
                    <Shuffle />
                  </span>
                </a>
              </Link>
              <Link href="#">
                <a className={styles["nav-bottom-action"]}>
                  <span className={styles.user}>
                    <User />
                  </span>
                </a>
              </Link>
              <button>Profile Evaluation</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
