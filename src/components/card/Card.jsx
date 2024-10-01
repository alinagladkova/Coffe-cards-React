// import Button from "../button/Button";
import cn from "classnames";
import styles from "./card.module.scss";

export default function Card() {
  return (
    <div className={cn(styles.card)}>
      <div className="card__img-wrapper">
        <img className="card__img" src="" alt="" />
      </div>
      <div className="card__info">
        <span className="card__title"></span>
        <p className="card__description"></p>
        <span className="card__price"></span>
        <div className="card__btn-wrapper">{/* <Button></Button> */}</div>
      </div>
    </div>
  );
}
