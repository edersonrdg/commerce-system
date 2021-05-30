import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div id="main">
        <Sidebar />
        <Routes />
      </div>
    </BrowserRouter>
  )
}

export default App;
