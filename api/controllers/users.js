module.exports = () => {
  const usersDB = require("../data/users.json");
  const controller = {};

  controller.listUsers = (req, res) => res.status(200).json(usersDB)

  return controller
};
