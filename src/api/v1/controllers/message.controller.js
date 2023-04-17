import MessageService from '../services/message.service.js';

class MessageController {
  async getUsers(req, res) {
    try {
      const list = await MessageService.getUsers();
      console.log(list);
      res.status(200).json(list);
    } catch (error) {
      res.status(200).json({
        message: error.stack
      });
    };
  };

  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await MessageService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(200).json({
        message: error.stack
      });
    };
  };

  async saveUser(req, res) {
    console.log(req.body);
    const values = `${req.body.id}, ${req.body.name}, ${req.body.message}`;
    try {
      const result = await MessageService.save(values);
      res.status(200).json({
        message: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.stack,
      });
    };
  };
}

export default new MessageController();
