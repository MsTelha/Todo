import axios from "axios";
export const getData = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/posts").then((res) => {
      dispatch({
        type: "show-data",
        data: res.data,
      });
    });
  };
};

export const delHandler = (id) => {
  console.log(id);
  return (dispatch) => {
    console.log(id);
    axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
      dispatch({
        type: "toggle",
      });
    });
  };
};

export const addHandler = (input) => {
  const value = {
    data: input,
  };
  return (dispatch) => {
    axios.post("http://localhost:3000/posts", value).then(() => {
      dispatch({
        type: "toggle",
      });
    });
  };
};

export const editingHandler = (editId, input) => {
  console.log("else if");
  const value = {
    data: input,
  };
  return (dispatch) => {
    axios.put(`http://localhost:3000/posts/${editId}`, value).then(() => {
      dispatch({
        type: "toggle",
      });
    });
  };
};
