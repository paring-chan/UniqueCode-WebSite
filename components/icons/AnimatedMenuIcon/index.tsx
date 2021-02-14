import React from 'react'
import styles from './AnimatedMenuIcon.module.scss'
import clsx from 'clsx'

const AnimatedMenuIcon = ({ active }: { active: boolean }) => {
  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.icon, {
          [styles.active]: active,
        })}
      />
    </div>
  )
}

export default AnimatedMenuIcon
