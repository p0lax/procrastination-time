import cn from "classnames";
import { observer } from "mobx-react";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { CARDS } from "sections/constants";
import { CardType } from "services/types";
import { rootStore } from "stores";
import TimerStore from "stores/TimerStore";
import SceneControls from "../SceneControls/SceneControls";
import Timer from "../Timer/Timer";
import styles from "./Scene.module.css";

interface SceneProps {
  store: TimerStore;
}

function Scene(props: SceneProps) {
  const { id } = useParams();
  const card: CardType | undefined = CARDS.find((item) => item.id === id);
  const { countdown, status } = props.store;

  useEffect(() => {
    props.store.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTimerToggle = () => {
    if (status === "running") {
      props.store.stop();
      return;
    }
    props.store.start();
  };

  const imageClassName = cn("image", styles.image, {
    [styles.running]: status === "running",
  });

  const image = useMemo(
    () => (
      <figure className={imageClassName}>
        <img src={`./assets/images/${card?.id}_0.jpg`} alt={card?.title} />
      </figure>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [status]
  );

  if (!card) {
    return null;
  }

  return (
    <div className={cn("content", styles.scene)}>
      {image}

      <SceneControls
        url={card.id}
        onPlay={onTimerToggle}
        store={rootStore.audioStore}
      />
      <Timer time={countdown} status={status} />
    </div>
  );
}

export default observer(Scene);
