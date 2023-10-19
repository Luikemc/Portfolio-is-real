// ProgressBar.js
import React from 'react';
import './ProgressBar.css';

function ProgressBar({ percent }) {
  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: `${percent}%` }}></div>
    </div>
  );
}

export default ProgressBar;
