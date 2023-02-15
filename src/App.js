import Todo from "./component/todo"
import Box from '@mui/material/Box';
import './App.css'
export default function App() {
  
  return<Box sx={{
   display:"flex",
   justifyContent:"center",
   alignItems:"center", 
  height:"100vh",
  }}><Todo/></Box >
   
}
