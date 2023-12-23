import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App_xx from './App_xx';
import { BlogContextProvider_74 } from './BlogContext_74';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider_74>
    <App_xx /> 
    </BlogContextProvider_74>
  </React.StrictMode>
);
