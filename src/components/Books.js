import React from 'react';
import Book from './Book';
import AddNewBook from './AddNewBook';

const Books = () => (
  <>
    <div className="booksPlace">
      <Book title="React practice" author="Ralph" />
    </div>
    <AddNewBook />
  </>
);

export default Books;
