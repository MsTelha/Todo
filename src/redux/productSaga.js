import { stateActions } from './reducer/stateReducer';
import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios';

function* getData(){   
  let data = yield axios.get("http://localhost:3000/posts");
  yield put({type:stateActions.showData, data})
    };

function* deleteTodo(id){
    console.log(id);
          yield axios.delete(`http://localhost:3000/posts/${id.payload}`);
          //yield put({type:stateActions.deleteTodo})
          yield put({type:stateActions.toggleTodo})
      };

function* updateTodo(editId){
          console.log("else if");
          console.log(editId.payload.input);
          const value = {
            data: editId.payload.input
          };
          console.log(value);
           yield axios.put(`http://localhost:3000/posts/${editId.payload.editId}`, value)
           yield put({type:stateActions.toggleTodo})
        };

function* addedTodo(input){
    console.log(input);
    const value={
        data:input.input
    }
    yield axios.post("http://localhost:3000/posts", value)
    yield put({type:stateActions.toggleTodo})
  };

function* productSaga(){
yield takeEvery("showData", getData)
yield takeEvery("deleteTodo", deleteTodo)
yield takeEvery("updateTodo", updateTodo)
yield takeEvery("addedTodo", addedTodo)
}

export default productSaga