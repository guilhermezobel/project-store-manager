const ServiceSales = require('../services/sales');

const getAll = async (_req, res, next) => {
  try {
    const sales = await ServiceSales.getAll();
    return res.status(200).json(sales);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await ServiceSales.getById(id);
    if (!sale.length) {
      return res.status(404).json({ message: 'Sale not found' });
    }
      return res.status(200).json(sale);
    } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = req.body[0];
    const updateSale = await ServiceSales.update(id, sale.productId, sale.quantity);
    
      return res.status(200).json(updateSale);
    } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
  update,
};