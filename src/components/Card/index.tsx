import React from 'react';

import classnames from 'classnames';

import styles from './card.module.css';

export const Card: React.FC<React.ComponentProps<'div'>> = ({ children, className }) => {
  return <div className={classnames(styles.card, className)}>{children}</div>;
};
