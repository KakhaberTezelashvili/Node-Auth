function NotFound(res, id) {
  res.status(404).json({ data: `user with id ${id} not found !` });
}

function BadRequest(res, id) {
  res.status(400).json({ data: `user with id ${id} not found !` });
}

module.exports = { NotFound, BadRequest };
