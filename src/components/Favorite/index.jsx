import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteCart from '../FavoriteCart';

const Favorite = () => {
    const {favorite} = useSelector((s) => s)
    console.log(favorite);
    return (
        <div className='pt-[30px]'>
            <div className="container">
                <div className="flex flex-wrap">
                    {
                     favorite.map((el,idx) => <FavoriteCart el={el} key={idx}/>)   
                    }
                </div>
            </div>
          
        </div>
    );
};

export default Favorite;