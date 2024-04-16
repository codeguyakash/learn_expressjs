const verifyUser = async (req, res, next) => {
  try {
    const admin = "codeguyakash_superman";
    const token = req.cookies?.accessToken;
    const auth = req.header("authorization").split(" ")[1];

    if (auth == admin) {
      console.log("Super User can Access");
      next();
    } else {
      console.log("Invalid Access Token");
      return res.status(401).send({ message: "Unauthorized", statusCode: 401 });
    }
  } catch (error) {
    console.log(error, "Invalid Access Token");
    return res
      .status(401)
      .send({ message: "Unauthorized", statusCode: 401, error });
  }
};
module.exports = verifyUser;
