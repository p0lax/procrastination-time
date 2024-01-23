import cn from "classnames";
import React, { useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { CARDS } from "constants";
import { CardType } from "services/types";
import { rootStore } from "stores";
import SceneControls from "../SceneControls/SceneControls";
import Timer from "../Timer/Timer";
import styles from "./Scene.module.css";
import { timerSignal } from "features/WorkTimer/signals/timerSignal";
import audioPath from "assets/sounds/sea_1.mp3?url";
import { audioSignal } from "features/WorkTimer/signals/audioSignal";

const Scene = React.memo(() => {
  const { id } = useParams();
  const card: CardType | undefined = CARDS.find((item) => item.id === id);
  const { status, stopTimer, startTimer, resetTimer } = timerSignal;
  const { setSong, toggleAudio } = audioSignal;
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setSong(card?.id);
    resetTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("audioPath", audioPath);
  const onTimerToggle = () => {
    toggleAudio();
    if (ref.current) {
      ref.current.volume = 1;
      ref.current.play();
    }
    if (status.value === "running") {
      stopTimer();
      return;
    }
    startTimer();
  };

  const imageClassName = cn("image", styles.image, {
    [styles.running]: status.value === "running",
  });

  const image = useMemo(
    () => (
      <figure className={imageClassName}>
        <img src={`./assets/images/${card?.id}_0.jpg`} alt={card?.title} />
      </figure>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [status.value]
  );

  if (!card) {
    return null;
  }

  return (
    <div className={cn("content", styles.scene)}>
      {image}
      {/* <audio autoPlay controls>
        <source src={audioPath} type="audio/mp3"></source>
      </audio> */}
      <SceneControls
        url={card.id}
        onPlay={onTimerToggle}
        store={rootStore.audioStore}
      />
      <Timer />
    </div>
  );
});

export default Scene;
