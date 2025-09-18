import React, { useEffect, useState } from 'react';
import objectsData from '../data/objects.json'; 
import './Object.css';

export default function Object() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    setObjects(objectsData);
  }, []);

  return (
    <section className="object-section">
      <h2 className="object-title">SHOULD WHO LEARN PROGRAMING IN FPT APTECH?</h2>
      <div className="object-cards">
        {objects.map((obj, idx) => (
          <div className="object-card" key={idx}>
            <img src={obj.image} alt={obj.alt} className="object-img" />
            <h3 className="object-card-title">{obj.title}</h3>
            <p>You want to pursue information technology, want to study in a professional programming training environment, with a systematic program and guaranteed output.</p>
          </div>
        ))}
      </div>
    </section>
  );
}