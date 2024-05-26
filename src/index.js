/* eslint-disable no-undef */
import { StrictMode } from 'react';
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'

  // Поиск элемента root в DOM
  const container = document.getElementById('root');
  // Создание корневого элемента с использованием createRoot
  const root = createRoot(container);
  
  // Используется метод render на корневом элементе для рендеринга приложения
  root.render(
    <StrictMode>
        <App />
    </StrictMode>);