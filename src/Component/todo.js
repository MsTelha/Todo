//import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";
import TodoItems from "./todoitems";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
//import Button from '@mui/material/Button';

//export const metadata = createContext("");

let editId;

function Todo() {
  const dispatch = useDispatch();
  const editTodo = useSelector((state) => state.editItems);
  const [input, setInput] = useState("");
  const addTodo = useSelector((state) => state.items);

  // const [items, setItems] = useState([]);
  // const [editItem, setEditItem] = useState(true);
  // const [editedItem, setEditedItem] = useState(null);

  ////////////////////////////////////////////////   ChangeHandler ////////////////////////////////////////////////////
  const onChange = (event) => {
    setInput(event.target.value);
    // console.log("testing");
  };

  /////////////////////////////////////////////      deleteHandler /////////////////////////////////////////////////////

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
      getData();
        });
// dispatch({
//         type: "delete-Todo",
//       id:id,      
//       });
    // const updateditems = items.filter((val) => {
    //   return index !== val.id;
    // });
    // setItems(updateditems);
  };

  /////////////////////////////////////////////      removeHandler /////////////////////////////////////////////////////

  const removeHandler = () => {
    dispatch({
      type: "remove-Todo",
    });
    //setItems([]);
  };

  /////////////////////////////////////////////      editHandler /////////////////////////////////////////////////////

  const editHandler = (id) => {
    editId = id;
    let test = addTodo.filter((curr) => {
      return curr.id === id;
    });
    //console.log(test[0].data);
    setInput(test[0].data);
    dispatch({
      type: "update-Todo",
      payload: {
        id: id,
      },
    });
    // const editedItem = items.find((value) => {
    //   return value.id === id;
    // });
    // console.log(editedItem);
    // setEditItem(false);
    // setInput(editedItem.name);
    // setEditedItem(id);
  };

  /////////////////////////////////////////////      clickaddHandler /////////////////////////////////////////////////////
  //const dummy = [1, 2, 3, 4, 5];

  const clickHandler = () => {
    if (!input) {
      alert("plz Enter data first");
    } else if (input && !editTodo) {
      console.log("else if");
      const value = {
        data:input
      }
      axios.put(`http://localhost:3000/posts/${editId}`,value).then(() => {
        getData();
        });
      setInput(""); 
      // dispatch({
      //   type: "add-Todo",
      //   payload: {
      //     data: input,
      //     id: editId,
      //   },
      // });
      setInput("");
    } else {
      console.log("else");
      const value = {
        data:input
      }
      axios.post("http://localhost:3000/posts",value).then(() => {
        getData();
        });
      setInput("");      
    }
    // if (!input) {
    //   //alert("plz Enter data first");
    // } else if (input && !editItem) {
    //   setItems(
    //     items.map((val) => {
    //       if (val.id === editedItem) {
    //         return { ...val, title: input };
    //       }
    //       return val;
    //     })
    //   );
    //   setEditItem(true);
    //   setInput("");
    //   setEditedItem(null);
    // } else {
    //   let itemslist = { id: new Date().getTime().toString(), title: input };
    //   setItems([...items, itemslist]);
    //   setInput("");
    // }
  };
  /////////////////////////////////////////////     getdatabyApi /////////////////////////////////////////////////////
  const getData = () => {
    axios.get("http://localhost:3000/posts").then((res) => {
      dispatch({
        type: "show-data",
        data: res.data
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ 
      width: 400,
      minHeight: 600,
      maxHeight:700,
      overflow: "auto",
      borderRadius:2,
      backgroundColor: 'secondary.main'}}>
      <div>
        {/* <div className="text">Add Your Todo List Here!!</div> */}
        <Typography
          variant="h5"
          display="flex"
          justifyContent="center"
          color="white"
          mt={2}
        >
          Add Your Todo List Here!!
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={2}
          spacing={2}
        >
          <TextField
            sx={{ width: "30ch" }}
            variant="filled"
            color="success"
            placeholder="Add Items In Todo List"
            value={input}
            onChange={onChange}
          />
          {editTodo ? (
            <Fab color="success" aria-label="add" onClick={clickHandler}>
              <AddIcon />
            </Fab>
          ) : (
            //<Button variant="contained" size="small" onClick={clickHandler}>Add Todo</Button>
            // <button className="button" onClick={clickHandler} >
            //   Add Todo
            // </button>
            // <button className="button" onClick={clickHandler}>
            //   Edit
            // </button>
            <Fab color="secondary" onClick={clickHandler}>
              <EditIcon />
            </Fab>
          )}
        </Stack>
      </div>
      {/* /////////////////////////////////// useContext ///////////////////////////////////////////////////// */}
      {/* <div>
        {" "}
        <metadata.Provider
          value={{
            removeHandler: { removeHandler },
            editHandler: { editHandler },
            deleteHandler: { deleteHandler },
            items: items,
            editItem: editItem,
          }}
        >
          <TodoItems />
        </metadata.Provider>
      </div> */}
      <div>
        <TodoItems
          removeHandler={removeHandler}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </Box>
  );
}
export default Todo;
