import React from "react";
import "./LandingPage.css"; // Import the CSS file

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="half-container dark-bg">
        <div className="title-container">
          <span className="mobile-title">web. dev.</span>
          <span className="desktop-title">
            web. <br />
            dev.
          </span>
        </div>
      </div>
      <div className="half-container">
        <div className="content-container">
          <h2 className="heading">about me</h2>
          <p>
            i&apos;m <strong>hafeezz</strong> <em>a.k.a.</em> <strong>Hassain</strong>,
            <br /> a passionate full-stack web developer driven by the love for creating seamless
            digital experiences. with almost <strong>1.5 years</strong> of hands-on experience, i
            focus on building modern, efficient, and user-friendly web applications using
            cutting-edge technologies.
          </p>
          <p className="paragraph">
            i continually hone my skills to deliver <strong>high-quality</strong> solutions. my
            expertise includes <strong>react</strong>, <strong>next.js</strong>,{" "}
            <strong>tailwind</strong>, <strong>node.js</strong>, <strong>angular</strong>, and{" "}
            <strong>mongodb</strong>. i thrive in collaborative environments, enjoying the
            opportunity to learn from others while also sharing my knowledge and experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

