import Button from "../button/Button";
import cn from "classnames";
import styles from "./card.module.scss";

export default function Card({ data }) {
  // console.log(data);

  return (
    <div className={cn(styles.card)}>
      <div className={cn(styles["card__img-wrapper"])}>
        <img className={cn(styles["card__img"])} src={data.image} alt="" />
      </div>
      <div className={cn(styles["card__info"])}>
        <span className={cn(styles["card__title"])}>{data.title}</span>
        <p className={cn(styles["card__description"])}>{data.description}</p>
        <p className={cn(styles["card__ingredients"])}>{data.ingredients}</p>
      </div>
      <div className={cn(styles["card__btn-wrapper"])}>
        <Button use="order" text="Order now"></Button>
      </div>
    </div>
  );
}
