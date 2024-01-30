import cn from 'classnames';
import Card from 'components/Card/Card';
import styles from './Main.module.css';
import { CARDS } from 'common.const';

const Main = () => {
  return (
    <div className={cn('container is-fullhd', styles.container)}>
      <h1 className={cn('title is-1', styles.title)}>Choose your way to flow</h1>
      <div className={styles.cards}>
        {CARDS.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Main;
