import React from "react";

import { ITask } from "../Interfaces";



interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
   <div>
     <div className="note">
        <h1>{task.deadline}</h1>
        <p>{task.taskName}</p>
        <button className="material-symbols-outlined" onClick={() => { completeTask(task.taskName); }}> delete</button> 
     </div>

    </div>
   
  );
};

export default TodoTask;