import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "education papers";

const EducationList = [
  {
    title: "Education & Certifications",
    description:
      "Bachelors in Computer Science from University of the Pacific, Cisco Certified Network Associate (CCNA) and Google IT Support Professional Certificate.",
    url: "https://www.credly.com/users/abdul-basit.3159bbd5/badges",
  },
];

const Education = () => {
  return (
    <section className="padding" id="Education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
            className="slide-in"
          />
        </div>
        <div className="container">
          {EducationList.map((education) => (
            <div className="box" key={education.title}>
              <a href={education.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{education.title}</h3>
              </a>
              <p className="small">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
