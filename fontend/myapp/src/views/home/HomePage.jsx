import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import Banner from '../../components/banner/Banner'
import Slides from '../../components/slides/Slides'
import {imgs} from '../../assets/Imgs/slides/slides'
import {banner} from '../../assets/Imgs/banner/banner'
import Catalogy from '../../components/catalogy/Catalogy'
import ItemWrapper from '../../components/items/ItemWrapper'
import LoadingPage from '../loadding/LoadingPage'

function HomePage() {
    const check = false;
    //call api ở đây => truyền vào các danh mục và sản phẩm
  return (
    <>
    {
        check===true ? (
            <LoadingPage/>
        )
        :(
            <main>
            <Container>
            <Row>
                <Col lg={8}>
                    <Slides slide ={imgs.top} interval={3000}/>
                </Col>
                <Col lg={4}>
                    <Banner banner={banner.top}/>
                </Col>
            </Row>
            <br />
            <Banner banner={banner.mid}/>
            <br />
            <div className="sp-main-wrapper">
                <div className='sp-wrapper-title'>Danh Mục</div>
                <Catalogy/>
            </div>
            <br />
            <Banner banner={banner.bottom}/>
            <br />
            <div className="sp-main-wrapper">
                <div className='sp-wrapper-title'>ShopMail</div>
                
                <Row>
                    <Col lg={4}>
                        <Slides slide={imgs.mid} interval={1500}/>
                    </Col>
                </Row>
            </div>
            <br />
            <div className="sp-main-wrapper">
                <div className='sp-wrapper-title-item'>gợi ý hôm nay</div>
    
                <div className="sp-wrapper-hr"></div>
                <ItemWrapper/>
            </div>
    
            </Container>        
            <div className="sp-wrapper-hr"></div>
        </main>
        )
    }
    </>
    
  )
}

export default HomePage