import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import SculptureList from './SculptureList';

// import SculptureList from './SculptureList';
import Objects from './Objects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App title={data[1]}/>
    <App title={data[2]}/> */}
    <div className='render'>

    <SculptureList/>
    <SculptureList/>
{/* <Objects/> */}

    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
