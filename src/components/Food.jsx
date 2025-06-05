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

        <img src='https://media.assettype.com/thequint%2F2022-04%2F9bb03208-8222-43e9-b17e-504fb7f76ccc%2FHealthy_food_shopping_grocery_list_india_diet_healthy_weight_loss_secret_tip.jpg?auto=format%2Ccompress&fmt=webp&width=720'/>


    <div >      
      <button className='bg-blue-600 px-6 py-4 rounded-xl text-5xl'  onClick={handleClick}>Food data</button>
    </div>
    </div>
  )
}

export default Food
