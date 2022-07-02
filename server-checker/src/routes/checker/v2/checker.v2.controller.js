const shell = require("shelljs");
const fs = require("fs");
const path = require("path");

const { sections, tasks } = require("../../../data/matches.data");
const { getResponse } = require("../../../service/v2/judge0.v2.service");

const REPO_NAME = "HTW-interview_trainning";

require("dotenv").config();

const httpCheckTaskV2 = async (req, res) => {
  const GITHUB_NAME = String(req.body.github_username);
  const TASK_ID = String(req.body.task_id);
  const SECTION_ID = String(req.body.section_id);
  const NUMBER_OF_CHECKS = Number(req.body.number_of_checks);

  if (!GITHUB_NAME || !TASK_ID || !SECTION_ID || !NUMBER_OF_CHECKS) {
    return res.status(400).json({ error: "Bad body params" });
  }

  const FOLDER_NAME_USER = "tmp" + GITHUB_NAME;
  const SECTION_NAME = sections[SECTION_ID];
  const TASK_NAME = tasks[TASK_ID];

  if (!FOLDER_NAME_USER || !SECTION_NAME || !TASK_NAME) {
    return res.status(400).json({ error: "Bad body params" });
  }

  const checkerResult = [];
  let success = false;
  for (let i = 0; i < NUMBER_OF_CHECKS; i++) {
    checkerResult.push({
      checkId: i,
      isGood: false,
      output: "Previous check failed",
    });
  }
  const checkerResultBatch = { success, checkerResult };

  shell.cd(path.join(__dirname, "..", "..", "..", "checker_buff"));
  shell.exec(`mkdir ${FOLDER_NAME_USER}`);
  shell.cd(`${FOLDER_NAME_USER}`);
  shell.exec(`git clone https://github.com/${GITHUB_NAME}/${REPO_NAME}.git`);
  if (
    !fs.existsSync(`HTW-interview_trainning/${SECTION_NAME}/${TASK_NAME}.py`)
  ) {
    shell.cd("..");
    shell.exec(`rm -rf ${FOLDER_NAME_USER}`);
    checkerResultBatch.checkerResult[0].output = "File not found";
    return res.status(200).json(checkerResultBatch);
  } else {
    checkerResultBatch.checkerResult[0].isGood = true;
    checkerResultBatch.checkerResult[0].output = "OK\n";
  }

  const studentAwnser = fs.readFileSync(
    `HTW-interview_trainning/${SECTION_NAME}/${TASK_NAME}.py`,
    "utf8"
  );

  if (!studentAwnser.substring(0, 19) === "#!/usr/bin/python3") {
    shell.cd("..");
    shell.exec(`rm -rf ${FOLDER_NAME_USER}`);
    checkerResultBatch.checkerResult[1].output = "No Header Found";
    return res.status(200).json(checkerResultBatch);
  } else {
    checkerResultBatch.checkerResult[1].isGood = true;
    checkerResultBatch.checkerResult[1].output = "OK\n";
  }

  if (!fs.existsSync(`../../checker/${SECTION_NAME}/${TASK_NAME}`)) {
    shell.cd("..");
    shell.exec(`rm -rf ${FOLDER_NAME_USER}`);
    return res.status(400).json({ error: "No checker main file found" });
  }
  shell.cd(`../../checker/${SECTION_NAME}/${TASK_NAME}`);

  const allCode = [];

  const files = fs.readdirSync("./");

  files.forEach((file) => {
    const newItem = {
      source_code: ``,
      language_id: 71,
      expected_output: "OK",
    };
    newItem.source_code = studentAwnser;
    const main = fs.readFileSync(`./${file}`, "utf8");
    newItem.source_code += main;
    allCode.push(newItem);
  });

  let error = false;

  const resultFormCheckerCode = await getResponse({
    submissions: allCode,
  }).catch((err) => {
    error = true;
  });

  if (error) {
    shell.exec(`rm -rf ../../../checker_buff/${FOLDER_NAME_USER}`);
    return res.status(400).json({ error: "Checker got block / bugged" });
  }

  success = true;
  for (let i = 0; i < NUMBER_OF_CHECKS; i++) {
    if (i >= 2)
      checkerResultBatch.checkerResult[i] = resultFormCheckerCode[i - 2];
    if (!checkerResultBatch.checkerResult[i].isGood) success = false;
  }

  if (success) checkerResultBatch.success = true;

  shell.exec(`rm -rf ../../../checker_buff/${FOLDER_NAME_USER}`);

  res.status(200).json(checkerResultBatch);
};

module.exports = {
  httpCheckTaskV2,
};
