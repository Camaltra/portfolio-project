const { getAllHistory } = require("../../models/history/history.model");

const httpGetAllHistory = async (req, res) => {
  const allHistory = await getAllHistory();
  if (!allHistory) {
    return res.status(404).json({ error: "Can't access to the history" });
  }
  return res.status(200).json(allHistory);
};

module.exports = { httpGetAllHistory };
