import LoginFB from "../../images/Login_FB.svg";
import LoginGG from "../../images/Login_Google.svg";
import LoginAp from "../../images/Login_Apple.svg";
import Button from "../Button";
import { useContext, useState } from "react";
import axios from "axios";
import { LoginContext } from "../../App";

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [checkAccount, setCheckAccount] = useState(true);

  const { setStatus, setOpenSignin } = useContext(LoginContext);

  const [errorMessage, setErrorMessage] = useState({
    username: "",
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
      username: "",
      password: "",
    });
    setErrorMessage("");
  };

  const isUserNameValid = (username) => {
    return /^[a-z0-9_-]+$/i.test(username);
  };

  const isPasswordValid = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`])[\w!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`]{8,}$/.test(
      password
    );
  };

  const handleSummit = async (e, type) => {
    e.preventDefault();
    // type === true =>>> "signin";
    if (type) {
      if (!isUserNameValid(formData.username)) {
        console.log("12312312");
        setErrorMessage((prev) => ({
          ...prev,
          username: "Invalid username",
        }));
        return;
      }
      if (!isPasswordValid(formData.password)) {
        console.log("988989890890");

        setErrorMessage((prev) => ({
          ...prev,
          password: "Invalid password",
        }));
        return;
      }
      console.log(errorMessage);
      //   if (formData.password !== formData.confirm_password) {
      //     setErrorMessage((prev) => ({
      //       ...prev,
      //       confirm_password: "Password not match",
      //     }));
      //     return;
      //   }

      try {
        const res = await axios.post(
          "http://localhost:5000/api/v1/auth/login",
          {
            username: formData.username,
            password: formData.password,
          }
        );
        console.log(res);
        if (res.status === 200) {
          setStatus("searchResult");
          setOpenSignin(false);
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
            username: formData.username,
            password: formData.password,
            email: formData.email,
          }
        );
        console.log(res);
      } catch (error) {
        setErrorMessage((prev) => ({
          ...prev,
          message: error.response.data.msg,
        }));
      }
    }
  };

  return (
    <div>
      <div className="w-[430px] h-[696px] rounded-[12px] bg-white mx-auto fixed z-50 top-[10%] left-[35%]">
        <div onClick={() => setOpenSignin(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 absolute right-0 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="font-[600] text-[26px] text-center my-8 pt-[34px]">
          {checkAccount ? "Sign In" : "Sign Up"}
        </h2>
        <div className="flex flex-col justify-center items-center gap-6 ">
          <button className="flex justify-evenly items-center w-[370px] h-[50px] rounded-[6px] border-[1px] border-black">
            <img src={LoginFB} alt="" className="ml-[-50px]" />
            Continue with Facebook
          </button>
          <button className="flex justify-evenly items-center w-[370px] h-[50px] rounded-[6px] border-[1px] border-black">
            <img src={LoginGG} alt="" className="ml-[-58px]" />
            Continue with Google
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
          className="flex flex-col justify-center items-center gap-5"
        >
          <input
            value={formData.username}
            onChange={handleChangeUser}
            className=" w-[370px] h-[60px] border-black border-[1px] rounded-[6px] pl-[15px]"
            type="text"
            placeholder="Username"
            name="username"
          />
          <p className="error_message" style={{ color: "red" }}>
            {errorMessage.username}
          </p>
          {!checkAccount && (
            <>
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
            </>
          )}
          <input
            value={formData.password}
            onChange={handleChangeUser}
            className=" w-[370px] h-[60px] border-black border-[1px] rounded-[6px] pl-[15px] mb-[30px]"
            type="password"
            placeholder="Password"
            name="password"
          />
          <p className="error_message" style={{ color: "red", fontSize: "14px" ,width:"370px",display:"block",textAlign:"center"}}>

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
