const Task = require("../../models/tasks/tasks.mongo");
const {
  addNewTask,
  getAllTasks,
  getTaskById,
  getRandomTask,
} = require("../../models/tasks/tasks.model");

const httpGetAllTasks = async (req, res) => {
  const allTask = await getAllTasks();
  return res.status(200).json(allTask);
};

const httpAddNewTask = async (req, res) => {
  const task = req.body;

  if (
    !task.id ||
    !task.sectionId ||
    !task.description ||
    !task.numberOfChecks ||
    !task.clueOne ||
    !task.clueTwo ||
    !task.optimizeSolution
  ) {
    return res.status(400).json({ error: "Missing required tasks property" });
  }
  await addNewTask(task);
  return res.status(200).json(task);
};

const httpGetTaskById = async (req, res) => {
  const id = req.params.id;

  const task = await getTaskById(id);
  if (!task) {
    return res.status(400).json({ error: "Task do not exist" });
  }
  return res.status(200).json(task);
};

const httpGetRandomTask = async (req, res) => {
  const randomTask = await getRandomTask();
  if (!randomTask)
    return res.status(400).json({ error: "Can't access to random task" });
  return res.status(200).json(randomTask);
};

module.exports = {
  httpGetAllTasks,
  httpAddNewTask,
  httpGetTaskById,
  httpGetRandomTask,
};
