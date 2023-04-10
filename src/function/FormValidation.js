const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "email is necessary";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Email is not in correct form";
  } else {
    delete errors.email;
  }
  if (!data.password) {
    errors.password = "password is necessary";
  } else if (data.password.length < 8) {
    errors.password = "password might be 8 character or more";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "name and family name are necessary";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "password confirmation is necessary";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "confirmation and you're password must be same";
    } else {
      delete errors.confirmPassword;
    }
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "please check our rules and privacy";
    }
  }

  return errors;
};

export default validate;
