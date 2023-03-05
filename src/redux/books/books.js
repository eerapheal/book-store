const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const initialState = [
  {
    id: 0,
    title: 'React-Redux',
    author: 'RALPH',
  },
  {
    id: 1,
    title: 'JS FILE',
    author: 'RALPH',
  }, {
    id: 2,
    title: 'HTML CSS',
    author: 'Author C',
  },
];

const handleBook = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: action.id,
        title: action.title,
        author: action.author,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default handleBook;
export { addBook, removeBook };
