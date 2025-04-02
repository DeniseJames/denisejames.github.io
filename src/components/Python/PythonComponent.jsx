import React from 'react';
import { Link } from 'react-router-dom';

const PythonComponent = () => {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="display-6 fw-bold mb-4">Algorithms and Python Programming</h2>

          <div className="mb-4">
            <h4 className="fw-semibold">Course Overview</h4>
            <p>
              This course provides students with a strong foundation in computational thinking and problem-solving
              through the lens of Python programming. Students will explore core algorithmic concepts such as sorting,
              searching, recursion, and optimization while developing real-world coding skills. Emphasis is placed on
              logical reasoning, clean code practices, and project-based learning to build confidence and fluency in programming.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">Course Objectives</h4>
            <ul>
              <li>Understand and implement common algorithms and data structures</li>
              <li>Write, test, and debug Python programs using industry-standard practices</li>
              <li>Apply algorithmic thinking to solve complex problems efficiently</li>
              <li>Explore the role of algorithms in areas like gaming, automation, and AI</li>
              <li>Build portfolio-ready projects that demonstrate coding proficiency</li>
            </ul>
          </div>

          <div>
            <h4 className="fw-semibold">Who Should Take This Course</h4>
            <p>
              Designed for students with an interest in technology, mathematics, or problem-solving. Ideal as a first programming
              course or a stepping stone to AP Computer Science or AI studies.
            </p>
          </div>

          {/* Back Button */}
          <div className="text-center mt-5">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PythonComponent;
