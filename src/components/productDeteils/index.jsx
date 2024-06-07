import React from 'react';
import { useSelector } from 'react-redux';

const Deteils = ({el}) => {
    const {deteils} = useSelector((s) => s)
    const deleteBtn = () => {
    deteils += deteils.filtir((el) => el.id !== deteils.id)
    
    }
    return (
        <div id=''>
            <div className="container">
                <div className="flex gap-[20px] pt-[50px] ">
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 p-[15px] dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={deteils.url} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{deteils.proName}</h5>
        <p>Dolor doloribus, quas nostrum perspiciatis. Nisi et repudiandae natus provident. Beatae eum neque autem quae!</p>
        <h4 class="mb-3 font-normal text-gray-700 dark:text-gray-400">$ {deteils.price}</h4>
        <button onClick={() => deleteBtn(el)} className='text-end text-[blue]'>delete</button>
    </div>
</a>
                </div>
            </div>

        </div>
    );
};

export default Deteils;