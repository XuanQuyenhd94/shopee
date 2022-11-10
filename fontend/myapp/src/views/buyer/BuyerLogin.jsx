import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/styles.module.css'

function BuyerLogin() {
  return (
    <div className={styles.wrapper}>
        <form >
            <div className={styles.title}>
                Đăng Nhập
            </div>
            <div className={styles.formControl}>
                <input type="text" placeholder='Số điện thoại' required/>
            </div>
            <div className={styles.formControl}>
                <input type="password" placeholder='Mật khẩu'  required/>
            </div>
            <div className={styles.formControl}>
                <button type='submit'>Đăng Nhập</button>
            </div>
            <div className={styles.hr}>                
            </div>
            <div className={styles.wrapLink}>
                Bạn mới biết đến Shopee <span><Link to={'/buyer/signup'}>Đăng ký</Link></span>
            </div>
        </form>
    </div>
  )
}

export default BuyerLogin