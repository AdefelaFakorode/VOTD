// src/components/VerseDisplay.js
import React, { useState, useEffect } from 'react';

const VerseDisplay = () => {
  const [verse, setVerse] = useState('');

  useEffect(() => {
    // Fetch the verse of the day
    fetch('https://bible-api.com/?random=verse', {mode: "no-cors"})
      .then(response => response.json)
      .then((data) => setVerse(data.text))
      .then(data => console.log(JSON.stringify(data)) )
     
     // .catch((error) => console.error('Error fetching verse:', error));
  }, []);

  return (
    <div>
      <h2>Verse of the Day</h2>
      <p>{verse}</p>
    </div>
  );
};

export default VerseDisplay;
