import { useState, useEffect } from 'react';
import './opening-message.css';

const OpeningMessage = () => {
  const speed = 80;
  const text =
    "Hi! 👋 I'm Arasan, a Senior Software Engineer with over 6 years of experience in the Aerospace and Healthcare industries.";
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const textArray = Array.from(text);

  useEffect(() => {
    if (currentIndex < textArray.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + textArray[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, speed, textArray]);

  return (
    <div className="opening-message">
      <h1>{currentText}</h1>
    </div>
  );
};

export default OpeningMessage;
