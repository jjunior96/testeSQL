import Address from '../models/Address';

class AddressController {
  async store(req, res) {
    const {
      zip_code,
    } = req.body;

    const address = await Address.create({
      zip_code,
    });

    return res.json(address);
  }
}

export default new AddressController();
