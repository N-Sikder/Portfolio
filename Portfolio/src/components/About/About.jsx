import React from "react";
import Styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={Styles.container} id="about">
      <h2 className={Styles.title}>About</h2>
      <div className={Styles.content}>
        <img
          src={getImageUrl("aboutImg.png")}
          alt="About Me"
          className={Styles.aboutImage}
        />
        <ul className={Styles.aboutItems}>
          <li className={Styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="Cursor Icon" />
            <div className={Styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm an enthusiastic frontend developer with a passion for
                building beautiful & optimized sites.
              </p>
            </div>
          </li>
          <li className={Styles.aboutItem}>
            <img src={getImageUrl("serverIcon.png")} alt="Server Icon" />
            <div className={Styles.aboutItemText}>
              <h3>Software Engineer</h3>
              <p>
                I have a strong work ethic and love to find elegant resolutions
                to problems and make an effective solution.
              </p>
            </div>
          </li>
          <li className={Styles.aboutItem}>
            <img src={getImageUrl("uiIcon.png")} alt="UI Icon" />
            <div className={Styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed many landing pages and have experience with
                various sorts of page style and designs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
