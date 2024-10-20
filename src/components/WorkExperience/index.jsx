import "./WorkExperience.css";

export default function WorkExperience() {
  return (
    <section className="work-experience">
      <div className="content-section">
        <div className="content-wrapper">
          <h2 className="section-heading">Work Experience</h2>
          <div className="experience-overall">
            <div className="experience-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="experience-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Overall experience: 1 years 4 months</span>
            </div>
          </div>

          <div className="experience-list">
            <div className="experience-item">
              <h3 className="job-title">Software Developer</h3>
              <div className="experience-dates">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="experience-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>July 2023 - Present</span>
              </div>
            </div>
          </div>

          <div className="experience-company">
            <div className="experience-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="experience-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>
                Company:{" "}
                <a
                  href="https://tcs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-link"
                >
                  Tata Consultancy Services
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="visual-section">
        <div className="visual-text">dev.</div>
      </div>
    </section>
  );
}
