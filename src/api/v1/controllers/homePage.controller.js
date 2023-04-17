import { testEvironmentVariable } from '../../../setting.js';

class HomePageController {
  getHome(req, res) {
    res.status(200).json({
      message: 'Welcome to Express API template',
      test: testEvironmentVariable,
    });
  }
}

export default new HomePageController();
