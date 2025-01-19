import { useState } from "react";
import { DateAndTime } from "./DateAndTime.jsx";
import { ListItem } from "./ListItems.jsx";

export const Todo = () => {
  const initialvalues = () => {
    return JSON.parse(localStorage.getItem("newTodo"));
  };
  const [inVal, setInVal] = useState("");
  const [tasks, setTasks] = useState(initialvalues() || []);

  const handleInputOnchange = (e) => {
    const val = e.target.value;
    setInVal(val);
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();

    // Check if the task is already in the list before adding
    const alreadyExist = tasks.find((curTask) => curTask.content === inVal);
    if (alreadyExist) {
      alert("This task is already in the list.");
      setInVal(""); // Clear input after showing the alert
      return; // Stop further execution if task already exists
    }

    // Proceed to add the task only if it doesn't exist
    if (inVal.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), content: inVal.trim(), checked: false },
      ]);
      setInVal(""); // Clear input after adding
    } else {
      alert("Task cannot be empty!");
    }
    localStorage.setItem("newTodo", JSON.stringify(tasks));
  };

  // Handle task update (for toggling check status)
  const handleTaskUpdate = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Handle task deletion
  const handleTaskDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <section className="overflow-hidden h-screen w-screen flex items-center flex-col bg-violet-700">
      <header className="text-center text-white">
        <h1 className="text-5xl my-6 [text-shadow:_-3px_1px_2px_#000000] font-semibold">
          To-Do List
        </h1>
        <div className="text-3xl my-6 [text-shadow:_-3px_1px_2px_#000000] font-semibold">
          <DateAndTime />
        </div>
      </header>
      <main>
        <section>
          <form onSubmit={handleSubmitBtn}>
            <div className="input-button--container flex">
              <input
                type="text"
                placeholder="Enter Your Task : "
                value={inVal} // Controlled input
                className="bg-white py-2 px-2 focus:outline-none rounded-tl-2xl rounded-bl-2xl"
                onChange={handleInputOnchange}
              />
              <div className="bg-violet-300 flex flex-col justify-center py-2 px-2 rounded-tr-2xl rounded-br-2xl">
                <button type="submit">Add Task</button>
              </div>
            </div>
          </form>
          <section>
            <ul className="overflow-y-scroll h-[65vh] scroll-smooth ">
              {tasks.map((task) => (
                <ListItem
                  key={task.id}
                  onHandleTaskLi={task}
                  onHandleTaskUpdate={handleTaskUpdate}
                  onHandleDelete={handleTaskDelete}
                />
              ))}
            </ul>
          </section>
        </section>
      </main>
    </section>
  );
};
