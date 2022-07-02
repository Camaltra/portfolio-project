const axios = require("axios");

const { addTaskToUserById } = require("../../models/users/users.model");
const { addNewCheckToHistory } = require("../../models/history/history.model");

const httpGetCheckRequest = async (req, res) => {
  const GITHUB_NAME = req.query.github_username;
  const TASK_ID = req.query.task_id;
  const SECTION_ID = req.query.section_id;
  const NUMBER_OF_CHECKS = req.query.number_of_checks;

  let response = [];
  let statusRes = 000;

  await axios
    .post("http://localhost:8001/api/v2/checker", {
      github_username: GITHUB_NAME,
      task_id: TASK_ID,
      section_id: SECTION_ID,
      number_of_checks: NUMBER_OF_CHECKS,
    })
    .then((res) => {
      statusRes = 200;
      response = res.data;
    })
    .catch((err) => {
      statusRes = 400;
      try {
        response = err.response.data;
      } catch {
        response = { error: "The server do not response" };
      }
    });

  if (statusRes === 400) {
    return res.status(400).json(response);
  }

  const newCheck = {
    userId: req.user,
    taskId: TASK_ID,
    sectionId: SECTION_ID,
    checkDetails: response,
    checkedTime: Date.now(),
  };

  await addNewCheckToHistory(newCheck).catch((err) => {
    console.log("Error to save into the database: History");
    console.log(`${req.user}: error`);
  });

  console.log(response);

  for (let i = 0; i < NUMBER_OF_CHECKS; i++) {
    delete response.checkerResult[i].output;
  }
  console.log(response);

  if (response.success) {
    await addTaskToUserById(TASK_ID, req.user).catch((err) => {
      console.error(`${req.user}: didn't add ${TASK_ID} into the done tasks`);
    });
  }

  return res.status(200).json(response);
};

module.exports = {
  httpGetCheckRequest,
};
