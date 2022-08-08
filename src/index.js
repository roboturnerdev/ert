import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Board from './Board';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Board bishopPos={[1,1]} />
);

// right now it only draws the square
// we specify in the position not the rest