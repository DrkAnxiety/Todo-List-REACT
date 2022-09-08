import { useState } from "react";
import { v4 as idRandom } from 'uuid';
import './Form.css';

export const Form = ({ handleDataForm }) => {
  const [taskText, setTaskText] = useState('');

  const handleSumbmit = (e) => {
    e.preventDefault();

    const taskItem = {
      text: taskText,
      id: idRandom()
    };
    
    setTaskText('');
    handleDataForm(taskItem);
  };

  return (
    <form onSubmit={handleSumbmit} className="form-task">
      <input
        type="text"
        placeholder="Enter a new Task"
        autoComplete='off'
        name="task-text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="text-inp-form-task"
        required
      />
      <button className="btn-form-task">Add Task</button>
    </form>
  );
};
