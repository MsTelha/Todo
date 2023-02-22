import { createSlice } from "@reduxjs/toolkit";

const initialData = { items: [], editItems: true, toggle: false };

const stateSlice = createSlice({
  name: "items",
  initialState: initialData,
  reducers: {

    showData(state, action) {
      console.log(action);
      state.items = action.data.data;
    },

    addedTodo(state, action) {
      console.log("fgdjgjffdfs");
      console.log(action.payload.id);
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

        state.items = newArr;
      } else {
        console.log(action.payload);
        state.items = [...state.items, action.data.data];
      }
    },

    deleteTodo(state, action) {
      state.items = state.items.filter((curr) => {
        return curr.id !== action.id;
      });
    },

    removeTodo(state) {
      state.items = [];
    },

    updateTodo(state) {
      console.log("gggggggggg");
      state.editItems = false;
    },

    toggleTodo(state) {
      state.toggle = !state.toggle;
    },

  },
});

export const stateActions = stateSlice.actions;
export default stateSlice;

// export const stateReducer = (state = initialData, action) => {
//   switch (action.type) {
//     case "show-data":
//       return {
//         items: [...action.data],
//         editItems: true,
//       };
//       break;
//     case "add-Todo":
//       let foundIndex = state.items.findIndex((curr) => {
//         return curr.id === action.payload.id;
//       });
//       console.log(foundIndex);

//       if (foundIndex >= 0) {
//         console.log(action.payload);

//         let test = state.items[foundIndex];
//         let obj = {
//           ...test,
//           data: action.payload.data,
//         };
//         let newArr = [...state.items];

//         //console.log(obj);
//         newArr[foundIndex] = obj;

//         //console.log(newArr);

//         return { items: newArr, editItems: true };
//       } else {
//         //console.log(action.payload);
//         return {
//           items: [...state.items, action.payload],
//           editItems: true,
//         };
//       }
//       break;

//     case "delete-Todo":
//       return {
//         items: state.items.filter((curr) => {
//           return curr.id !== action.id;
//         }),
//         editItems: true,
//       };
//       break;

//     case "remove-Todo":
//       return {
//         items: [],
//         editItems: true,
//       };
//       break;

//     case "update-Todo":
//       return { items: state.items, editItems: false };
//       break;
//       case "toggle":
//         return {
//           toggle: !state.toggle,
//             items: state.items,
//             editItems: true,
//         }
//       break;
//     default:
//       return state;
//   }
// };
