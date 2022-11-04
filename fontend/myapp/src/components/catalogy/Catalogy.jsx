import React from 'react'
import {catalogies} from '../../assets/Imgs/catalogy/catalogy'
import Item from './Item'
import styles from './styles/styles.module.css'

function Catalogy() {
  return (
    <div className={styles.catalogy}>
        {catalogies.map((item,index)=>{
            return (
                <Item title={item.title} src = {item.img}/>
            )
        })}
    </div>
  )
}

export default Catalogy