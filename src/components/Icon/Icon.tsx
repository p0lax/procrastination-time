/* eslint-disable import/no-unresolved */
import Play from './svg/play.svg?react';
import Pause from './svg/pause.svg?react';
import Back from './svg/back.svg?react';
import Plus from './svg/plus.svg?react';
import Minus from './svg/minus.svg?react';
import SpeakerOn from './svg/speakerOn.svg?react';
import SpeakerOff from './svg/speakerOff.svg?react';
import Spin from './svg/refresh.svg?react';
import ArrowUp from './svg/arrowUp.svg?react';
import ArrowDown from './svg/arrowDown.svg?react';
import cn from 'classnames';
import styles from './Icon.module.css';
import { KeyboardEvent } from 'react';

const ICON_MAP = {
  play: Play,
  pause: Pause,
  back: Back,
  plus: Plus,
  minus: Minus,
  speakerOn: SpeakerOn,
  speakerOff: SpeakerOff,
  spin: Spin,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
};

type IconType = keyof typeof ICON_MAP;

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: IconType;
  size?: 'lg' | 'md' | 'sm';
  disabled?: boolean;
  onClick?: () => void;
}

const Icon = ({ type, size = 'lg', disabled = false, onClick }: IconProps) => {
  const IconComponent = ICON_MAP[type];
  const onKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter') {
      onClick?.();
    }
  };
  return (
    <span
      className={cn(styles.icon, { [styles[size]]: true, [styles.disabled]: disabled })}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      <IconComponent />
    </span>
  );
};

export default Icon;
