import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css';
import { appProperty } from './configuration';
import App from './App';

const title: HTMLTitleElement = document.querySelector('title')!;
title.innerText = appProperty.name;

const root: HTMLElement = document.getElementById('root')!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
