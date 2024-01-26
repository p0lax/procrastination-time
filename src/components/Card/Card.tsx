import cn from "classnames";
import { CardType } from "services/types";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

interface CardProps extends Omit<CardType, "img"> {}

export default function Card(props: CardProps) {
  const { id, title, description } = props;
  const navigate = useNavigate();

  const goToScene = () => {
    navigate(`/scene/${id}`);
  };

  return (
    <div className={cn("card", styles.card)} onClick={goToScene}>
      <div className={cn("card-image", styles.imageWrapper)}>
        <figure className="image">
          <img src={`./assets/images/${id}_0.jpg`} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{title}</p>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}