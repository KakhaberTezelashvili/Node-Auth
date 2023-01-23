const getAllEmployees = function (req, res) {
  res.send("Fetching all employees");
};

const getEmployeeById = function (req, res) {
  res.send(`Fetching employee by id: ${req.params.id}`);
};

const deleteEmployee = function (req, res) {
  res.send(`Fetching employee by id: ${req.params.id}`);
};

const updateEmployee = function (req, res) {
  res.send(`Updating employee by id: ${req.params.id}`);
};

const createEmployee = function (req, res) {
  res.send(`Creating new employee`);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
  createEmployee,
};
