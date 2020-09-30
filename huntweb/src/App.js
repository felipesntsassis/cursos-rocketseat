import React from 'react';

import './styles.css';

import Header from './components/Headers';
import Main from './pages/main'

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
