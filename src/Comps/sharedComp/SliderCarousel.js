import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderCarousel.scss'
import { Link } from 'react-router-dom';
import {GrFormNext} from 'react-icons/gr'
const SliderCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <Slider {...settings}>
                <div className='carousel1'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <h1 className='c1-h1'>Эффектный просмотр </h1>
                                <h3 className='c1-h3'>Полное погружение с телевизорами Artel 8K</h3>
                                <Link className='btn c1-button'>Купить онлайн</Link>
                                <Link className='btn'>Узнать больше <GrFormNext /></Link>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <img className='c1-img' src="/images/slider1.png" alt="" />
                                <p className='c1-p'>Artel TV UA50H3401 (127 см) Android</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel1'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <h1 className='c1-h1'>Эффектный просмотр </h1>
                                <h3 className='c1-h3'>Полное погружение с телевизорами Artel 8K</h3>
                                <Link className='btn c1-button'>Купить онлайн</Link>
                                <Link className='btn c1-bbutton'>Узнать больше <GrFormNext /></Link>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <img className='c1-img' src="/images/slider1.png" alt="" />
                                <p className='c1-p'>Artel TV UA50H3401 (127 см) Android</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel1'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <h1 className='c1-h1'>Эффектный просмотр </h1>
                                <h3 className='c1-h3'>Полное погружение с телевизорами Artel 8K</h3>
                                <Link className='btn c1-button'>Купить онлайн</Link>
                                <Link className='btn'>Узнать больше <GrFormNext /></Link>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <img className='c1-img' src="/images/slider1.png" alt="" />
                                <p className='c1-p'>Artel TV UA50H3401 (127 см) Android</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default SliderCarousel
