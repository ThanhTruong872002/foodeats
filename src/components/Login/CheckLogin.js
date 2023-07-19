import axios from "axios";

const checkLogin = async (userName, password) => {
  const res = await axios.get(
    "https://6486a69cbeba6297278f00b8.mockapi.io/login"
  );

  if (res.data) {
    if (res.data.some((data) => data.username === userName)) {
      if (res.data.some((data) => data.password === password)) {
        return {
          status: true,
        };
      } else {
        return {
          status: false,
          message: { password: "Your password is incorrect" },
        };
      }
    }
  }
  return {
    status: false,
    message: {
      username: "User name is incorrect",
      password: "Your password is incorrect",
    },
  };
};

export default checkLogin;
