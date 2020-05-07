import React, { Component } from 'react';
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./component/Todoinput";
import TodoList from "./component/TodoList";


// showing vs-code github setup 
class App extends Component {
  render(){
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <TodoInput/>
          <TodoList/>
        </div>
      </div>
    </div>
  );
 }
}

export default App;
