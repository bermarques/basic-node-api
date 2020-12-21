module.exports = app => {
    const controller = app.controllers.users

    app.route('/users/')
    .get(controller.listUsers)
    .post(controller.saveUsers)
}