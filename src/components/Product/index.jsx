import React from 'react';
import ProductCart from '../ProductCart';
import { useSelector } from 'react-redux';

const Product = () => {
    const {product} = useSelector((s) => s)

    return (
        <div className='py-[50px]'>
            <div className="container">
                <div className="flex flex-wrap gap-[30px]">
                    {
                        product.map((el,idx) => <ProductCart el={el} key = {idx}/>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Product;