const User = require("../../models/users/users.mongo");

const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../../models/users/users.model");

const httpGetAllUsers = async (req, res) => {
  const allUsers = await getAllUsers();

  return res.status(200).json(allUsers);
};

const httpGetUserById = async (req, res) => {
  const id = req.params.id;
  const user = await getUserById(id);
  if (!user) {
    return res.status(400).json({ error: "Not found matched user" });
  }
  return res.status(200).json(user);
};

const httpUpdateUserById = async (req, res) => {
  const user = req.body;
  const id = req.params.id;
  const updatedUser = {
    updatedDate: Date.now(),
  };
  if (user.username) updatedUser.username = user.username;
  if (user.githubProfile) updatedUser.githubProfile = user.githubProfile;
  if (user.email) updatedUser.email = user.email;

  const userUpdatedResult = await updateUserById(id, updatedUser);

  if (userUpdatedResult.matchedCount === 0) {
    return res.status(400).json({ error: "Not user found" });
  }
  return res.status(200).json(updatedUser);
};

module.exports = {
  httpGetAllUsers,
  httpGetUserById,
  httpUpdateUserById,
};
