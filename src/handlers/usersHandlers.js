const {
  createUser,
  getAllUsers,
  updateUser,
  getUserById,
  postReview,
  deletReview,
} = require("../controllers/usersControllers");

const postUserHandler = async (req, res) => {
  const { id, username, name, lastname, email, country, phone } = req.body;
  try {
    const response = await createUser(
      id,
      username,
      name,
      lastname,
      email,
      country,
      phone
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllUsersHandler = async (req, res) => {
  const { username } = req.query;
  try {
    const response = await getAllUsers(username);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getUserByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getUserById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserHandler = async (req, res) => {
  const {
    id,
    username,
    name,
    lastname,
    email,
    country,
    postalcode,
    photo,
    phone,
    paymentMethod,
    shippingAddress,
    isActive,
    isBan,
    isAdmin,
  } = req.body;

  const updateData = {
    username,
    name,
    lastname,
    email,
    country,
    postalcode,
    photo,
    phone,
    paymentMethod,
    shippingAddress,
    isActive,
    isBan,
    isAdmin,
  };

  try {
    const response = await updateUser(id, updateData);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postReviewHandler = async (req, res) => {
  const {userId, bookId, rating, reviewContent} = req.body
  try {
    await postReview(userId, bookId, rating, reviewContent);
    res.status(200).send("review created successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletReviewHandler = async(req, res) =>{
  const {id} = req.params
  try {
    const response = await deletReview(id)
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
module.exports = {
  postUserHandler,
  getAllUsersHandler,
  updateUserHandler,
  getUserByIdHandler,
  postReviewHandler,
  deletReviewHandler
};
