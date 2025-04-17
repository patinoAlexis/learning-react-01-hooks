const initialState = [
  {
    id: 1,
    todo: "Mi primer tarea",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action?.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return initialState;
};

let todos = todoReducer();
const newTodoOption = {
  id: 2,
  todo: "new option",
  done: false,
};
const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodoOption,
};
todos = todoReducer(todos, addTodoAction);

console.log(todos);
