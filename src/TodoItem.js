import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
          <input 
          type="checkbox" 
          checked={props.item.completed}
          onClick= {() => {props.handleChange(props.item.id)}}
           /><scan>{props.item.text}</scan>
        </div>
    )
}

export default TodoItem