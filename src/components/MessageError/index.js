import React from "react";

import style from "./style.scss";


const MessageError = ({ children }) => (
  <div className={style.wrapper}>
    <div>
      <div>
        <i className="fas fa-times"></i>
      </div>
    </div>
    <div>
      <b>Error!</b>
      <span>{children}</span>
    </div>
  </div>
);

export default MessageError;