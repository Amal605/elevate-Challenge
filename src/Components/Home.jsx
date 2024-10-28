import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';

export default function Home() {
    const [productArr, setProductArr] = useState([]);
    const [loading, setLoading] = useState(true); // Set loading true initially
    const [msg, setMsg] = useState('');

    async function productApi() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProductArr(response.data || []);
            setMsg(''); // Clear any previous messages
        } catch (error) {
            setMsg('Error fetching products'); // Set error message
        } finally {
            setLoading(false); // Ensure loading is set to false
        }
    }

    useEffect(() => {
        productApi();
    }, []);

    if (loading) {
        return <Loading />;
    }
    if (msg) {
        return <h2 className='text-red-700 font-bold my-3'>{msg}</h2>;
    }

    return (
        <div className='flex flex-wrap'>
            {productArr.map(prop => (
                <div key={prop.id} className='md:w-1/4 sm:w-1/2 sm:my-3'>
                    <div className='product p-3 cursor-pointer transition-transform transform hover:scale-105'>
                        <img src={prop?.image} alt={prop?.title} className='w-full h-auto md:h-[250px] py-2' />
                        <p className='text-blue-800'>{prop?.category}</p>
                        <p className='line-clamp-1'>{prop?.title}</p>
                        <div className='flex justify-between items-center'>
                            <p>{prop?.price} EGP</p>
                            <p><i className='fas fa-star text-yellow-500'></i>{prop?.rating?.rate}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}