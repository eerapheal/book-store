import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Header from './components/Header';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
