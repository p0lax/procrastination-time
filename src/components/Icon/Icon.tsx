import Play from './svg/play.svg?react';
import Pause from './svg/pause.svg?react';
import Back from './svg/back.svg?react';
import Plus from './svg/plus.svg?react';
import Minus from './svg/minus.svg?react';
import SpeakerOn from './svg/speakerOn.svg?react';
import SpeakerOff from './svg/speakerOff.svg?react';
import cn from 'classnames';
import styles from './Icon.module.css';

const ICON_MAP = {
  play: Play,
  pause: Pause,
  back: Back,
  plus: Plus,
  minus: Minus,
  speakerOn: SpeakerOn,
  speakerOff: SpeakerOff,
};

type IconType = keyof typeof ICON_MAP;

type IconProps = {
  type: IconType;
  size?: 'lg' | 'md' | 'sm';
  onClick?: () => void;
};

const Icon = ({ type, size = 'lg', onClick }: IconProps) => {
  const IconComponent = ICON_MAP[type];
  return (
    <span
      className={cn(styles.icon, { [styles[size]]: true })}
      onClick={onClick}
    >
      <IconComponent />
    </span>
  );
};

export default Icon;
