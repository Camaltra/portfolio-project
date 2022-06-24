const User = require("./users.mongo");

const getAllUsers = async () => {
  return await User.find({}, { _id: 0, __v: 0 });
};

const getUserById = async (userId) => {
  return await User.findOne(
    {
      id: userId,
    },
    { _id: 0, __v: 0 }
  );
};

const updateUserById = async (userId, updatedUser) => {
  const isUpdated = await User.updateOne(
    {
      id: userId,
    },
    updatedUser
  );

  return isUpdated;
};

const addTaskToUserById = async (taskId, userId) => {
  console.log(taskId, userId);
  const isUpdated = await User.updateOne(
    {
      id: userId,
    },
    {
      $push: { tasksDone: taskId },
    }
  );

  return isUpdated;
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  addTaskToUserById,
};
