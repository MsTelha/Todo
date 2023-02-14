import { createStore } from "redux";

const initialData = { items: [], editItems: true };

const stateReducer = (state = initialData, action) => {
  switch (action.type) {
    case "add-Todo":
      let foundIndex = state.items.findIndex((curr) => {
        return curr.id === action.payload.id;
      });
      console.log(foundIndex);

      if (foundIndex >= 0) {
        console.log(action.payload);

        let test = state.items[foundIndex];
        let obj = {
          ...test,
          data: action.payload.data,
        };
        let newArr = [...state.items];

        console.log(obj);
        newArr[foundIndex] = obj;

        console.log(newArr);

        return { items: newArr, editItems: true };
      } else {
        return {
          items: [...state.items, action.payload],
          editItems: true,
        };
      }
      break;

    case "delete-Todo":
      return {
        items: state.items.filter((curr) => {
          return curr.id !== action.id;
        }),
        editItems: true,
      };
      break;

    case "remove-Todo":
      return {
        items: [],
        editItems: true,
      };
      break;

    case "update-Todo":
      return { items: state.items, editItems: false };
      break;

    default:
      return state;
      break;
  }
};
const store = createStore(stateReducer);

export default store;
