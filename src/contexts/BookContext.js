import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'the winds of glory', author: 'Shaun Pelling', id: uuid.v4() },
    { title: 'the unforgotten battle', author: 'Kooper Troopa', id: uuid.v4() }
  ]);

  // Add a book
  const addBook = (title, author) => {
    setBooks([...books, { title, author }]);
  };

  // Remove a book
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
