import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Header1 from './components/Header';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      const taskData = response.data;
      setTasks(taskData);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  fetchTasks();
}, []);

  const addTask = async (taskData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', taskData);
      const newTask = response.data;
      // Do something with the new task data
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };


return (
  <div>
    <Header1 />
    <TaskForm addTask={addTask} />
    <TaskList tasks={tasks}/>
  </div>

);
}

export default App;