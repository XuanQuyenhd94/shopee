import React from 'react'
import styles from './styles/styles.module.css'

function Item() {
  return (
    <a href="">
        <div className={styles.wrapper}>
            <div className={styles.imgBox}>
                <img src="https://cf.shopee.vn/file/d0a1a411e5d41765d09b0cef77d7c293_tn" alt="" />
            </div>
            <div className={styles.title}>
                Áo Khoác Len Cardigan Hàng Quảng Châu
            </div>
            <div className={styles.container}>
                <div className={styles.price}>
                    <span>đ</span>
                    <span>10.000</span>
                </div>
                <div className={styles.sell}>
                    <span>Đã bán</span>
                    <span>20k</span>
                </div>
            </div>
            <div className={styles.sale}>
                <p>50%</p>
                <div>
                    giảm
                </div>
            </div>
            <div className={styles.sameProduct}>
                <p>Tìm sản phẩm tương tự</p>
            </div>
        </div>
    </a>
  )
}

export default Item