import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const token=localStorage.getItem("token")

// const response=await fetch("http://localhost:5000", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   },
//   body: JSON.stringify({
//     name:name,
//     password,
//     mobile,
//     email
//   })
// })
// const data=await response.json()




  const handleSubmit=async()=>{

    try{
        const response= await axios.post("http://localhost:5000/signup",{
            name,
            email,
            password,
            mobile
        });
        console.log(response.data);
        if(response.data.success){
            alert("account created successfully")
        }else{
            alert(response.data.msg)
        }

    }catch(e){
        console.log(e);
        alert("something went wrong")
    }

    console.log("form submitted")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-700">
      <div className="w-full max-w-md p-8 bg-blue-100 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Signup</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-blue-900 font-semibold mb-1">Name</label>
          <input
            placeholder="Enter your name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-blue-900"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-blue-900 font-semibold mb-1">Email</label>
          <input
            placeholder="Enter your email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-blue-900"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-blue-900 font-semibold mb-1">Mobile No.</label>
          <input
            placeholder="Mobile no"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-blue-900"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-blue-900 font-semibold mb-1">Password</label>
          <input
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-blue-900"
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition duration-200 font-semibold"
          onClick={handleSubmit}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
