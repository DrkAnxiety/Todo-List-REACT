import { useState } from "react";
import { Form } from "../form/Form";
import { Task } from "../task/Task";
import "./ListOfTask.css";

export const ListOfTask = () => {
  const [list, setList] = useState([]);
  
  const handleDeleteTask = (id) => {
    const updateList = list.filter((item) => item.id !== id);
    setList(updateList);
  };
  
  const handleDataForm = (taskItem) => {
    setList(list.concat(taskItem));
  };

  return (
    <article className="todo-container">
      <section className="form-todo-container">
        <Form handleDataForm={handleDataForm} />
      </section>
      <section className="list-todo-container">
        {list.map((taskItem) => {
          return (
            <Task
              text={taskItem.text}
              id={taskItem.id}
              name={taskItem.name}
              key={taskItem.id}
              handleDeleteTask={handleDeleteTask}
            />
          );
        })}
      </section>
    </article>
  );
};
