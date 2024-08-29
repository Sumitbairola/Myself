import React from "react";
import "./Skills.css";

const Skills = () => {
  const scrollToCard = (e) => {
    const container = document.querySelector(".skills-container");
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const containerCenter = containerRect.left + containerRect.width / 2;

    const scrollOffset = cardCenter - containerCenter;

    container.scrollTo({
      left: container.scrollLeft + scrollOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        <div className="skill-card" onClick={scrollToCard}>
          <h3>Technical Skills</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Node.js, Express.js</li>
            <li>MongoDB, SQL</li>
          </ul>
        </div>
        <div className="skill-card" onClick={scrollToCard}>
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem-solving</li>
            <li>Team collaboration</li>
            <li>Time management</li>
          </ul>
        </div>
        <div className="skill-card" onClick={scrollToCard}>
          <h3>Interpersonal Skills</h3>
          <ul>
            <li>Communication</li>
            <li>Leadership</li>
            <li>Empathy</li>
          </ul>
        </div>
        {/* Add two more cards */}
        <div className="skill-card" onClick={scrollToCard}>
          <h3>Additional Skill 1</h3>
          <ul>
            <li>Example 1</li>
            <li>Example 2</li>
            <li>Example 3</li>
          </ul>
        </div>
        <div className="skill-card" onClick={scrollToCard}>
          <h3>Additional Skill 2</h3>
          <ul>
            <li>Example 1</li>
            <li>Example 2</li>
            <li>Example 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
