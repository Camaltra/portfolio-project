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
  );
};

const getAllTasks = async () => {
  return await Task.find({}, { _id: 0, __v: 0 });
};

const getTaskById = async (taskId) => {
  return await Task.findOne(
    {
      id: taskId,
    },
    { _id: 0, __v: 0 }
  );
};

module.exports = {
  addNewTask,
  getAllTasks,
  getTaskById,
};
