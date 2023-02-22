// import axios from "axios";
// import { stateActions } from "../reducer/stateReducer";
// export const getData = () => {
//   return (dispatch) => {
//     axios.get("http://localhost:3000/posts").then((res) => {
//       dispatch(stateActions.showData(res.data));
//     });
//   };
// };

// export const deleteTodo = (id) => {
//   console.log(id);
//   return (dispatch) => {
//     console.log(id);
//     axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
//       dispatch(stateActions.toggleTodo());
//     });
//   };
// };

// export const addedTodo = (input) => {
//   const value = {
//     data: input,
//   };
//   return (dispatch) => {
//     axios.post("http://localhost:3000/posts", value).then(() => {
//       dispatch(stateActions.toggleTodo());
//     });
//   };
// };

// export const updateTodo = (editId, input) => {
//   console.log("else if");
//   const value = {
//     data: input,
//   };
//   return (dispatch) => {
//     axios.put(`http://localhost:3000/posts/${editId}`, value).then(() => {
//       dispatch(stateActions.toggleTodo());
//     });
//   };
// };
