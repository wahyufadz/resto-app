import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
