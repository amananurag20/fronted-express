import axios from 'axios';
import React, { useState } from 'react'

const Food = () => {
const [foods, setFoods]= useState([]);


const handleClick=async()=>{
  const {data}= await axios.get("http://localhost:5000/foods",{
    withCredentials:true
  });

  console.log(data)
  
  if(data.success){
    setFoods(data.foods)
  }
}
console.log(foods)

  return (
    <div className='flex h-screen justify-center items-center'>

        {foods.map((food)=>{

            return <div key={food._id}>{food.name}</div>
        })}


    <div >      
      <button className='bg-blue-600 px-6 py-4 rounded-xl text-5xl'  onClick={handleClick}>Food data</button>
    </div>
    </div>
  )
}

export default Food
