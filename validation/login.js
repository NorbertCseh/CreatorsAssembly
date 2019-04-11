const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //Belépés email-el és jelszóval, ha üres a mező akkor hiba
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //Ha nem email formátuma van, akkor hiba
  if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid Email";
  }

  //Ha üres valamelyik hiba akkor hiba
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required!";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
