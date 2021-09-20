import React from 'react';
import cn from 'classnames';
import { CardType } from '~src/services/types';
import { useHistory } from 'react-router-dom';

import styles from './Card.module.css';

export default function Card(props: CardType) {
  const { id, title, description } = props;
  const history = useHistory();

  const goToScene = () => {
    history.push(`/scene/${id}`);
  };

  return (
    <div className={cn('card', styles.card)} onClick={goToScene}>
      <div className={cn('card-image', styles.imageWrapper)}>
        <figure className="image">
          <img src={`/assets/images/${id}_0.jpg`} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{title}</p>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}
