import React from 'react'
import Card from './card';

const MyServices = () => {
  return (
    <div className='myServices'>
        <div className='upperService'><h1>My Services</h1></div>
        <div className='lowerService'>
            <Card/>
            <Card/>
            <Card/>
        </div>
      
    </div>
  )
}

export default MyServices;
