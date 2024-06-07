import React from 'react';
import { useSelector } from 'react-redux';
import BasketCart from '../BasketCart';

const Basket = () => {
    const {basket} = useSelector((s) => s)
    console.log(basket);
    return (
        <div id='pt-[50px]'>
            <div className="container">
                <div className="flex flex-col gap-[30px] pt-[50px]">
                {
                basket.map((el) => <BasketCart el={el}/>)
                }
           <h1 className='flex justify-end pr-[330px]'></h1>
                </div>
            </div>
        </div>
    );
};

export default Basket;