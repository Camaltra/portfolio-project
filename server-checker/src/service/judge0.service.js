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
  const response = await axios.request(optionsGetToken);
  const responseData = response.data.submissions;
  let i = 2;
  const checkerResult = [];
  responseData.forEach((checked) => {
    if (checked.stdout === "OK\n") {
      const validCheck = {
        checkId: i,
        isGood: true,
      };
      checkerResult.push(validCheck);
    } else {
      const notValidCheck = {
        checkId: i,
        isGood: false,
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
  //BERK BERK BERK BERK BERK BERK BERK
  //This is really bad!!!!!!
  //NEED TO FIX IT
  //To wait the judge0 server to proccess the code
  console.log(tokenArray);
  await new Promise((r) => setTimeout(r, 4000));
  return await getResult(tokenArray.join());
};

module.exports = {
  getResponse,
};
