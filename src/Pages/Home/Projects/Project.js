import { useEffect } from "react";
import styles from "./Project.module.css";
import CodeBuddy from "../../../Assets/Images/Codebuddy.png";
import Mart from "../../../Assets/Images/Shopmart.png";
import Techie from "../../../Assets/Images/techie.png";
import Weather from "../../../Assets/Images/weather.png";
import ProjectTem from "../../../Components/ProjectTemplate/ProjectTem";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Project({Project_ref}) {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <div ref={Project_ref} className={styles.ProjectSection}>
          <div
            className="heading"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <p>Projects</p>
            <p>My Work .</p>
          </div>

        <div className={styles.Project}>
          <ProjectTem
            title="CodeBuddy"
            smallDesc="An EdTech Platform to learn Coding"
            longDesc="CodeBuddy is an intuitive EdTech platform built with the MERN stack, enabling users to create, consume, and rate educational content. It delivers a seamless, interactive learning experience for students while allowing instructors to showcase expertise and connect with learners worldwide, fostering a global community of educators and students."
        
            skill1="ReactJs"
            skill2="Redux"
            skill3="NodeJs"
            skill4="MongoDB"
            skill5="ExpressJs"
            link="https://github.com/Astha86/CodeBuddy-An-EdTech-Platform"
            image={CodeBuddy}
          />
        </div>

        <div className={styles.Project}>
          <ProjectTem
            title="Tech Blogs"
            smallDesc="a web application that provides a platform for reading and exploring technical blogs"
            longDesc="It offers a collection of blogs organized by categories and tags. Users can easily navigate between blogs and discover related content. It is made to concretely understand the concept of routing, dynamic url based rendering Developed Reusable components 
            and used Context API for state management."
            skill1="ReactJs"
            skill2="Taiwind"
            skill3="Rest API"
            image={Techie}
            link="https://techs-blogs.netlify.app/"
          />
        </div>

        <div className={styles.Project}>
          <ProjectTem
            title="Shop Mart"
            smallDesc="E-Commerce website that allows users to browse and purchase products online."
            longDesc="Created the user interface for an E-Commerce website of 20 dummy products, which allows users to add & remove items to/from cart and buy them. Redux state management library has been used to keep track of the cart items."
            skill1="ReactJs"
            skill2="Redux"
            skill3="Tailwind"
            skill4="Rest APIs"
            link="https://shop-mart-byastha.netlify.app/"
            image={Mart}
          />
        </div>

        <div className={styles.Project}>
          <ProjectTem
            title="Weather Insights"
            smallDesc="The web application that display the current weather conditions including temperature, humidity, wind speed, and weather description."
            longDesc="Designed a weather website, which fetches the user location and shows the weather results for that location with 85% accuracy. Added an additional functionality to allow users to search for the weather conditions for over 200,000 cities in the world."
            skill1="HTML"
            skill2="CSS"
            skill3="JavaScript"
            link="https://weather-insights-byastha.netlify.app/"
            image={Weather}
          />
        </div>

      </div>
    </>
  );
}

