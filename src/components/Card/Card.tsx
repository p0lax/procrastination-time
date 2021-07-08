import React from 'react';
import cn from 'classnames';
import { CardType } from '~src/services/types';

import styles from './Card.module.css';

export default function Card(props: CardType) {
  const { title, description, img } = props;
  return (
    <div className={cn('card', styles.card)}>
      <div className="card-image">
        <figure className="image">
          <img src={img} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{title}</p>

        <div className="content">{description}</div>
      </div>
    </div>
  );
}
