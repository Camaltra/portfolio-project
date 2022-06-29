const History = require("./history.mongo");

const { getUserById } = require("../users/users.model");

const DEFAULT_CHECK_ID = 0;

const getTheLastCheckId = async () => {
  const latestCheck = await History.findOne()
    .sort("-checkId")
    .catch((err) => {
      console.error(err);
    });

  if (!latestCheck) {
    return DEFAULT_CHECK_ID;
  }
  return latestCheck.checkId;
};

const getAllHistory = async () => {
  return await History.find({}, { _id: 0, __v: 0 })
    .sort({ checkId: -1 })
    .catch((err) => {
      console.error(err);
    });
};

const addNewCheckToHistory = async (newCheck) => {
  const checkId =
    (await getTheLastCheckId().catch((err) => {
      console.error(err);
    })) + 1;
  const user = await getUserById(newCheck.userId).catch((err) => {
    console.error(err);
  });

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
  ).catch((err) => {
    console.error(err);
  });
};

module.exports = {
  getAllHistory,
  addNewCheckToHistory,
};
