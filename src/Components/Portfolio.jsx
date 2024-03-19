/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/screw.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Predictive Maintenance Model",
    description: "Developed a predictive maintenance model using machine learning algorithms to anticipate equipment failures.",
    url: "https://github.com/yourusername/predictive-maintenance-model",
  },
  {
    title: "Optimization of Manufacturing Processes",
    description: "Applied industrial engineering principles to optimize manufacturing processes, reducing production costs by 15%.",
    url: "https://www.researchgate.net/publication/your-optimization-paper",
  },
  {
    title: "Data Visualization Dashboard for Supply Chain Analysis",
    description: "Designed and implemented an interactive dashboard using Python and Plotly to visualize supply chain data for decision-making purposes.",
    url: "https://github.com/yourusername/supply-chain-dashboard",
  },
  {
    title: "Machine Learning for Quality Control",
    description: "Implemented machine learning algorithms to improve quality control processes in manufacturing, reducing defects by 20%.",
    url: "https://www.sciencedirect.com/science/article/your-quality-control-paper",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
