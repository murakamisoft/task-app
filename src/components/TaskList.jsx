import React from 'react';

const TaskList = ({ tasks, handleEdit, handleDelete }) => {
  return (
    <ul className="list-group mt-2">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
          {task.title} {/* 修正: task.name → task.title */}
          <div>
            <button onClick={() => handleEdit(task)} className="btn btn-warning btn-sm mr-2">
              編集
            </button>
            <button onClick={() => handleDelete(task.id)} className="btn btn-danger btn-sm">
              削除
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
