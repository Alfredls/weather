import { useNavigate } from "react-router-dom";

export const cityReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      let newState = state;
      state.length >= 12
        ? (newState = state.filter((todo) => todo.id !== state[11].id))
        : newState;
      return [action.payload, ...newState];

    case "delete":
      return state.filter((todo) => todo.id != action.payload);

    case "activeCard":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, active: true }
          : { ...todo, active: false }
      );
    default:
      return state;
  }
};
