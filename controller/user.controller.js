async function user(req, res) {
  let username = { username: "@codeguyakash" };
  return res
    .status(201)
    .cookie("accessToken", "eywheqweiqweqwieuqwoueqp")
    .send(username);
}

module.exports = { user };
