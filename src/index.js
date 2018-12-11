import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductList from './Products/ProductList';
import ProductPage from './Products/ProductPage';



ReactDOM.render(<ProductList></ProductList>,document.getElementById("list"))
