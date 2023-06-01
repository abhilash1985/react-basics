import React from "react";
import "./myStyles.css";
import styles from "./appStyles.module.css";

function Stylesheet(props) {
  let className = props.primary ? "primary" : "secondary";
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
      <h1 className={styles.success}>Module Stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
