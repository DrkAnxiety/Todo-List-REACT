import { useState } from "react";
import { BiTrash as Trash } from "react-icons/bi";
import "./Task.css";

export const Task = ({ text, id, handleDeleteTask }) => {
  const [done, setDone] = useState(false);

  const handleClickTask = (e) => {
    setDone(!done);
  };

  const handleDelete = (e) => {
    handleDeleteTask(id);
  };

  return (
    <section
      className={!done ? "task-container" : "task-container task-done"}
      onClick={handleClickTask}
    >
      <p className="task-text-container">{text}</p>
      <div onClick={handleDelete} className="icon-delete-container">
        <Trash className="delete-icon" />
      </div>
    </section>
  );
};
