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

export default function TodoItems(props) {
  const addTodo = useSelector((state) => state.items);

  //console.log(addTodo);
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
              <Stack direction="row" spacing={-1}>
              <ThemeProvider  theme={theme}>
                <IconButton color="primary" onClick={() => props.editHandler(val.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => props.deleteHandler(val.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ThemeProvider>
              </Stack>
          </Card>
        );
      })}
       <ThemeProvider theme={theme}>  
      <Stack justifyContent="center" alignItems="center" my={2} spacing={2}>
        <Chip color="success" label="Clear List" onClick={props.removeHandler} />
      </Stack>
      </ThemeProvider> 
    </Box>
  );
}
