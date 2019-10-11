import React from "react";

import style from "./style.scss";

const Button = ({ children, onClick }) => <button onClick={onClick} className={style.button}>{children}</button>;

export default Button;
