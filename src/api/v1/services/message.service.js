import Model from "../models/message.model.js";

const messagesModel = new Model('messages');
class MessageService {
  async getUsers() {
    return (await messagesModel.select()).rows;
  };

  async getUserById(id) {
    return (await messagesModel.select(`id = ${id}`)).rows[0];
  };

  async save(values) {
    return (await messagesModel.insertWithReturn('id, name, message', values));
  };

  update() {};

  delete() {};
};

export default new MessageService();
