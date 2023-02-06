import { useContext } from "react";
import { metadata } from "./todo";
export default function TodoItems() {
const { removeHandler, editHandler, deleteHandler, items} = useContext(metadata);

//console.log(items);
    return(
        <div>
          {items.map((val) => {
            return (
              <div className="list" key={val.id}>
                {val.title}
                <span style={{ display: "flex" }}>
                  <button
                    className="edt-btn"
                    onClick={() => editHandler.editHandler(val.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="dlt-btn"
                    onClick={() => deleteHandler.deleteHandler(val.id)}
                  >
                    Delete
                  </button>
                </span>
              </div>
            );
          })}
        <div className="footer">
          <button className="footer-btn" onClick={removeHandler.removeHandler}>
            Clear List
          </button>
        </div>
      </div>
    );
}