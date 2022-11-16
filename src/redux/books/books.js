const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialstate = {
  books: [],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => {
  typy: REMOVE_BOOK,
  payload
};

const booksReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    default: return state;
  }
};
const removeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
};

export default booksReducer;
