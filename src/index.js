import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { GameContainer } from './components/GameContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameContainer />
  </React.StrictMode>
);
