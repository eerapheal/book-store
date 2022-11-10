import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  return (
    <div className="boos">
      <h3>{title}</h3>
      <span>{author}</span>
      <button type="submit">Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
