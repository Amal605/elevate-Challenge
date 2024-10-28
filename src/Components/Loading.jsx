import React from 'react';

export default function Loading() {
  return (
    <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-20'>
      <div className='sk-chase'>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
      </div>
    </div>
  );
}