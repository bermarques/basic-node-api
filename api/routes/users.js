module.exports = app => {
    const controller = require('../controllers/users')();

    app.route('/users/')
    .get(controller.listUsers)
}