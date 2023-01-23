const { NotFound, BadRequest } = require("../configs/errors");

const data = {
  users: require("../models/users.json"),
  setUsers: function (usersDB) {
    this.users = usersDB;
  },
};

const getAllUsers = (req, res) => {
  res.json(data.users);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = data.users.find((i) => i.id === userId);

  if (!user) {
    NotFound(res, userId);
  }

  res.json(user);
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = data.users.find((i) => i.id == userId);

  if (!user) {
    BadRequest(res, userId);
  }

  // reset db
  const filtered = data.users.filter((i) => i.id !== userId);
  data.setUsers(filtered);

  res.json(user);
};

const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = data.users.find((i) => i.id == userId);

  if (!user) {
    BadRequest(res, userId);
  }

  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;

  res.json(user);
};

const createUser = (req, res) => {
  const userId =
    data.users.length == 0 ? 1 : data.users[data.users.length - 1].id + 1;

  const newUser = {
    id: userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  data.users.push(newUser);

  res.status(201).json(newUser);
};

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  createUser,
};
