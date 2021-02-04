var express = require("express");
var router = express.Router();

//importing functions from scores

const { readAllData, getLeaderBoard, addToTable } = require("../model/scores");

router.get("/", async function (req, res) {
  const data = await readAllData();
  res.json({ success: true, payload: data });
});

// post request

router.post("/", async function (req, res) {
  const data = await addToTable(req.body);
  res.json({ success: true, payload: data });
});

module.exports = router;
