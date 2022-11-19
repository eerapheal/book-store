/* eslint-disable linebreak-style */
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/book/book';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const addNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Action',
    };
    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
  };

  const titleInput = (e) => {
    setTitle(e.target.value);
  };
  // eslint-disable-next-line
  console.log(title);
  const authorInput = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={addNewBook}>
      <input type="text" placeholder="Enter Title" onChange={titleInput} value={title} />
      <input type="text" placeholder="Enter Author" onChange={authorInput} value={author} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Form;
