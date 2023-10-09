'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllProductsThunk, selectAllProductState } from '@/store/slices/ProductSlice';
// Import Swiper styles
import 'swiper/css';
import ProductCard from './ProductCard';
export default function HorizontalProductList() {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProductState);

    useEffect(() => {
      dispatch(getAllProductsThunk())
    },[])
    return (
        <Swiper
          spaceBetween={100}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((product,i) => {
            return <SwiperSlide key={i}><ProductCard crop_img={product.crop_img} crop_name={product.crop_name} city={product?.farmer?.address.city} state={product?.farmer?.address.state} price={product.price} quality={product?.quality} /></SwiperSlide>
          })}
          
        </Swiper>
      );
}
