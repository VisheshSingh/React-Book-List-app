import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
