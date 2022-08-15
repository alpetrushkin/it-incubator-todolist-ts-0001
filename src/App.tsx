import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

function App() {
   const title = 'What to learn1111'
   const title2 = 'What to learn2222'

   const tasks1 = [
      { id: 1, title: "HTML&CSS", isDone: true },
      { id: 2, title: "JS", isDone: true },
      { id: 3, title: "ReactJS", isDone: false },
   ]

   const tasks2 = [
      { id: 1, title: "Hello world", isDone: true },
      { id: 2, title: "I am Happy", isDone: false },
      { id: 3, title: "Yo", isDone: false }
   ]

   return (
        <div className="App">
            <TodoList title={title} titleNEW={12345} tasks={tasks1}/>
            <TodoList title={title2} tasks={tasks2}/>
        </div>
    );
}

export default App;
