import { useEffect, useState, createContext } from "react";
import axios from "axios";
import "./Todo.css";
import TodoItems from "./todoitems";

export const metadata = createContext("");
function Todo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(true);
  const [editedItem, setEditedItem] = useState(null);

  ////////////////////////////////////////////////   ChangeHandler ////////////////////////////////////////////////////
  const onChange = (event) => {
    setInput(event.target.value);
   // console.log("testing");
  };

  /////////////////////////////////////////////      deleteHandler /////////////////////////////////////////////////////

  const deleteHandler = (index) => {
    const updateditems = items.filter((val) => {
      return index !== val.id;
    });
    setItems(updateditems);
  };

  /////////////////////////////////////////////      removeHandler /////////////////////////////////////////////////////

  const removeHandler = () => {
    setItems([]);
  };

  /////////////////////////////////////////////      editHandler /////////////////////////////////////////////////////

  const editHandler = (id) => {
    const editedItem = items.find((value) => {
      return value.id === id;
    });
    console.log(editedItem);
    setEditItem(false);
    setInput(editedItem.name);
    setEditedItem(id);
  };

  /////////////////////////////////////////////      clickHandler /////////////////////////////////////////////////////

  const clickHandler = () => {
    if (!input) {
      //alert("plz Enter data first");
    } else if (input && !editItem) {
      setItems(
        items.map((val) => {
          if (val.id === editedItem) {
            return { ...val, name: input };
          }
          return val;
        })
      );
      setEditItem(true);
      setInput("");
      setEditedItem(null);
    } else {
      let itemslist = { id: new Date().getTime().toString(), name: input };
      setItems([...items, itemslist]);
      setInput("");
    }
  };
  /////////////////////////////////////////////      clickHandler /////////////////////////////////////////////////////

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div>
      <div>
          <div className="text">Add Your Todo List Here!!</div>
          <input
            className="input"
            placeholder="Add Items In Todo List"
            value={input}
            onChange={onChange}
          ></input>
                  {editItem ? (
            <button className="button" type="submit" onClick={clickHandler}>
              Add Todo
            </button>
          ) : (
            <button className="button" onClick={clickHandler}>
              Edit
            </button>
          )}
          </div>
          <div>    <metadata.Provider
      value={{
        removeHandler: { removeHandler },
        editHandler: { editHandler },
        deleteHandler: { deleteHandler },
        items:items,
        editItem:editItem
      }}
    >
      <TodoItems />
    </metadata.Provider></div>
    </div>
  );
}
export default Todo;
