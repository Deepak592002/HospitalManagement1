// App.js
import React from 'react';
import LeftSidebar from '../src/components/LeftSidebar';
import MainContent from '../src/components/MainContent';
// import RightSidebar from './RightSidebar';
import './App.css'; // Import your CSS file for styling

const App = () => {
    return (
      <div className="flex">
      <MainContent/>
  </div>
    );
}

export default App;
