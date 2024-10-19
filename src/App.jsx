import React from "react";
import "./App.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <div className="hero-text">
          <span className="mobile-text">web.dev</span>
          <span className="desktop-text">
            web. <br />
            dev.
          </span>
        </div>
      </div>
      <div className="about-section">
        <div className="about-content">
          <h2 className="about-title">About me</h2>
          <p>
            I&apos;m Hafeezz <em>a.k.a.</em> Hassain Saheb,
            <br /> a budding <strong>frontend developer</strong> who recently started my journey
            into web development, focusing on creating dynamic and engaging applications with{" "}
            <strong>React</strong> and <strong>Vite</strong>. <br />
            With <strong>1.5 years</strong> of experience in other areas, I'm excited to apply my
            skills to build user-friendly web applications.
          </p>
          <p className="about-description">
            I am committed to continuous learning and eager to embrace the latest frontend
            technologies that enhance user experiences. As I delve deeper into this field, I look
            forward to collaborating with others, sharing knowledge, and contributing to innovative
            projects that push the boundaries of what's possible on the web.
          </p>
        </div>
      </div>
    </div>
  );
}
