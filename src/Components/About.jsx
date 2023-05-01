import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
const description = "Professional with a passion for design and a commitment to excellence.";
const skillsList = [
  "Web design",
  "Video production",
  "Accounting",
  "Virtual assistant",
  "WordPress",
  "Graphic design",
];
const detailOrQuote = "Embrace the 10X mindset, and success will follow. - Grant Cardone";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-content">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
