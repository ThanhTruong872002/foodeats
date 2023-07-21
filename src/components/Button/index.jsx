import "./style.css";

export default function Button({ children, classNameCustom, onCLick }) {

  const handleClickSignIn = () => {
    // onCLick();
  };
  return (
    <div>
      <button
        type="summit"
        className={`${classNameCustom} btn `}
        onClick={handleClickSignIn}
      >
        {children}
      </button>
    </div>
  );
}
