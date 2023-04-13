import userService from '../services/user.service.js';

class UserController {
  getUsers(req, res) {
    const list = userService.getUsers();
    return res.json(list);
  }

  getUsersById(req, res) {
    const { id } = req.params;
    const user = userService.getUserById(id);
    return res.json(user);
  }
}

export default new UserController();
