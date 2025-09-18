import React, { useEffect, useState } from 'react';
import './Subject.css';
import subjectsData from '../data/subjects.json'; 

export default function Subject() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    setSubjects(subjectsData);
  }, []);

  return (
    <section className="subject-section">
      <h2 className="subject-title">WHAT IS THE COURSE PROGRAM?</h2>
      <div className="subject-icons">
        {subjects.map((subject, idx) => (
          <img
            key={idx}
            src={subject.image}
            className="subject-icon"
          />
        ))}
      </div>
      <p className="subject-desc">
        With a program design that includes 04 semesters with many important technologies such as ReactJS, PHP, Python, .NET Core, Spring boot brings learners to the world of programming quickly, most effectively. After graduation, students are confident in front of employers with 4 project semesters with quality, practical products, students will definitely score points.
      </p>
    </section>
  );
}