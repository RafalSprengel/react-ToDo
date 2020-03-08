import React from 'react';
import '../style/TasksDone.css';
import { getDate } from './lib';


const TasksDone = (props) => {
    const tasksDone = props.tasks.filter(el => el.done === true);
    tasksDone.sort((a, b) => {
        if (a.doneDate < b.doneDate) return 1;
        if (a.doneDate > b.doneDate) return -1;
        return 0;
    })
    const SingleTask = ({ singleTask }) => {
        const [doTill] = getDate(singleTask.deadLine);
        return (
            <li>
                <strong>{singleTask.taskName}</strong> (do till: {doTill})<br></br>
                done on {getDate(singleTask.doneDate)}
                <button
                    id={singleTask.id}
                    onClick={props.handleTaskDelete}
                >X</button>
            </li>
        )
    }
    let tasksDoneJSX = tasksDone.map(el => <SingleTask key={el.id} singleTask={el} />)

    return (
        <div>
            <ul>
                {(tasksDone.length > 0) ?
                    <>
                        <h3>Tasks Done ({tasksDone.length})</h3>
                        <div>{tasksDoneJSX}</div>
                    </>
                    : 'No tasks done yet'}
            </ul>
        </div >
    )
}
export default TasksDone;
