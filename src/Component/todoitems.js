//import { useContext } from "react";
//import { metadata } from "./todo";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {Box, Card, Chip } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main:'#ba000d',
    },
    primary: {
      main:'#ffd740',
    },
    success: {
      main:'#18ffff',
    }
  },
});

// import Box from '@mui/material/Box';
export default function TodoItems(props) {
  //const { removeHandler, editHandler, deleteHandler, items} = useContext(metadata);
  const addTodo = useSelector((state) => state.items);

  //console.log(addTodo);
  //console.log(items);
  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      {addTodo.map((val) => {
        return (
          <Card sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            marginTop: 2,
            height:40,
            width:350,
          }} variant="outlined" key={val.id}>
            {val.data}
            {/* <span style={{ display: "flex" }}> */}
              {/* <button
                className="edt-btn"
                onClick={() => props.editHandler(val.id)}
              >
                Edit
              </button> */}
              <Stack direction="row" spacing={-1}>
              <ThemeProvider  theme={theme}>
                <IconButton color="primary" onClick={() => props.editHandler(val.id)}>
                  <EditIcon />
                </IconButton>
                {/* <button
                className="dlt-btn"
                onClick={() => props.deleteHandler(val.id)}
              >
                Delete
              </button> */}
                <IconButton
                  color="secondary"
                  onClick={() => props.deleteHandler(val.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ThemeProvider>
              </Stack>
            {/* </span> */}
          </Card>
        );
      })}
      {/* <div className="footer"> */}
      {/* <button className="footer-btn" onClick={props.removeHandler}>
            Clear List
          </button> */}
       <ThemeProvider theme={theme}>  
      <Stack justifyContent="center" alignItems="center" my={2} spacing={2}>
        <Chip color="success" label="Clear List" onClick={props.removeHandler} />
      </Stack>
      {/* </div> */}
      </ThemeProvider> 
    </Box>
  );
}
