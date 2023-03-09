import React, { createElement } from 'react';
import '../dist/index.css';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const app = document.createElement('div');
createRoot(app).render(createElement(App));
document.body.appendChild(app);

