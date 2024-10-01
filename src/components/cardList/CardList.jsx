import { useEffect, useState } from "react";
import Card from "../card/Card";
import styles from "./cardList.module.scss";
import cn from "classnames";

export default function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className={cn(styles["card-list"])}>
      {cards.map((card) => (
        <Card key={card.id} data={card}></Card>
      ))}
    </div>
  );
}

/* 

useEffect
отарбатываает когда произошел render
[] - массив зависимостей - если пустой, запусти () => 1 раз


*/
