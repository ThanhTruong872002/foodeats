import LoginFB from "../../images/Login_FB.svg";
import LoginAp from "../../images/Login_Apple.svg";
import LoginGG from "../../images/Login_Google.svg";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LoginContext } from "../../App";
import { useGoogleLogin } from "@react-oauth/google";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    message: "",
  });

  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setCheckAccount(!checkAccount);
    setFormData({
      email: "",
      password: "",
    });
    setErrorMessage("");
  };

  const isUserNameValid = (username) => {
    return /^([A-Za-z]+)\s([A-Za-z]+)$/i.test(username);
  };

  const isPasswordValid = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`])[\w!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`]{8,}$/.test(
      password
    );
  };

  const [user, setUser] = useState([]);
  // console.log("🚀 ~ file: index.jsx:25 ~ SignIn ~ user:", user);
  const [checkAccount, setCheckAccount] = useState(true);
  const { setStatus, setOpenSignin, setAuthenticated, setProfile, profile } =
    useContext(LoginContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Kiểm tra nếu có thông tin xác thực trong local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const isAuthenticated = localStorage.getItem("authenticated") === "true";

    if (isAuthenticated && storedUser) {
      setIsLoggedIn(true);
      setCurrentUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  const handleSummit = async (e, type) => {
    e.preventDefault();
    if (type) {
      if (!token || !currentUser) {
        console.log("Thiếu token hoặc user. Yêu cầu đăng nhập lại.");
        return;
      }
      if (!checkAccount) {
        if (!isUserNameValid(formData.firstname)) {
          setErrorMessage((prev) => ({
            ...prev,
            firstname: "Invalid Firstname",
          }));
          return;
        }
        if (!isUserNameValid(formData.lastname)) {
          setErrorMessage((prev) => ({
            ...prev,
            lastname: "Invalid Firstname",
          }));
          return;
        }
        if (!isPasswordValid(formData.password)) {
          setErrorMessage((prev) => ({
            ...prev,
            password: "Invalid password",
          }));
          return;
        }
      }
      try {
        const res = await axios.post(
          "http://localhost:5000/api/v1/auth/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );
        if (res.status === 200) {
          setIsLoggedIn(true);
          setCurrentUser(res.data.user);
          setToken(res.data.token);

          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("authenticated", true);

          setStatus("searchResult");
          setOpenSignin(false);
          setAuthenticated(true);
          setProfile(res.data.user);
        }
        if (res.response.status !== 200) {
          console.log(res.response.data.msg);
        }
      } catch (error) {}
    }
    if (!type) {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/v1/auth/register",
          {
            firstname: formData.firstname,
            lastname: formData.lastname,
            password: formData.password,
            email: formData.email,
          }
        );
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("authenticated", true);
      } catch (error) {
        setErrorMessage((prev) => ({
          ...prev,
          message: error.response.data.msg,
        }));
      }
    }
  };

  // Login Google
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          const respone = axios.post(
            "http://localhost:5000/api/v1/auth/login/google",
            user.access_token
          );

          localStorage.setItem("user", JSON.stringify(user.data.user));
          localStorage.setItem("token", JSON.stringify(user.data.token));
          localStorage.setItem("authenticated", true);
        })
        .catch((err) => {});
    }
  }, [user]);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-300 h-[100vh]">
      <div className="w-[430px] h-[750px] rounded-[12px] bg-white mx-auto ">
        <div onClick={() => setOpenSignin(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 absolute cursor-pointer "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="font-[600] text-[26px] text-center my-8 pt-[10px]">
          {checkAccount ? "Sign In" : "Sign Up"}
        </h2>
        <div className="flex flex-col justify-center items-center gap-6 ">
          <button
            className="flex justify-evenly items-center w-[370px] h-[50px] rounded-[6px] border-[1px] border-black"
            onClick={() => login()}
          >
            <img src={LoginGG} alt="" className="ml-[-60px]" />
            Continue with Google{" "}
          </button>
          <button className="flex justify-evenly items-center w-[370px] h-[50px] rounded-[6px] border-[1px] border-black">
            <img src={LoginFB} alt="" className="ml-[-50px]" />
            Continue with Facebook
          </button>
          <button className="flex  justify-evenly items-center w-[370px] h-[50px] rounded-[6px] border-[1px] border-black">
            <img src={LoginAp} alt="" className="ml-[-58px]" />
            Continue with Apple
          </button>
        </div>
        <div className="text-center text-gray-500 text-[16px] my-5">
          <p>OR</p>
        </div>
        <form
          onSubmit={(e) => handleSummit(e, checkAccount)}
          className="flex flex-col justify-center items-center gap-4"
        >
          {!checkAccount && (
            <>
              <input
                value={formData.firstname}
                onChange={handleChangeUser}
                className=" w-[370px] h-[60px] border-black border-[1px] rounded-[6px] pl-[15px]"
                type="text"
                placeholder="First name"
                name="firstname"
              />
              <p className="error_message" style={{ color: "red" }}>
                {errorMessage.firstname}
              </p>
              <input
                value={formData.lastname}
                onChange={handleChangeUser}
                className=" w-[370px] h-[60px] border-black border-[1px] rounded-[6px] pl-[15px]"
                type="text"
                placeholder="Last name"
                name="lastname"
              />
              <p className="error_message" style={{ color: "red" }}>
                {errorMessage.lastname}
              </p>
            </>
          )}
          <input
            value={formData.email}
            onChange={handleChangeUser}
            className=" w-[370px] h-[60px] border-black border-[1px] rounded-[6px] pl-[15px]"
            type="email"
            placeholder="Email Address"
            name="email"
          />
          <p className="error_message" style={{ color: "red" }}>
            {errorMessage.email}
          </p>
          <input
            value={formData.password}
            onChange={handleChangeUser}
            className=" w-[370px] h-[60px] border-black border-[1px] rounded-[6px] pl-[15px] mb-[10px]"
            type="password"
            placeholder="Password"
            name="password"
          />
          <p
            className="error_message"
            style={{
              color: "red",
              fontSize: "14px",
              width: "370px",
              display: "block",
              textAlign: "center",
            }}
          >
            {errorMessage.password || errorMessage.message}
          </p>

          <Button classNameCustom="w-[370px]">
            {checkAccount ? "Sign In" : "Sign Up"}
          </Button>
          <span className="mt-[10px] text-[18px]">
            {!checkAccount ? " Don’t a have account?" : "Have an  account?"}
            <span className="font-bold ml-[10px]">
              <a className="cursor-pointer" onClick={handleCreateAccount}>
                {!checkAccount ? " Sign In" : "Sign Up"}
              </a>
            </span>
          </span>
        </form>
      </div>
    </div>
  );
}
