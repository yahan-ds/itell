// components/QuestionInput.tsx

import React, { useState } from 'react';

interface QuestionInputProps {
  question: string;
  onAnswerSubmit?: (answer: string) => void;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ question, onAnswerSubmit }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnswerSubmit?.(answer);
  };

  const containerStyle: React.CSSProperties = {
    marginLeft: '25px',  
    marginRight: '25px'  
  };


  const inputSectionStyle: React.CSSProperties = {
    border: '1px solid grey',
    padding: '8px',
    borderRadius: '5px',
    display: 'flex', // Use flexbox for horizontal alignment
    alignItems: 'center' // Align items vertically in the center
  };

  const buttonStyle: React.CSSProperties = {
    border: '1px solid #d0d0d0',
    padding: '5px 10px',
    borderRadius: '5px',
    marginLeft: '10px' // Space between the input and the button
  };

  return (
    <div style={containerStyle}>
    <p>{question}</p>
      <div style={inputSectionStyle}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%' }}>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Your answer here..."
            style={{ flex: 1 }} 
          />
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default QuestionInput;
