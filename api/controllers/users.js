const uuidv4 = require("uuid/v4");

module.exports = (app) => {
  const usersDB = app.data.users;
  const controller = {};

  const { users: usersMock } = usersDB;

  controller.listUsers = (req, res) => res.status(200).json(usersDB);

  controller.saveUsers = (req, res) => {
    usersMock.data.push({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      bio: req.body.bio,
      contact: req.body.contact,

      works: req.body.works,
      title: req.body.works.title,
      description: req.body.works.description,
      deploy_urL: req.body.works.deploy_urL
    });
    res.status(201).json(usersMock);
  };

  return controller;
};
