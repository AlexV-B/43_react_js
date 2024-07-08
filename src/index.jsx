import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Lesson02 from './lessons/lesson_02/Lesson02';
import LoginForm from './components/LoginForm/LoginForm';
// import Lesson01 from './lessons/lesson_01/Lesson01';
// Главный корневой файл REACT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    <App />
    {/* <Lesson01 /> */}
    {/* <Lesson02 /> */}
    <LoginForm />
 </>
  

);
