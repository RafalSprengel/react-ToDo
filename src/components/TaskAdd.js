import React from 'react';
import '../style/TaskAdd.css';
import { getDate } from './lib';

const TaskAdd = ({
    handleInputTaskName,
    handleInputDate,
    handleInputIsImportant,
    handleSubmit,
    taskName,
    isImportant,
    deadLine,
    handleClick,
}) => {
    const [dateNow] = getDate(null, true);
    let dateDeadLine;
    if (deadLine)
        [dateDeadLine] = getDate(deadLine, true);
    else
        dateDeadLine = ''

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='taskName'>Task name</label>
                <input type="text" id='taskName' placeholder='tap your new task..' onChange={handleInputTaskName} value={taskName} />
                <input type='checkbox' id='isImportant' onChange={handleInputIsImportant} checked={isImportant} ></input>
                <label htmlFor='checkbox' >Priority</label><br></br>
                <label htmlFor='dead-line-time' >Dead line time: </label>
                <input type='date' min={dateNow} id='deadLine' onChange={handleInputDate} value={dateDeadLine}></input>
                <button type='submit'>Add this task</button>
            </form>

        </>
    )
}
export default TaskAdd;