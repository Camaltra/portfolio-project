const { getAllHistory } = require("../../models/history/history.model");

const httpGetAllHistory = async (req, res) => {
  const allHistory = await getAllHistory();
  return res.status(200).json(allHistory);
};

module.exports = { httpGetAllHistory };
