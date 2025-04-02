import React from 'react';
import { Link } from 'react-router-dom';

const ComputerScienceComponent = () => {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="display-6 fw-bold mb-4">Teaching the Future of Computer Science</h2>

          <div className="mb-4">
            <h4 className="fw-semibold">Course Overview</h4>
            <p>
              Equip students with the skills to lead in a rapidly evolving digital world.
              Our computer science program emphasizes hands-on learning in emerging fields such as
              artificial intelligence and robotics, fostering critical thinking, creativity, and collaboration.
              By connecting foundational coding skills with real-world applications, we prepare learners
              to use technology — and shape its future.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">Key Features</h4>
            <ul>
              <li>Hands-on projects in AI, robotics, and software development</li>
              <li>Emphasis on real-world problem-solving and design thinking</li>
              <li>Exposure to modern tools and programming environments</li>
              <li>Opportunities to develop teamwork and communication skills</li>
              <li>Integration of ethical and societal impacts of computing</li>
            </ul>
          </div>

          <div>
            <h4 className="fw-semibold">Who Should Take This Course</h4>
            <p>
              Ideal for students interested in innovation, engineering, or digital creativity.
              This course serves as a gateway to future STEM opportunities, including AP Computer Science,
              college pathways, and careers in tech.
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

export default ComputerScienceComponent;
