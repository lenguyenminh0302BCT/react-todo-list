import React, { Component } from 'react';
import {v4 as uuid} from 'uuid'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./component/Todoinput";
import TodoList from "./component/TodoList";


// showing vs-code github setup 
class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up" }, {id: 2, title: "make breakjast"}],
    id: uuid(),
    item:'',
    editItem:false
  };
  handleChange = (e)=>{ console.log('handle change')}
  handleSubmit = (e)=>{ console.log('handle Submit')}
  clearList = (e)=>{ console.log('clear list')}
  handleEdit = (id)=>{ console.log(`handle edit ${id}`)}
  handleDelete = (id) =>{ console.log(`edit edit ${id}`)}
  render(){
  return (
    <div className="container">
      <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-5">
        <h3 className="text-capitalize text-center"> 
          <TodoInput item= {this.state.item}
           handleChange={this.handleChange}
           handleSubmit= {this.handleSubmit} 
           editItem={this.state.editItem} />
           <TodoList items={this.state.items} 
           clearList={this.clearList} 
           handleDelete={this.handleDelete} 
           handleEdit={this.handleEdit}/>
        </h3>
      </div>
      </div>
    </div>
       
  );
 }
}

export default App;
