import React from "react";
import { getImageUrl } from "../../utils";
import Styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={Styles.container}>
      <div className={Styles.text}>
        <h2>Contact Me</h2>
        <p>Feel Free to Reach Out !</p>
      </div>
      <ul className={Styles.links}>
        <li className={Styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email Icon" />
          <a href="mailto:sikderniloy.work@gmail.com">
            sikderniloy.work@gmail.com
          </a>
        </li>

        <li className={Styles.link}>
          <img src={getImageUrl("linkedinIcon.png")} alt="Linkedin Icon" />
          <a
            href="https://www.linkedin.com/in/niloy-sikder-34b8072a9/"
            target="_blank"
          >
            linkedin.com/Niloy Sikder
          </a>
        </li>

        <li className={Styles.link}>
          <img src={getImageUrl("githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/N-Sikder" target="_blank">
            github.com/N-Sikder
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
