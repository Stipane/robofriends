import React from 'react';
import ReactDOM from 'react-dom/client'; // Connects the React Package to the DOM (Document Object Model)
import './index.css'; // All the CSS code for the page
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root')); // This displays our app.js in the index.html file line 31 (div id #root)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
