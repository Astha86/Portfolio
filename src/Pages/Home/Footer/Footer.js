import React from "react";
import styles from "./Footer.module.css";
import Github from "../../../Assets/Images/github.png";
import LinkedIn from "../../../Assets/Images/linkedin.png";
import Twitter from "../../../Assets/Images/twitter.svg";
import Instagram from "../../../Assets/Images/insta.png";
import Codeforces from "../../../Assets/Images/codeforces.png";
import Codechef from "../../../Assets/Images/codechef.webp";
import Medium from "../../../Assets/Images/medium.svg";
import Leet from "../../../Assets/Images/leetcode.webp";
import {ArrowUpOutlined } from '@ant-design/icons'
import { Button } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Footer(props) {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <div ref={props.Profile_ref} className={styles.footer}>
        <div className={styles.footerSection}>
          <h4 className={styles.heading}>Visit my profiles ! </h4>

          <div className={styles.Links}>

            <div className={styles.logo}>
              <a
                href="https://github.com/Astha86"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="Github" />
              </a>
            </div>

            <div className={styles.logo}>
              <a
                href="https://www.linkedin.com/in/astha-sahani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="Linkedin" />
              </a>
            </div>

            <div className={styles.logo}>
              <a
                href="https://leetcode.com/Astha86/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Leet} alt="leetcode logo" />
              </a>
            </div>

            <div className={styles.logo}>
              <a
                href="https://www.codechef.com/users/astha86"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Codechef} alt="codechef logo" />
              </a>
            </div>
            
            <div className={styles.logo}>
              <a
                className="X"
                href="https://x.com/thatsoastha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Twitter} alt="twitter logo" />
              </a>
            </div>

            <div className={styles.logo}>
              <a
                href="https://codeforces.com/profile/Astha_86"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Codeforces} alt="codeforces" />
              </a>
            </div>

            <div className={styles.logo}>
              <a
                href="https://medium.com/@thatsoastha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Medium} alt="Medium logo" />
              </a>
            </div>

            <div className={styles.logo}>
              <a
                href="https://www.instagram.com/thatsoastha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="insta" />
              </a>
            </div>
            
          </div>

          <div className={styles.mailBtn}>
            <Button className={styles.mailBtn_btn} primary style={{background:'#FFE5AD'}}>
              <a href="https://www.linkedin.com/in/astha-sahani/">Hire Astha <ArrowUpOutlined className={styles.arrow} />
              </a>
              
            </Button>
          </div>


        </div>
        
        <div className={styles.name}>
          <span >Made with 🤍 by <a href="https://www.linkedin.com/in/astha-sahani/">Astha</a> © {(new Date().getFullYear())}</span>
        </div>
      </div>
    </>
  );
}
