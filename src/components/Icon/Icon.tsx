import Play from './svg/play.svg?react';
import Pause from './svg/pause.svg?react';
import cn from 'classnames';
import styles from './Icon.module.css';

const ICON_MAP = {
  play: Play,
  pause: Pause,
};

type IconType = keyof typeof ICON_MAP;

type IconProps = {
  type: IconType;
  size?: 'lg' | 'md' | 'sm';
};

const Icon = ({ type, size = 'lg' }: IconProps) => {
  const IconComponent = ICON_MAP[type];
  return (
    <span className={cn(styles.icon, { [styles[size]]: true })}>
      <IconComponent />
    </span>
  );
};

export default Icon;
