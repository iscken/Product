import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchCard from '../SearchCard';

const Search = ({value}) => {
    const nav = useNavigate()
    const {product} = useSelector((s) => s) 
    console.log(product, "produxr");
   let res = product.filter((el)=> el.proName.toLowerCase().includes(value))
   console.log(res);
    return (
     <div>
         {
          value.length !== 0 ?  res.map((el)=> <SearchCard el={el}/>): nav("/product")
         }
        </div>
    );
};

export default Search;