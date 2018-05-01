import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker'
import Posts from './Posts';

ReactDOM.render(<Posts/>, document.getElementById('root'));
registerServiceWorker()
