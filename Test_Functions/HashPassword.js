import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = (password) => {
  bcrypt
    .hash(password, saltRounds)
    .then((hash) => {
      return hash;
    })
    .catch((err) => {
      console.error(err);
    });
};

export { hashPassword };
