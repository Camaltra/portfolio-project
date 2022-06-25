const History = require("./history.mongo");

const { getUserById } = require("../users/users.model");

const DEFAULT_CHECK_ID = 0;

const getTheLastCheckId = async () => {
  const latestCheck = await History.findOne().sort("-checkId");

  if (!latestCheck) {
    return DEFAULT_CHECK_ID;
  }
  return latestCheck.checkId;
};

const addNewCheckToHistory = async (newCheck) => {
  const checkId = (await getTheLastCheckId()) + 1;
  const user = await getUserById(newCheck.userId);

  newCheck.userUsername = user.username;
  newCheck.checkId = checkId;

  await History.findOneAndUpdate(
    {
      checkId: checkId,
    },
    newCheck,
    {
      upsert: true,
    }
  );
};

module.exports = {
  addNewCheckToHistory,
};
