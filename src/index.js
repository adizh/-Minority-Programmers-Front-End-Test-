import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './index.css';
import {Provider} from 'react-redux'
import store from './redux';
import './components/Media/Media.css'
ReactDOM.render(
  <React.StrictMode>
<Provider store={store} > 
<Root />
</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);