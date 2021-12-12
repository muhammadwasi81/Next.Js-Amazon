import jwt from 'jsonwebtoken';

const signToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },

    process.env.JWT_SECRET,
    {
      expiresIn: '3600d',
    }
  );
};
// const isAuth = async (req, res, next) => {
//   const { authorization } = req.headers;
//   if (authorization) {
//     // Bearer xxx => xxx
//     const token = authorization.slice(7, authorization.length);
//     jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
//       if (err) {
//         res.status(401).send({ message: 'Token is not valid' });
//       } else {
//         req.user = decode;
//         next();
//       }
//     });
//   } else {
//     res.status(401).send({ message: 'Token is not supplied' });
//   }
// };

// Another Try for token
const isAuth = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token)
    return res.status(401).send('Access Denied / Unauthorized request');

  try {
    token = token.split(' ')[1]; // Remove Bearer from string

    if (token === 'null' || !token)
      return res.status(401).send('Unauthorized request');

    let verifiedUser = jwt.verify(token, process.env.JWT_SECRET); // config.TOKEN_SECRET => 'secretKey'
    if (!verifiedUser) return res.status(401).send('Unauthorized request');

    req.user = verifiedUser; // user_id & user_type_id
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};
export { signToken, isAuth };
