import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState(''); // 修正: taskName → title
  const [taskId, setTaskId] = useState(null);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:8080/tasks');
    setTasks(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/tasks/${id}`);
    fetchTasks();
  };

  const handleEdit = (task) => {
    setTitle(task.title); // 修正: task.name → task.title
    setTaskId(task.id);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mt-5">
      <h1>タスク管理</h1>
      <TaskForm
        fetchTasks={fetchTasks}
        taskId={taskId}
        setTaskId={setTaskId}
        title={title} // 修正: taskName → title
        setTitle={setTitle} // 修正: setTaskName → setTitle
      />
      <h2 className="mt-4">タスクリスト</h2>
      <TaskList
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
