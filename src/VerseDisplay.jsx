// src/components/VerseDisplay.js
import React, { useState, useEffect } from 'react';

const VerseDisplay = () => {
  const [verse, setVerse] = useState('');

  useEffect(() => {
    const Passage = async () => {
      await fetch(`https://labs.bible.org/api/?passage=random&type=json`)
        .then((res) => res.json())
        .then((data) => {
         console.log(data[0].text);
         setVerse(data)
        });
    };
    Passage();
  }, []);

  return (
    <div>
      <h2>Verse of the Day</h2>
      <p>{verse[0].text}</p>
    </div>
  );
};

export default VerseDisplay;
