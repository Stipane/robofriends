import React from 'react'; //Required in all .js files
import ReactDOM from 'react-dom/client'; // Connects the React Package to the DOM (Document Object Model)
import './index.css'; // All the CSS code for the page
import 'tachyons'; // CSS Modules for use in the project
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root')); // This displays our app.js in the index.html file line 31 (div id #root)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


