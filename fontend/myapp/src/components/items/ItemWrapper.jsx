import React from 'react'
import styles from './styles/styles.module.css'
import {Row , Col} from 'react-bootstrap'
import Item from './Item'

function ItemWrapper() {
  return (
    <>
        <Row style={{backgroundColor:'white'}}>
        <Col lg={2}>
            <Item/>
        </Col>
        <Col lg={2}>
            <Item/>
        </Col>
        <Col lg={2}>
            <Item/>
        </Col>
        <Col lg={2}>
            <Item/>
        </Col>
        <Col lg={2}>
            <Item/>
        </Col>
        <Col lg={2}>
            <Item/>
        </Col>
        <Col lg={2}>
            <Item/>
        </Col>        
    </Row>
    <p className={styles.xt}>
        <a href="">Xem thêm</a>
    </p>
    </>
  )
}

export default ItemWrapper