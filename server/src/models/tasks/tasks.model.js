const Task = require("./tasks.mongo");

const addNewTask = async (newTask) => {
  await Task.findOneAndUpdate(
    {
      id: newTask.id,
      sectionId: newTask.sectionId,
    },
    newTask,
    {
      upsert: true,
    }
  ).catch((err) => {
    console.error(err);
  });
};

const getAllTasks = async () => {
  return await Task.find({}, { _id: 0, __v: 0 }).catch((err) => {
    console.error(err);
  });
};

const getRandomTask = async () => {
  const allTasks = await getAllTasks().catch((err) => {
    console.error(err);
  });
  const randomTask = allTasks[Math.floor(Math.random() * allTasks.length)];
  return randomTask;
};

const getTaskById = async (taskId) => {
  return await Task.findOne(
    {
      id: taskId,
    },
    { _id: 0, __v: 0 }
  ).catch((err) => {
    console.error(err);
  });
};

module.exports = {
  addNewTask,
  getAllTasks,
  getRandomTask,
  getTaskById,
};
