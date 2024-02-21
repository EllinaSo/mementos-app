export default (store = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE_POST':
      return [...store, action.payload];
    case 'UPDATE_POST':
      return store.map((post) => (post._id === action.payload._id ? action.payload : post));
    default:
      return store;
  }
};
