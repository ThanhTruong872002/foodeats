import { useContext } from "react";
import "./style.css";
import { LoginContext } from "../../App";

export default function Button({ children, classNameCustom, onClick }) {
  const { authenticated } = useContext(LoginContext);
  const handleClickSignIn = () => {
    onClick && onClick();
  };
  return (
    <div>
      <button
        type="summit"
        className={`${classNameCustom} btn ${authenticated && "bg-black"}`}
        onClick={handleClickSignIn}
      >
        {children}
      </button>
    </div>
  );
}
