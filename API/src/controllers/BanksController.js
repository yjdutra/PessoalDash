const Banks = require("../models/Banks");

async function veriftById(collection, id) {
  const identification = await collection.findByPk(id);
  if (!identification) {
    return res.status(400).json({ err: "Identification not found" });
  }
}

module.exports = {
  async store(req, res) {
    const { bank_name, limit, debt } = req.body;

    let status = debt > 0 ? false : true;

    const date = new Date();
    const month = date.getMonth() + 1;

    const bank = await Banks.create({
      bank_name,
      limit,
      debt,
      month,
      status,
    }).catch((err) => {
      throw new Error(err);
    });

    return res.json(bank);
  },

  async show(req, res) {
    const banks = await Banks.findAll().catch((err) => {
      throw new Error(err);
    });

    return res.json(banks);
  },

  async index(req, res) {
    const { id } = req.params;

    const bank = await Banks.findByPk(id).catch((err) => {
      throw new Error(err);
    });

    return res.json(bank);
  },

  async update(req, res) {
    const { id } = req.params;

    veriftById(Banks, id);

    const { bank_name, month, limit, debt, status } = req.body;

    const bank = await Banks.update(
      {
        bank_name: bank_name,
        month: month,
        limit: limit,
        debt: debt,
        status: status,
      },
      {
        where: { id: id },
      }
    ).catch((err) => {
      throw new Error(err);
    });

    return res.json(bank);
  },

  async delete(req, res) {
    const { id } = req.params;

    veriftById(Banks, id);

    const bank = await Banks.destroy({
      where: { id },
    }).catch((err) => {
      throw new Error(err);
    });

    return res.json(bank);
  },
};
