const initState = {
  users: [
    { id: 1, name: "John" },
    { id: 2, name: "Tony" },
  ],
  posts: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "deleteUser":
      // code block
      let users = state.users;
      users = users.filter((user) => user.id !== action.payload.id);
      return { ...state, users };

    case "AddUser":
      // code block
      state.users.push(action.payload);
      return state;

    default:
      // code block
      return state;
  }
};

export default rootReducer;
