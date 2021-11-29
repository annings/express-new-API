var express = require("express");
var router = express.Router();

function user(req, res) {
  const params = req.body;
  if (!params.id) {
    utils.sendError(res, "用户id不可为空");
    return;
  }

  let data = {
    id: 123,
    name: "anning",
  };
  res.send({
    code: 200,
    msg: "",
    data: data,
  });
}

module.exports = user;
