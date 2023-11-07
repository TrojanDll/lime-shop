// import { Children } from "react";
import "./button.css";

const Button = ({ color = "main-bg-color", image, children, stylezz }) => {
  return (
    <button className={color} style={stylezz}>
      {image && <img src={image} alt="buttonImg" />}
      {children}
    </button>
  );
};

export default Button;
