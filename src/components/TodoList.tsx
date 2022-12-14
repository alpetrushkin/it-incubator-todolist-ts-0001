import React from 'react';

interface TodoListType {
   title: string
   titleNEW?: number
   tasks: Array<TaskType>
}

interface TaskType {
   id: number
   title: string
   isDone: boolean
}

export const TodoList = (props: TodoListType) => {
   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input/>
            <button>+</button>
         </div>
         <ul>
            {props.tasks.map(el => {
               return (
                  <li key={el.id}><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
               )
            })}
         </ul>
         <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
         </div>
      </div>
   );
};

