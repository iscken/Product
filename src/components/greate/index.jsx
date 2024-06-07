import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Greate = () => {
    const [url, setUrl] = useState("")
    const [price, setPrice] = useState("")
    const [proName, setProName] = useState("")
    const {product} = useSelector((s)=> s)
    const dispatch = useDispatch()

    const messegError = () => {
        toast('🦄 Попольните все полей!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    
    const addNewProduct = ()=> {
        if (url.trim() ==="" || price.trim() ==="" || proName.trim()=== ""){
            messegError()
        }
        else{

            let newProduct = {
                id: product.length ? product[product.length - 1].id + 1 : 1,
                url,
                price,
                proName,
                reiting: Math.round(Math.random() * 5)
            }
            dispatch({type: "GREATE_PRODUCT", payload: newProduct})
            setUrl("")
            setPrice("")
            setProName("")
        } 
    }
    console.log(product);
    return (
        <div id='greate'>
            <div className="container">
                <div className="greate">
                    
<form className="max-w-md mx-auto flex flex-col gap-[30px] py-[50px]">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
       
        <input type="search" id="default-search" onChange={(e) => setUrl(e.target.value)} value={url}
         className="block w-full p-4 ps-10 text-2xl text-gray-900 border border-gray-300 outline-[0px] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="url" required />
    </div>
    <div className="relative">
      
        <input type="search" id="default-search" onChange={(e) => setPrice(e.target.value)}  value={price}
        className="block w-full p-4 ps-10 text-2xl text-gray-900 border border-gray-300 outline-[0px] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" required />
    </div>
    <div className="relative">
       
        <input type="search" id="default-search" onChange={(e) => setProName(e.target.value)} value={proName} 
        className="block w-full p-4 ps-10 text-2xl text-gray-900 border border-gray-300 outline-[0px] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
    </div>
        <button type="submit"
        onClick={() => addNewProduct()}
         className="text-white absolute left-[630px] bottom-[170px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                 <ToastContainer />

    
</form>


                </div>
            </div>
            
        </div>
    );
};

export default Greate;