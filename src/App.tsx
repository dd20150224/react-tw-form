import React from 'react';
import './App.css';
import Toolbar from './components/layout/toolbar';
import SidePanel from './components/layout/sidePanel';
import Content from './components/content';

function App() {
  return (
    <div className="flex flex-col h-full">
      <Toolbar />
      <div className="grow bg-green-200 flex flex-row">
        <SidePanel/>
        <div className="grow bg-red-300 p-1">
          <Content/>
        </div>
      </div>
    </div>
  )
}

export default App;
