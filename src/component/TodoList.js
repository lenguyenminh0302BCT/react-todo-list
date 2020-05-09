import React, { Component } from 'react';
import TodoItem from "./TodoItem"
import Item from "./TodoItem";
export default class TodoList extends Component {
    render() {
        const {items, clearList,handleDelete,handleEdit} = this.props;
 
        return (
            <div>
               <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {items.map(item =>{
                    return (
                        <TodoItem
                            key={item.id}
                            title={item.title}
                            handleDelete={()=>handleDelete(item.id)}
                            handleEdit={()=>handleEdit(item.id)}
                        />
                    )
                })}
                <button className="btn btn-danger botton-block text-uppercase mt-5" >clear list</button>
               </ul>
            </div>
        )
    }
}
