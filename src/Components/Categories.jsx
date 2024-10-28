import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import axios from 'axios';

export default function Categories() {
    let [categoriesArr, setCategoriesArr] = useState([]);
    let [arr, setArr] = useState([]);
    let [categoriesName, setCategoriesName] = useState([]);
    let [loading, setLoading] = useState(true); // Set loading true initially
    let [msg, setMsg] = useState('');

    async function categoriesApi() {
        try {
            let data = await axios.get('https://fakestoreapi.com/products');
            if (data?.data) {
                setCategoriesArr(data.data);
            } else {
                setMsg('No data found');
            }
        } catch (error) {
            setMsg('Error fetching products');
        } finally {
            setLoading(false); // Ensure loading is false in finally block
        }
    }

    async function categoriesNameApi() {
        try {
            let data = await axios.get('https://fakestoreapi.com/products/categories');
            setCategoriesName(data?.data || []);
        } catch (error) {
            setMsg('Error fetching categories');
        }
    }

    useEffect(() => {
        categoriesApi();
        categoriesNameApi();
    }, []);

    async function getData(category) {
        const filteredProducts = categoriesArr.filter(product => product.category === category);
        setArr(filteredProducts);
    }

    if (loading) {
        return <Loading />;
    }
    if (msg) {
        return <h2 className='text-red-700 font-bold my-3'>{msg}</h2>;
    }

    const renderProducts = (products) => {
        return products.map(prop => (
            <div key={prop.id} className='md:w-1/4 sm:w-1/2 sm:my-3'>
                <div className='p-3 cursor-pointer transition-transform transform hover:scale-105'>
                    <img src={prop?.image} alt="" className='w-full h-full md:h-[250px]' />
                    <p className='text-blue-800'>{prop?.category}</p>
                    <p className='line-clamp-1'>{prop?.title}</p>
                    <div className='flex justify-between items-center'>
                        <p>{prop?.price} EGP</p>
                        <p><i className='fas fa-star text-yellow-500'></i>{prop?.rating?.rate}</p>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className='flex flex-wrap'>
            <div>
                <h2 className='text-lg font-bold my-3'>Product Categories</h2>
                <ul>
                    {categoriesName?.map((category, index) => (
                        <li key={index} onClick={() => getData(category)} className='hover:underline hover:cursor-pointer hover:text-blue-800'>{category}</li>
                    ))}
                </ul>
            </div>
            {arr.length ? renderProducts(arr) : renderProducts(categoriesArr)}
        </div>
    );
}