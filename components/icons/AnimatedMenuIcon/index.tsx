import React from 'react'
import styles from './AnimatedMenuIcon.module.scss'

const AnimatedMenuIcon = ({ active: boolean }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon} />
    </div>
  )
}

export default AnimatedMenuIcon
