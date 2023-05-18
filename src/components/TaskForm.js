import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('')
    const [description, setDesciption] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() !== '') {
            addTask({ title, description });
            setTitle('');
            setDesciption('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
           <input
            type='text'
            placeholder='Task Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            placeholder='Task Description'
            value={description}
            onChange={(e) => setDesciption(e.target.value)}
            ></textarea>
            <button type='submit'>Add Task </button>
        </form>
   );
};

export default TaskForm;