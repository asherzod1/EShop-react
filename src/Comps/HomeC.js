import React, {useContext} from 'react'
import CategoryCart from './sharedComp/CategoryCart'
import SliderCarousel from './sharedComp/SliderCarousel'
import { Link } from 'react-router-dom'
import {GrFormNext} from 'react-icons/gr'
import {RiScales3Line} from 'react-icons/ri'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, ButtonGroup
  } from 'reactstrap';
import './HomeC.scss'
import { StoreContext } from '../Store'
const HomeC = () => {
    const state = useContext(StoreContext);
    const [products, setProducts] = state.products;
    console.log(setProducts);
    return (
        <div>
            <SliderCarousel>
            </SliderCarousel>
            <div className="category">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className='category-h1'>Категории</h1>
                        <Link className='category-link'>Посмотреть все <GrFormNext /></Link>
                    </div>
                    <div className="row" style={{height: '', marginBottom: '65px'}}>
                        <div className="col-md-6 col-sm-12">
                            <CategoryCart img='/images/Category1.png' fsize='44px'>Мелкая бытовая техника</CategoryCart>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <CategoryCart img='/images/Category2.png' fsize='24px'>Телефоны</CategoryCart>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <CategoryCart img='/images/Category3.png' fsize='24px'>Телевизоры</CategoryCart>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6 col-sm-6">
                                    <CategoryCart img='/images/Category4.png' fsize='24px'>Печи</CategoryCart>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <CategoryCart img='/images/Category5.png' fsize='24px'>Холодильники</CategoryCart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Link className='category-link2'>Еще</Link>
                    </div>
                </div>
                <div className="c2-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <img style={{width:'80px', height:'80px'}} src="/images/c2-1.png" alt="imagee" className='mb-4' />
                                <h1 style={{fontSize:'18px', lineHeight:'32px'}}>Самый крупный производитель в Средней Азии</h1>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <img style={{width:'80px', height:'80px'}} src="/images/c2-2.png" alt="imagee" className='mb-4' />
                                <h1 style={{fontSize:'18px', lineHeight:'32px'}}>Самый крупный производитель в Средней Азии</h1>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <img style={{width:'80px', height:'80px'}} src="/images/c2-3.png" alt="imagee" className='mb-4' />
                                <h1 style={{fontSize:'18px', lineHeight:'32px'}}>Самый крупный производитель в Средней Азии</h1>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <img style={{width:'80px', height:'80px'}} src="/images/c2-4.png" alt="imagee" className='mb-4' />
                                <h1 style={{fontSize:'18px', lineHeight:'32px'}}>Самый крупный производитель в Средней Азии</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="category">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className='category-h1'>Популярные товары</h1>
                        <Link className='category-link'>Посмотреть все <GrFormNext /></Link>
                    </div>
                    <div className="row" style={{height: '', marginBottom: '65px', marginTop: '30px'}}>
                        {products.map(item => <div className='col-md-3 col-sm-12'> <Card  style={{padding:'16px', border:'none'}}>
                        <CardImg top width="100%" src={item.img} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>
                            <CardText>
                                <div className='d-flex justify-content-between mb-5'>
                                    <div className="stars">
                                        <img src="/images/products/star.png" alt="star" />
                                        <img src="/images/products/star.png" alt="star" />
                                        <img src="/images/products/star.png" alt="star" />
                                        <img src="/images/products/star.png" alt="star" />
                                        <img src="/images/products/star.png" alt="star" />
                                    </div>
                                    <Link style={{fontSize: '14px', fontWeight: 'bold', color: '#868686'}} >Отзывы</Link>
                                </div>
                                <h3>{item.price} сум</h3>
                            </CardText>
                            <div className='d-flex justify-content-between'>
                                <ButtonGroup>
                                    <Button style={{width:'50px', height:'50px', borderRadius:'50px 0 0 50px', backgroundColor:'#f4f4f4', color: '#000', border:'none'}}><AiOutlineHeart></AiOutlineHeart></Button>
                                    <Button style={{width:'50px', height:'50px', borderRadius:'0px 50px 50px 0px', backgroundColor:'#f4f4f4', color: '#000', border:'none'}}><RiScales3Line/></Button>
                                </ButtonGroup>
                                <Button style={{width:'50px', height:'50px', borderRadius:'50px', backgroundColor:'#09CC66', border:'none'}}><AiOutlineShoppingCart/></Button>
                            </div>
                        </CardBody>
                    </Card> </div>)}
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Link className='category-link2'>Купить онлайн</Link>
                    </div>
                </div>
            </div>
            <div className="c2-content">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className='category-h1'>Наши партнеры</h1>
                        <Link className='category-link'>Подробнее<GrFormNext /></Link>
                    </div>
                    <div className="row" style={{height: '', marginBottom: '150px', marginTop: '110px'}}>
                        <Link className="col-md-3 col-sm-12 text-center">
                            <img src="/images/shivaki.png" alt="imagee" />
                        </Link>
                        <Link className="col-md-3 col-sm-12 text-center">
                            <img src="/images/samsung.png" alt="imagee" />
                        </Link>
                        <Link className="col-md-3 col-sm-12 text-center">
                            <img src="/images/avalon.png" alt="imagee" />
                        </Link>
                        <Link className="col-md-3 col-sm-12 text-center">
                            <img src="/images/royal.png" alt="imagee" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="c3-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 text-center">
                            <Button className='c3-content-btn'><FiPhoneCall style={{marginRight:'10px'}} />Онлайн консультация</Button>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center">
                            <Button className='c3-content-btn2'><FiPhoneCall style={{marginRight:'10px'}} />Подписаться на акции</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeC
