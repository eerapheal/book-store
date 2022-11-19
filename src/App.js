/* eslint-disable linebreak-style */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/navbar';
import Books from './components/book';
import Categories from './components/categories';
import './index.css';

const App = () => (
  <>
    <Router>
      <Header />

      <div className="center">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/category" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  </>
);

export default App;
