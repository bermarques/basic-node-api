module.exports = app => {
  const usersDB = app.data.users;
  const controller = {};

  controller.listUsers = (req, res) => res.status(200).json(usersDB)

  return controller
};
