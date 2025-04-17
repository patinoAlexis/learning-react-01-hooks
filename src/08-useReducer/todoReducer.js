export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "add-todo":
      return [...initialState, action.payload];
    case "delete-todo":
      return initialState.filter((item) => item.id !== action.payload);
    case "finish-todo":
      return initialState.map((item) => {
        if (item.id === action.payload) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    default:
      return initialState;
  }
};
