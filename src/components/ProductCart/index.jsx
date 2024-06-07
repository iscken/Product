import React from 'react';
import { FaHeart } from "react-icons/fa";
  import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


const ProductCart = ({el}) => {
    const dispatch  = useDispatch()
    const nav = useNavigate()
    const {favorite} = useSelector((s) => s)
    let someFav =  favorite.some((e) => e.id === el.id)

    return (
       <div id="productCart">
        <div className="container">
            <div className="productCart">
                

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <Zoom>
        <img className="p-8 rounded-t-lg" src={el.url} alt="product image" />
        </Zoom>
    </a>
    <div className="px-5 pb-5">
        <Link to="/Deteils">
            <h5 onClick={() => dispatch({type: "ADD_TO_DETEILS", payload: el})} className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{el.proName}</h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
             <div className="star" style={{
                background: el.reiting >= 1 ? "yellow": "grey"
             }}></div>
             <div className="star" style={{
                background: el.reiting >= 2 ? "yellow": "grey"
             }}></div>
             <div className="star" style={{
                background: el.reiting >= 3 ? "yellow": "grey"
             }}></div>
             <div className="star" style={{
                background: el.reiting >= 4 ? "yellow": "grey"
             }}></div>
             <div className="star" style={{
                background: el.reiting >= 5 ? "yellow": "grey"
             }}></div>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{el.reiting}</span>
        </div>
        <div className="flex items-center justify-between">

         <div className="reletive">
         {el.price > 3000 ? <h3 className="text-1xl text-gray-900 dark:text-white">
                
                $ {el.price - (el.price / 100 * 20)}

                </h3> : null
                }

                {<h3 className={`text-3xl font-bold ${el.price > 3000 ? "absolute top-[-20px] right-[-40px]" : ""} text-gray-900 dark:text-white`}>{el.price < 300 ? "$" : ""} {el.price}</h3>}
                
         </div>

             <button style={{color: someFav ? "red" : "black" }} onClick={() => {
                dispatch({type: "ADD_FAVORITE", payload: el})

             } }  className='text-[black]' 
            ><FaHeart/></button>  
            <button onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-[4px]">Add To Basket</button>
        </div>
    </div>
</div>

            </div>
        </div>
       </div>
    );
};

export default ProductCart;