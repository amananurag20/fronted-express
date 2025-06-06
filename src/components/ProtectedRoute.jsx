import React, { useEffect, useState } from 'react'
import Login from './Login';
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';

const ProtectedRoute = () => {
    
    const [isAuthenticated, setIsAuthenticated]= useState(false);
    const [loading, setLoading]= useState(true);
   
    useEffect(()=>{

        const checkToken= async()=>{

            try{
                const {data}= await axios.get("http://localhost:5000/check-token",{
                 withCredentials:true
                });
                 if(data.success){
                    setIsAuthenticated(true);
                 };         

            }catch(e){
                console.log(e);
                 
            }finally{
               setLoading(false);
            }
        }

        checkToken()
    },[])


    if(loading){
        return <div>loading</div>
    }
  
  return (
    <>
    {isAuthenticated ? <Outlet/>:<Navigate to={"/login"}/>}
    </>
  )
}

export default ProtectedRoute
