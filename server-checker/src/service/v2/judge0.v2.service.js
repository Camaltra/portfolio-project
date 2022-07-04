const axios = require("axios");

require("dotenv").config();

const URL = "https://judge0-ce.p.rapidapi.com";

const getResult = async (tokenString) => {
  const optionsGetToken = {
    method: "GET",
    url: `${URL}/submissions/batch`,
    params: {
      tokens: tokenString,
      base64_encoded: "false",
      fields: "*",
    },
    headers: {
      "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
    },
  };
  let good = false;
  let responseData;
  while (!good) {
    const response = await axios.request(optionsGetToken);
    responseData = response.data.submissions;
    let allSumbissionFinished = true;
    responseData.forEach((data) => {
      console.log(data.status.description);
      if (
        data.status.description === "In Queue" ||
        data.status.description === "Processing"
      ) {
        allSumbissionFinished = false;
      }
    });
    if (allSumbissionFinished) {
      good = true;
    } else {
      await setTimeout(() => {}, 700);
    }
    console.log(good);
  }
  let i = 2;
  const checkerResult = [];
  responseData.forEach((checked) => {
    if (checked.stdout === "OK\n") {
      const validCheck = {
        checkId: i,
        isGood: true,
        output: checked.stdout ? checked.stdout : checked.stderr,
      };
      checkerResult.push(validCheck);
    } else {
      const notValidCheck = {
        checkId: i,
        isGood: false,
        output: checked.stdout ? checked.stdout : checked.stderr,
      };
      checkerResult.push(notValidCheck);
    }
    i++;
  });
  return checkerResult;
};

const getResponse = async (data) => {
  const options = {
    method: "POST",
    url: `${URL}/submissions/batch`,
    params: { base64_encoded: "false", wait: "true", fields: "*" },
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
    },
    data: data,
  };

  const response = await axios.request(options);

  const responseData = response.data;
  const tokenArray = [];
  responseData.forEach((data) => {
    tokenArray.push(data.token);
  });
  console.log(tokenArray);
  await setTimeout(() => {}, 1500);
  return await getResult(tokenArray.join());
};

module.exports = {
  getResponse,
};
