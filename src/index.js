import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';//https://www.npmjs.com/package/react-bulma-components
import ProductsLayout from './Products/Components/ProductsLayout'

ReactDOM.render(
  <ProductsLayout/>,
  document.getElementById('root')
);