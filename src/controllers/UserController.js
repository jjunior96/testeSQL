import User from '../models/User';

class UserController {
  async store(req, res) {
    const { name } = req.body;

    const user = await User.create({ name });

    return res.json(user);
  }
}

export default new UserController();
