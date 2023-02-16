import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, delHandler, addHandler, editingHandler } from "../redux/actions/todoActions";
import TodoItems from "./todoitems";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";

let editId;

function Todo() {
  const dispatch = useDispatch();
  const editTodo = useSelector((state) => state.editItems);
  const stateToggle = useSelector((state) => state.toggle);
  const [input, setInput] = useState("");
  const addTodo = useSelector((state) => state.items);

  ////////////////////////////////////////////////   ChangeHandler ////////////////////////////////////////////////////
  const onChange = (event) => {
    setInput(event.target.value);
    console.log("testing");
  };

  /////////////////////////////////////////////      deleteHandler /////////////////////////////////////////////////////

  const deleteHandler = (id) => {
    dispatch(delHandler(id));
  };

  /////////////////////////////////////////////      removeHandler /////////////////////////////////////////////////////

  const removeHandler = () => {
    dispatch({
      type: "remove-Todo",
    });
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
  };

  /////////////////////////////////////////////      clickaddHandler /////////////////////////////////////////////////////

  const clickHandler = () => {
    if (!input) {
      alert("plz Enter data first");
    }
    /////////////////////////////////////////////////////// To Edit //////////////////////////////////////////////////////
    else if (input && !editTodo) {
      dispatch(editingHandler(editId, input));
      setInput("");
    }
    /////////////////////////////////////////////////////// Add Todo //////////////////////////////////////////////////////
    else {
      console.log("else");
       dispatch(addHandler(input));  
      setInput("");
    }
  };

  useEffect(() => {
    dispatch(getData());
  }, [stateToggle]);

  return (
    <Box
      sx={{
        width: 400,
        minHeight: 600,
        maxHeight: 700,
        overflow: "auto",
        borderRadius: 2,
        backgroundColor: "secondary.main",
      }}
    >
      <div>
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
            <Fab color="secondary" onClick={clickHandler}>
              <EditIcon />
            </Fab>
          )}
        </Stack>
      </div>
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
