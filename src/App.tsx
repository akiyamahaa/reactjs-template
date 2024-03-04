import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { ABOUT_PATH, ROOT } from '@/routes/constant';
import RouterConfig from '@/routes/RouterConfig';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to={ROOT}>HOME</Link>
          <Link to={ABOUT_PATH}>ABOUT</Link>
        </li>
      </ul>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
    </div>
  );
}

export default App;
