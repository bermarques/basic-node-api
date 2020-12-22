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
      deploy_urL: req.body.works.deploy_urL,
    });
    res.status(201).json(usersMock);
  };

  controller.removeUsers = (req, res) => {
    const { userId } = req.params;

    const foundUserIndex = usersMock.data.findIndex(user => user.id === userId)

    if (foundUserIndex === -1) {
      res.status(404).json({
        message: 'Usuário não encontrado.',
        success: false,
        users: usersMock
      })
    } else {
      usersMock.data.splice(foundUserIndex, 1)
      res.status(200).json({
        message: 'Usuário deletado com sucesso!',
        success: true,
        users: usersMock
      })
    }
    
  };
  return controller;
};
