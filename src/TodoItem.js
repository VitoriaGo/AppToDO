import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/><scan>{props.item.text}</scan>
        </div>
    )
}

export default TodoItem