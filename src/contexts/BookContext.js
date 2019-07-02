import React, { useEffect, useReducer, createContext } from 'react';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem('books');
    console.log(localData);
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
