/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/fondo.jpg";

const imageAltText = "Foto de <a href="https://unsplash.com/es/@alinnnaaaa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alina Grubnyak</a> en <a href="https://unsplash.com/es/fotos/fotografia-de-angulo-bajo-de-estructura-metalica-ZiQkhI7417A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hallo 🦾 ✨, i’m passionate about artificial intelligence and currently pursuing a bachelor’s degree in bionic engineering in Mexico City.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "AI",
  "Deep learning",
  "Machine learning",
  "Azure AI",
  "Google Cloud",
  "Python",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I always strive to give my best in every project, and I never cease to learn.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
