import React from 'react';
import { Root, Routes } from 'react-static';
import { Link } from '@reach/router';
import { Provider } from 'react-redux';
import store from './redux';
import './app.css';

function App() {
  return (
    <Root>
      <Provider store={store}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div className="content">
          <Routes />
        </div>
      </Provider>
    </Root>
  );
}

export default App;
