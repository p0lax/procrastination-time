import cn from "classnames";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AudioFlowStore } from "stores/AudioFlowStore";
import styles from "./SceneControls.module.css";

interface SceneControlsProps {
  store: AudioFlowStore;
  url: string;
  onPlay: () => void;
}

function SceneControls(props: SceneControlsProps) {
  const { store } = props;

  useEffect(() => {
    // store.initContext(props.url);

    return () => {
      store.reset();
    };
  }, []);

  const navigate = useNavigate();
  const playClassName = cn("fas", styles.playIcon, styles.icon, {
    "fa-play": !store.isPlaying,
    "fa-pause": store.isPlaying,
  });
  const moveBack = () => {
    navigate(-1);
  };
  const onPlay = () => {
    store.toggle();
    props.onPlay();
  };
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.backItemWrapper}>
        <i
          className={cn("fas fa-long-arrow-alt-left", styles.backBtn)}
          onClick={moveBack}
        ></i>
      </div>
      <div className={styles.playWrapper} onClick={onPlay}>
        <i className={playClassName}></i>
      </div>
      <div className={styles.volumeWrapper}>
        <span className={styles.value}>{store.volume * 100} % </span>
        <div className={styles.controls}>
          <i
            className={cn("fas fa-plus", styles.icon)}
            onClick={store.levelUp}
          ></i>
          <i
            className={cn("fas fa-minus", styles.icon)}
            onClick={store.levelDown}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default observer(SceneControls);