import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zio_code: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Address;
