import React from "react";
import styles from "./ResumeComponent.module.css";
import meImage from '../../images/DeniseCalif.jpg'; // adjust path if needed

export default function ResumeComponent() {
  return (
    <div className={styles.resumeContainer}>
      <img src={meImage} alt="My portrait" className="profile-img mb-4" />
      <h1>Your Name</h1>
      <p className="lead">STEM Educator | Product Design | AI Evangelist</p>
      {/* rest of your resume content */}
      <h1 className={styles.heading}>Denise R. James</h1>
      <p className={styles.contact}>Chicago, IL  <a href="mailto:denisetoo@gmail.com">denisetoo@gmail.com</a></p>

      <section className={styles.section + ' ' + styles.leftAligned}>
        <h2>Summary</h2>
        <p>
          Experienced and passionate data science leader with over 10 years of experience managing data science teams and projects. Skilled in data analysis, machine learning, statistics, and optimization with a proven record of delivering impactful solutions.
        </p>
      </section>

      <section className={styles.section + ' ' + styles.leftAligned}>
        <h2>Education</h2>
        <ul>
          <li>UCSC-Extension – Certificate in Algorithms (C++, C#, Android, Python)</li>
          <li>Udacity – Robotics with Machine Learning using C++ and Python</li>
          <li>Wayne State University – MS in Electronics and Computer Control Systems</li>
          <li>University of Illinois – BS in Electrical Engineering and Computer Science</li>
        </ul>
      </section>

      <section className={styles.section + ' ' + styles.leftAligned}>
        <h2>Skills</h2>
        <ul>
          <li>Programming: Python, C++, SQL, noSQL, C#, Java</li>
          <li>Machine Learning: TensorFlow, PyTorch, Scikit-learn, Pandas, Numpy</li>
          <li>Cloud & DevOps: AWS, Azure, Git, Jira</li>
          <li>Data Visualization: Power BI, Matplotlib</li>
          <li>Communication: Presentation, Storytelling, Writing</li>
        </ul>
      </section>

      <section className={styles.section + ' ' + styles.leftAligned}>
        <h2>Experience</h2>
        <h3>Freelance Consultant (2020 – Present)</h3>
        <ul>
          <li>Developed and deployed full stack applications using AWS Lambda, C#/.NET, and Angular.</li>
          <li>Mentored Udacity self-driving car students in machine learning.</li>
          <li>STEM instructor for elementary students.</li>
        </ul>

        <h3>Adjunct Instructor, Aurora University (2017 – 2020)</h3>
        <ul>
          <li>Taught Python, Java, and math courses to college students.</li>
          <li>Designed syllabus and curriculum.</li>
          <li>STEM instructor for elementary students.</li>
        </ul>

        <h3>Data Manager, Entegee (2013 – 2015)</h3>
        <ul>
          <li>Worked with Honda R&D and Case New Holland on embedded vehicle systems and diagnostics.</li>
          <li>Supported CAN/JTAG programming and validation of vehicle control modules.</li>
          <li>Mentored engineers and improved return hardware analysis processes.</li>
        </ul>

        <h3>STEM High School Teacher, DuPage High Schools (2012 – 2013)</h3>
        <ul>
          <li>Motivated students in Science, Math, and Engineering courses.</li>
        </ul>

        <h3>Controls Engineer, Fiat Powertrain (2008 – 2009)</h3>
        <ul>
          <li>Delivered diesel engine software versions for prototypes and production.</li>
          <li>Calibrated controllers using INCA, ETAS, CAN J1939.</li>
          <li>Facilitated global collaboration across U.S., Italy, and Switzerland.</li>
        </ul>

        <h3>Systems Engineer, Caterpillar (2007 – 2008)</h3>
        <ul>
          <li>Created SharePoint-based program information systems.</li>
          <li>Authored machine-level electrical/electronic specifications.</li>
        </ul>

        <h3>Product Design Engineer, Ford Motor Company</h3>
        <ul>
          <li>Nine years of experience in powertrain control development.</li>
        </ul>
      </section>

      <section className={styles.section + ' ' + styles.leftAligned}>
        <h2>Recommendations</h2>
        <blockquote>
          "Denise is highly capable and knowledgeable about system integration and vehicle control software... I can unequivocally recommend her based on quality of work and tenacity towards goals." – Richard Owens, Honda R&D
        </blockquote>
        <blockquote>
          "Denise is one out of five people in the country that can do the vehicle software integration she does... I highly recommend Denise and would enjoy working with her again." – Timothy Dixon, Honda R&D
        </blockquote>
      </section>
    </div>
  );
}
