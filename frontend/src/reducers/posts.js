export default (store = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE_POST':
      return [...store, action.payload];
    default:
      return store;
  }
};
