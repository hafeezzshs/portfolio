import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-section__left">
        <div className="about-section__heading">web.</div>
      </div>
      <div className="about-section__right">
        <div className="about-section__content">
          <h2 className="about-section__title">About me</h2>
          <p>
            I&apos;m Hafeezz <em>a.k.a.</em> Hassain Saheb,
            <br /> a budding <strong>frontend developer</strong> who recently started my journey
            into web development, focusing on creating dynamic and engaging applications with{" "}
            <strong>React</strong> and <strong>Vite</strong>. <br />
            With <strong>1.4 years</strong> of experience in other areas, I'm excited to apply my
            skills to build user-friendly web applications.
          </p>
          <p className="about-section__paragraph">
            I am committed to continuous learning and eager to embrace the latest frontend
            technologies that enhance user experiences. As I delve deeper into this field, I look
            forward to collaborating with others, sharing knowledge, and contributing to innovative
            projects that push the boundaries of what's possible on the web.
          </p>
        </div>
      </div>
    </section>
  );
}
