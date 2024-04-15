async function user(req, res) {
  let data = req.body;
  let cookie = req.cookies;
  res
    .status(200)
    .cookie("accessToken", "accessToken", "options")
    .send({ data, cookie });
}

module.exports = { user };
