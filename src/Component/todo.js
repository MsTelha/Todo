import { useEffect, useState } from "react";
import axios from "axios";
import "./Todo.css";
function Todo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(true);
  const [editedItem, setEditedItem] = useState(null);

  ////////////////////////////////////////////////   ChangeHandler ////////////////////////////////////////////////////
  const onChange = (event) => {
    setInput(event.target.value);
    console.log("testin");
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
      alert("plz Enter data first");
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
/////////////////////////////////////////////      getdatafromapi /////////////////////////////////////////////////////

useEffect(()=>{
  axios("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      setItems(res.data)
  })
}, [])

  return (
    <div>
      <div className="text">Add Your Todo List Here!!</div>
      <div>
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
          <button className="button" onClick={clickHandler}>Edit</button>
        )}
        <div>
          {items.map((val) => {
            return (
              <div className="list" key={val.id}>
                {val.title}
                <span style={{display:"flex"}}>
                <button className="edt-btn" onClick={() => editHandler(val.id)}>Edit</button>
                <button className="dlt-btn" onClick={() => deleteHandler(val.id)}>Delete</button>
                </span>
              </div>
            );
          })}
        </div>
        <div className="footer">
          <button className="footer-btn" onClick={removeHandler}>
            Clear List
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todo;
