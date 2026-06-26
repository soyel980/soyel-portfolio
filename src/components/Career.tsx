import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Course Completed</h4>
                <h5>Code with Harry</h5>
              </div>
              <h3>PAST</h3>
            </div>
            <p>
              Completed Data Science certification. Gained foundational knowledge 
              in Python, numerical computing, and machine learning techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student</h4>
                <h5>Brainware University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing a B.Tech degree in Computer Science Engineering 
              with a specialization in Data Science. Actively learning and building 
              skills in Software Development, Artificial Intelligence, and Machine Learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
