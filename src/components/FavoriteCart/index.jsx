import React from 'react';
import { TiDelete } from "react-icons/ti";
import { useDispatch } from 'react-redux';


const FavoriteCart = ({el}) => {
    const dispatch = useDispatch()
    return (
        <div className=' flex pt-[50px]'>
            <div className="container">
                <div className="">
                <div className="max-w-sm bg-white border  border-gray-200 rounded-lg text-center shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg ml-[50px] mt-[30px]" src={el.url} alt="" width={250}/>
    </a>
    <div className="p-5 position-[relative]">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.proName}</h5>
        </a>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nemo provident illum vero adipisci rem cum, obcaecati quasi magni nulla maiores nostrum quibusdam voluptas reiciendis amet id soluta praesentium. Minus!</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$ {el.price}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <button className='ml-[25px] position-[absolute]  text-2xl text-[blue]'onClick={() => dispatch({type: "ADD_FAVORITE", payload: el}) } ><TiDelete /></button>
    </div>
</div>
                </div>
            </div>

        </div>
    );
};

export default FavoriteCart;