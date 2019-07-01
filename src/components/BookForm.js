import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
      }}
      className="book-form"
    >
      <input
        type="text"
        required
        placeholder="book title..."
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        required
        placeholder="book author..."
        id="author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default BookForm;
