import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[tasks,setTasks]=useState(TASKS);
  const[category, setCategory]=useState("ALL");

  function addTask(newTask){
    setTasks([...tasks,newTask]);
  }

  function deleteTask(deletedTaskTest){
    setTasks(tasks.filter((task)=>task.text!== deletedTaskTest));
  }
  const taskToShow=tasks.filter(
    (task)=>category==="ALL"||task.category===category
  );
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={category}
      selectCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES}
      onTaskFormSubmit={addTask}
      />
      <TaskList onDeleteTask={deleteTask} 
      tasks={taskToShow}
      />
    </div>
  );
}

export default App;