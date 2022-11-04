import React from 'react'
import styles from './styles/styles.module.css'

function Item({title , src}) {
  return (
    <a href='' className={styles.item}>
        <img src={src} alt="" />
        <p>{title}</p>
    </a>
  )
}

export default Item