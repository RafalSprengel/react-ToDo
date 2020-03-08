import React, { useState } from 'react';
import '../style/App.css';
import TaskAdd from './TaskAdd';
import TaskList from './TaskList';
import TasksDone from './TasksDone';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const tab = [
  {
    id: 2,
    taskName: 'Paint garden fence',
    isImportant: false,
    deadLine: "1580385851000",
    done: false
  },
  {
    id: 0,
    taskName: 'Buy presents for family',
    isImportant: false,
    deadLine: "1576745131000",
    done: false
  },
  {
    id: 1,
    taskName: 'Book fly tickets',
    isImportant: true,
    deadLine: "1577698951000",
    done: false
  },
  {
    id: 3,
    taskName: 'Go to barber',
    isImportant: false,
    deadLine: "1580385841000",
    done: false
  }];

const App = () => {
  const [taskName, setTaskName] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [deadLine, setdeadLine] = useState('');
  const [tasks, setTasks] = useState(tab);

  const handleTaskDelete = (e) => {
    const eventId = parseInt(e.target.id);

    confirmAlert({
      title: 'Delete item',
      message: 'Do you really want to delete this task ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            let tasksFiltered = tasks.filter(el => el.id !== eventId);
            setTasks(tasksFiltered)
          }
        },
        {
          label: 'No',
          onClick: () => null
        }
      ]
    });
  }

  const handleInputTaskName = (e) => {
    setTaskName(e.target.value)
  }

  const handleInputDate = (e) => {
    let date = new Date(e.target.value);
    let timestamp = date.getTime(date);
    setdeadLine(timestamp);
  }

  const handleInputIsImportant = (e) => {
    setIsImportant(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) {
      alert('Please fill task name first');
      return null
    }
    if (!deadLine) {
      alert('Please fill dead line date first');
      return null;
    }
    let count = tasks.length;
    let newTask = {
      id: count,
      taskName: taskName,
      isImportant: isImportant,
      deadLine: deadLine,
      done: false,
    };
    setTasks(prevTasks => {
      return [...prevTasks, newTask]
    });

    setTaskName('');
    setIsImportant(false);
    setdeadLine('');
  }

  const handleTaskDone = (e) => {
    let taskMapped = tasks.map(el => {
      if (el.id === parseInt(e.target.id)) {
        el.done = true;
        const done = new Date();
        el.doneDate = done.getTime();
      }
      return el
    })
    setTasks(taskMapped)
  }

  return (
    <>
      <TaskAdd
        handleInputTaskName={handleInputTaskName}
        handleInputDate={handleInputDate}
        handleInputIsImportant={handleInputIsImportant}
        handleSubmit={handleSubmit}
        isImportant={isImportant}
        taskName={taskName}
        deadLine={deadLine}
      />
      <hr></hr>
      <TaskList
        tasks={tasks}
        handleTaskDone={handleTaskDone}
        handleTaskDelete={handleTaskDelete} />
      <hr></hr>
      <TasksDone
        tasks={tasks}
        handleTaskDelete={handleTaskDelete}
      />
    </>
  )
}

export default App;
