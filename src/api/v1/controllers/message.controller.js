import userService from '../services/message.service.js';

class UserController {
  getUsers(req, res) {
    const list = userService.getUsers();
    res.json(list);
  }

  getUsersById(req, res) {
    const { id } = req.params;
    const user = userService.getUserById(id);
    res.json(user);
  }
}

export default new UserController();
