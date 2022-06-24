const axios = require("axios");

const { addTaskToUserById } = require("../../models/users/users.model");

const httpGetCheckRequest = async (req, res) => {
  const GITHUB_NAME = req.query.github_username;
  const TASK_ID = req.query.task_id;
  const SECTION_ID = req.query.section_id;
  const NUMBER_OF_CHECKS = req.query.number_of_checks;

  let response = [];
  let statusRes = 000;

  await axios
    .post("http://localhost:8001/api/v1/checker", {
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

  let isSucced = true;
  for (let i = 0; i < NUMBER_OF_CHECKS; i++) {
    if (response[i].isGood === false) isSucced = false;
  }

  console.log(isSucced);
  if (isSucced) {
    const done = await addTaskToUserById(TASK_ID, req.user);
    console.log(done);
  }

  // TO DO IN THE SERVER CHECKER DIRECTLY
  //Insert the response with all token into the history database, whatever the response is to allow admin o see what heppened
  //NOT ON MVP
  return res.status(200).json(response);
};

module.exports = {
  httpGetCheckRequest,
};
