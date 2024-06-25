import React from "react";
import { getImageUrl } from "../../utils";
import Styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>Hi, I'm Niloy</h1>
        <p className={Styles.description}>
          I hold a degree in Computer Science and have a deep enthusiasm for
          continuous learning, coupled with a robust work ethic. Proficient in
          both English and Bengali, and at ease engaging in conversations in
          Hindi. As a detail-oriented prospective web developer, I am keen to
          augment my skills and make a meaningful contribution to the field of
          web development.
        </p>
        <a
          href="mailto:sikderniloy.work@gmail.com"
          className={Styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("heroImg.png")}
        alt="Hero Image of me."
        className={Styles.heroImg}
      />
      <div className={Styles.topBlur} />
      {/* <div className={Styles.bottomBlur} /> */}
    </section>
  );
};

export default Hero;
