import axios from 'axios';

const TaskForm = ({ fetchTasks, taskId, setTaskId, title, setTitle }) => { // 修正: taskName → title, setTaskName → setTitle
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) { // 修正: taskName → title
      if (taskId) {
        await axios.put(`http://localhost:8080/tasks/${taskId}`, { title }); // 修正: name → title
      } else {
        await axios.post('http://localhost:8080/tasks', { title }); // 修正: name → title
      }
      setTitle(''); // 修正: setTaskName → setTitle
      setTaskId(null);
      fetchTasks();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="taskTitle">タスク名:</label> {/* 修正: htmlForをtaskTitleに変更 */}
        <input
          type="text"
          className="form-control"
          id="taskTitle" // 修正: idをtaskTitleに変更
          value={title} // 修正: taskName → title
          onChange={(e) => setTitle(e.target.value)} // 修正: setTaskName → setTitle
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        {taskId ? 'タスクを更新' : 'タスクを追加'}
      </button>
    </form>
  );
};

export default TaskForm;
