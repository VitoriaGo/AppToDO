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
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
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







