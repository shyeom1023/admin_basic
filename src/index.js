import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';

// import MS_0100 from './pages/MS/MS_0100';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
    </BrowserRouter>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
