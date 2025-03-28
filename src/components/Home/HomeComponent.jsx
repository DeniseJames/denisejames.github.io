import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-600">Denise James</h1>
          <p className="text-xl mt-2">STEM Educator | Data Scientist | Engineer</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Welcome!</h2>
          <p>
            I'm <strong>Denise R. James</strong> — a passionate STEM educator and experienced data science leader.
            With over a decade of hands-on experience in engineering, teaching, and machine learning, I’m committed
            to inspiring students, mentoring future technologists, and solving real-world problems with innovative
            data solutions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">About Me</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>📍 Based in Chicago, IL</li>
            <li>🎓 MS in Electronics & Computer Control Systems, BS in Electrical Engineering</li>
            <li>💻 Skilled in Python, C++, SQL, AWS, Power BI, and machine learning frameworks</li>
            <li>👩🏽‍🏫 Former STEM teacher at DuPage High Schools and adjunct instructor at Aurora University</li>
            <li>🚗 Automotive systems engineering background with Honda, Caterpillar, and Fiat</li>
            <li>🌱 Dedicated mentor and STEM advocate for students of all ages</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">What I Do</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>STEM Instruction – Teaching programming, robotics, and engineering fundamentals to young minds</li>
            <li>Freelance Consulting – Delivering full-stack applications using AWS and modern frameworks</li>
            <li>Data Science – From embedded systems to predictive modeling, I build and analyze solutions that matter</li>
            <li>Mentoring – Supporting learners in self-driving car tech and machine learning (Udacity mentor)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Skills Snapshot</h2>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-6">
              <li>Programming: Python, C++, SQL, noSQL, C#, Java</li>
              <li>Cloud & Tools: AWS, Azure, Git, Jira</li>
            </ul>
            <ul className="list-disc pl-6">
              <li>Visualization: Power BI, Matplotlib</li>
              <li>Frameworks: TensorFlow, PyTorch, Scikit-learn</li>
              <li>Teaching: Curriculum design, college and K–12 instruction</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Projects</h2>
          <ul className="list-disc pl-6">
            <li>
              <a href="http://www.denisejames.dev" className="text-blue-600 hover:underline" target="_blank">denisejames.dev</a>
            </li>
            <li>
              <a href="http://www.goop.dev" className="text-blue-600 hover:underline" target="_blank">goop.dev</a>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Testimonials</h2>
          <blockquote className="border-l-4 border-indigo-300 pl-4 italic mb-4">
            “Denise is one of the top software integrators in the country… She kept our launch on track and solved issues globally.”
            <br />
            — <strong>Timothy Dixon, Honda R&D Americas</strong>
          </blockquote>
          <blockquote className="border-l-4 border-indigo-300 pl-4 italic">
            “She provided extraordinary support and consistently improved our processes.”
            <br />
            — <strong>Richard Owens, Honda R&D</strong>
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Contact</h2>
          <ul className="list-none space-y-1">
            <li>📧 <a href="mailto:denisetoo@gmail.com" className="text-blue-600 hover:underline">denisetoo@gmail.com</a></li>
            <li>🌍 Chicago, IL</li>
            <li>📱 510-248-9518</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
