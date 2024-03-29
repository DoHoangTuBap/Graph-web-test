// App.js
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App background-container">
      <Header />
      {/* <Navbar /> */}
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
