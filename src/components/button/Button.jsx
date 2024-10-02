import styles from "./button.module.scss";
import cn from "classnames";

export default function Button({ use, text }) {
  return <button className={cn(styles.btn, styles[`btn--${use}`])}>{text}</button>;
}
