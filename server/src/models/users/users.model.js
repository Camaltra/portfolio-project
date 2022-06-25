const User = require("./users.mongo");

const getAllUsers = async () => {
  return await User.find({}, { _id: 0, __v: 0 }).catch((err) => {
    console.error(err);
  });
};

const getUserById = async (userId) => {
  return await User.findOne(
    {
      id: userId,
    },
    { _id: 0, __v: 0 }
  ).catch((err) => {
    console.error(err);
  });
};

const updateUserById = async (userId, updatedUser) => {
  const isUpdated = await User.updateOne(
    {
      id: userId,
    },
    updatedUser
  ).catch((err) => {
    console.error(err);
  });

  return isUpdated;
};

const addTaskToUserById = async (taskId, userId) => {
  const user = await getUserById(userId);
  if (user.tasksDone.includes(taskId)) {
    return true;
  }
  const isUpdated = await User.updateOne(
    {
      id: userId,
    },
    {
      $push: { tasksDone: taskId },
    }
  ).catch((err) => {
    console.error(err);
  });

  return isUpdated.modifiedCount;
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  addTaskToUserById,
};
