const {
  getOrdersByAmountSell,
  getAllOrders,
} = require("../controllers/paymentsControllers");

const getOrderHandler = async (req, res) => {
  try {
    const response = await getOrdersByAmountSell();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllOrdersHandler = async (req, res)=>{
  try {
    const response = await getAllOrders()
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getOrderHandler,
  getAllOrdersHandler
};
