import uuid from 'uuid';
export const BookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD BOOK':
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuid.v4() }
      ];
    case 'REMOVE BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
