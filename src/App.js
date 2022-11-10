import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
