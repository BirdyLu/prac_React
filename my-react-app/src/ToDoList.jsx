import { useState } from "react"


function ToDoList(){
    const [tasks, setTasks] = useState(['Eat Shit', 'McDonalds Deal', 'learn React']);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e){
        setNewTask(e.target.value);
    };

    function addTask(){
        if (newTask.trim() !== ''){
            setTasks(t => [...t, newTask]); //t means previous state
            setNewTask(''); //empty newTasks
        }
    };

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !==index); //filter() keeps sth with condition met; _ for ignore
        setTasks(updatedTasks);
    };

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks]; //what usage?
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks]; //what usage?
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    return (
        <div className="toDoList">
            <input
                type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInputChange}
            />
            <button 
                className="add-button"
                onClick={addTask}
            >
                Add
            </button>

            <ol>
                {tasks.map((task, index) => //how does map() know index?????
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-task" 
                            onClick={() => deleteTask(index)}>
                            Delete</button>
                        <button className="move-up" 
                            onClick={() => moveTaskUp(index)}>
                            Up</button>
                        <button className="move-down" 
                            onClick={() => moveTaskDown(index)}>
                            Down</button>

                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList