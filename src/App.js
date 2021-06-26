import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* App body */}
      <div className="app__body">
        <Sidebar />
      </div>
      {/* sidebar */}
      {/* feed */}
      {/* widgets */}

    </div>
  );
}

export default App;
