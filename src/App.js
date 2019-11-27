import React from 'react';
import './App.css';
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"

function Header (){
  return (
    <div class="header">
    <h1>My To Do App</h1>
    </div>
  )
}

class Checkbox extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: TodosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}



function Body (){
  return (
    <div class="body">
    <Checkbox/>
    </div>
  )
}



function App (){
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }


export default App;







