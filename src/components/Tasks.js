// import { useState } from "react";

const Tasks = [
  {
    id: 1,
    text: "Docters Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "Feb 5th at 2:30pm",
    reminder: false,
  },
];

const Tasks = () => {
  // const [tasks, setTasks] = useState();
  return (
    <>
      {Tasks.map((tasks) => (
        <h3>{tasks.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
