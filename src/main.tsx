import './assets/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import appProperty from './configuration/appProperty';

const title: HTMLTitleElement = document.querySelector('title')!;
title.innerText = appProperty.name;

const root: HTMLElement = document.getElementById('root')!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
