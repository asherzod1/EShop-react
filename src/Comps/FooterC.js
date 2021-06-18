import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import {GrSend} from 'react-icons/gr'
import { Button } from 'reactstrap'
import './NavbarFooter.scss'

const FooterC = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div className="row">
                            <div className="col-md-4">
                                <h3 className='f-text' style={{marginBottom:'36px'}}>О компании</h3>
                                <Link className='f-link d-block'>Гарантии качества</Link>
                                <Link className='f-link d-block'>Адреса и контакты</Link>
                                <h3 className='f-text'>Производство</h3>
                                <Link className='f-link d-block'>Принципы</Link>
                                <Link className='f-link d-block'>Новости</Link>
                                <Link className='f-link d-block'>Медиа</Link>
                            </div>
                            <div className="col-md-4">
                                <h3 className='f-text' style={{marginBottom:'36px'}}>Продукция партнеров</h3>
                                <Link className='f-link d-block'>Shivaki</Link>
                                <Link className='f-link d-block'>Samsung</Link>
                                <Link className='f-link d-block'>Avalon</Link>
                                <Link className='f-link d-block'>Royal</Link>
                                <Link className='f-link d-block'>Вакансии</Link>
                                <Link className='f-link d-block'>Онлайн CV</Link>
                            </div>
                            <div className="col-md-4">
                                <h3 className='f-text' style={{marginBottom:'36px'}}>Все категории</h3>
                                <Link className='f-link d-block'>Мелакая бытовая техника</Link>
                                <Link className='f-link d-block'>Телефоны</Link>
                                <Link className='f-link d-block'>Телевизоры</Link>
                                <Link className='f-link d-block'>Печи </Link>
                                <Link className='f-link d-block'>Пылесосы</Link>
                                <Link className='f-link d-block'>Плиты</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="row align-items-center">
                            <div className='col-md-4 col-sm-4'>
                                <img src="/images/qrcode.png" alt="imagee" />
                            </div>
                            <div className="col-md-8 col-sm-8">
                                <h3 style={{fontSize: '30px', lineHeight:'32px', color:'#1C1C33'}}>Скачать приложение Artel</h3>
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col-md-6 col-sm-6">
                                <Link><img className='w-100' style={{height:'60px'}} src="/images/appstore.png" alt="imagee" /></Link>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <Link><img className='w-100' style={{height:'60px'}} src="/images/playmarket.png" alt="imagee" /></Link>
                            </div>
                        </div>
                        <div className="mt-5 d-flex justify-content-around f-icons">
                            <div className="">
                                <Link className='w-100 f-icons'><AiOutlineFacebook size='60px' /></Link>
                            </div>
                            <div className="">
                                <Link className='w-100 f-icons' color='secondary'><AiOutlineInstagram size='60px' /></Link>
                            </div>
                            <div className="">
                                <Link className='w-100 f-icons' color='#000'><GrSend size='60px' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-8 col-sm-12">
                        <p className='f-p'>
                            Информация на сайте предоставлена исключительно для предварительного ознакомления.
                        </p>
                        <p className='f-p'>
                            Производитель оставляет за собой право на внесение изменений в конструкцию, комплектацию и дизайн приборов.
                        </p>
                        <p className='f-p'>
                            Комплектация и дизайн товара могут также варьироваться в зависимости от модели, страны поставки и предпочтений заказчика.  
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <Button className='d-block w-100 f-btn'>Скачать весь каталог продукции</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterC
