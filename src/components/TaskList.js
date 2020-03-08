import React from 'react';
import '../style/TaskList.css';
import { getDate } from './lib';

const TaskList = (props) => {

    let tasks = props.tasks.filter(el => el.done === false);
    tasks.sort((a, b) => {
        if (a.taskName.toLowerCase() > b.taskName.toLowerCase()) return 1;
        if (a.taskName.toLowerCase() < b.taskName.toLowerCase()) return -1;
        return 0;
    });
    tasks = tasks.map(task => {
        const [date] = getDate(task.deadLine)
        return (
            <div
                key={task.id}
                className='tasks'>
                <span className={task.isImportant ? "task-priority" : null}>
                    {task.taskName}
                </span> - to {date}
                <button id={parseInt(task.id)} onClick={props.handleTaskDone}>Done</button>
                <button id={parseInt(task.id)} onClick={props.handleTaskDelete}>X</button>
            </div>

        )
    })
    return (
        <div id='taskList-wrap'>
            {(tasks.length > 0) ? tasks : <h3>No active tasks</h3>}
        </div >
    )
}
export default TaskList;
