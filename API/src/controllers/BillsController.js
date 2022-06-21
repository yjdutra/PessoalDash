const Bills = require("../models/Bills");

async function veriftById(collection, id) {
  const identification = await collection.findByPk(id);
  if (!identification) {
    return res.status(400).json({ err: "Identification not found" });
  }
}

module.exports = {
  async store(req, res) {
    const { value, type } = req.body;

    const date = new Date();
    const month = date.getMonth() + 1;

    const bill = await Bills.create({
      type,
      value,
      month,
    }).catch((err) => {
      throw new Error(err);
    });

    return res.json(bill);
  },

  async show(req, res) {
    const bills = await Bills.findAll().catch((err) => {
      throw new Error(err);
    });

    return res.json(bills);
  },

  async index(req, res) {
    const { id } = req.params;

    const bill = await Bills.findByPk(id).catch((err) => {
      throw new Error(err);
    });

    return res.json(bill);
  },

  async update(req, res) {
    const { id } = req.params;

    veriftById(Bills, id);

    const { value, type } = req.body;

    const bill = await Bills.update(
      {
        value: value,
        type: type,
      },
      {
        where: { id: id },
      }
    ).catch((err) => {
      throw new Error(err);
    });

    return res.json(bill);
  },

  async pagar(req, res) {
    const { id } = req.params;

    veriftById(Bills, id);

    const date = new Date();

    const bill = await Bills.update(
      {
        paid: true,
        payment_date: date,
      },
      {
        where: { id: id },
      }
    ).catch((err) => {
      throw new Error(err);
    });

    return res.json(bill);
  },

  async delete(req, res) {
    const { id } = req.params;

    veriftById(Bills, id);

    const bill = await Bills.destroy({
      where: { id },
    }).catch((err) => {
      throw new Error(err);
    });

    return res.json(bill);
  },
};
