import React from "react";
import "./App.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <div className="hero-text">
          <span className="mobile-text">web. dev.</span>
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
            I&apos;m <strong>Hafeezz</strong> <em>a.k.a.</em> <strong>Hassain Saheb</strong>,
            <br /> a passionate full-stack web developer driven by the love for creating seamless
            digital experiences. With almost <strong>1.5 years</strong> of hands-on experience, I
            focus on building modern, efficient, and user-friendly web applications using
            cutting-edge technologies.
          </p>
          <p className="about-description">
            I continually hone my skills to deliver <strong>high-quality</strong> solutions. My
            expertise includes <strong>React</strong>, <strong>Next.js</strong>,{" "}
            <strong>Tailwind</strong>, <strong>Node.js</strong>, <strong>Angular</strong>, and{" "}
            <strong>Mongodb</strong>. I thrive in collaborative environments, enjoying the
            opportunity to learn from others while also sharing my knowledge and experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
