import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { motion } from "framer-motion";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("NewTask");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (userData) {
      setEmployees(userData);
    }
  }, [userData]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!assignTo) {
      alert("Please select an employee to assign the task.");
      return;
    }

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: status === "active",
      new_task: status === "NewTask",
      completed: status === "completed",
      failed: status === "failed",
    };

    let employeeFound = false;
    const updatedUserData = userData.map((emp) => {
      if (parseInt(assignTo) === emp.id) {
        employeeFound = true;
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCount: {
            ...emp.taskCount,
            [status]: (emp.taskCount[status] || 0) + 1,
          },
        };
      }
      return emp;
    });

    if (!employeeFound) {
      alert("Employee not found!");
      return;
    }

    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData));

    setTaskTitle("");
    setAssignTo("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setStatus("NewTask");

    alert("Task Assigned Successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-gray-200 mt-1 rounded-lg shadow-xl text-white"
    >
      <h2 className="text-2xl font-semibold mb-4 text-black">Create New Task</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-black mb-1">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-800 border border-blue-600"
              type="text"
              placeholder="Enter task title"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-black mb-1">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-800 border border-blue-600"
              type="date"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-black mb-1">Assign To</label>
            <select
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-800 border border-blue-600"
              required
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.firstName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-black mb-1">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-800 border border-blue-600"
              type="text"
              placeholder="Design, Development, etc."
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-black mb-1">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-blue-600"
            rows="4"
            placeholder="Enter task description"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm text-black mb-1">Task Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 border border-blue-600"
            required
          >
            <option value="NewTask">New</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-500 hover:bg-green-600 text-black py-3 px-4 rounded-lg font-semibold transition shadow-lg"
        >
          Create Task
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CreateTask;
