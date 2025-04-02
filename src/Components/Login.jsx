import { Button, Input, OutlinedInput } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../ReduxSetup/store.js';
import { getAdmin , loginAdmin} from '../ReduxSetup/Admin/Action.js';

function Login() {


  const navigate = useNavigate();

  const dispatch = useDispatch();

  
  const jwt = localStorage.getItem("jwt");

  
  
  const  admin  = useSelector(store => store.admin?.admin)
 
  useEffect(()=>{
    if(jwt && jwt !== "null" && jwt !== ""){
      dispatch(getAdmin(jwt));
    }
  },[jwt, dispatch])

  

  useEffect(()=>{
    if(jwt && jwt !== "null" && jwt !== ""){
      dispatch(getAdmin(jwt));
    }
  },[jwt, dispatch])
   
   

    
    const handleSubmit = ( event) =>{
      
      event.preventDefault()
    
      const data = new FormData(event.target);
    
      const adminData = {
        email:data.get("email"),
        password:data.get("password"),
      }
        dispatch(loginAdmin(adminData, navigate));
    }



  return (
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 p-4"
       
      >
        <div className="flex  flex-col items-center justify-between w-full max-w-sm sm:max-w-md bg-gray-200 rounded-2xl p-6 " style={{boxShadow:"2px 2px 5px rgba(64,64,64,0.5), -2px -2px 5px rgba(64,64,64,0.5)" }}    >
   
          {/* Logo and Heading */}
          <div className="flex flex-col items-center mb-8">
            <div className="h-20 w-20 rounded-full">
              <img
                src="/logo1.png"
                alt="logoImg"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h2 className="font-bold text-xl mt-3 text-center">Welcome To Krishna Tech</h2>
            <p className="font-semibold text-lg mt-1 text-center">Tech With Fun !</p>
          </div>
  
          {/* Form Section */}
          <form   onSubmit={handleSubmit}  className="flex flex-col w-full items-center gap-6">
            <input
              type="email"
              id='email'
              name="email"
              style={{ boxShadow:"3px 3px 8px rgb(0,0,0,0.3),  -4px -4px 8px rgb(255,255,255) "}} 
              placeholder="Admin Id"
              className="w-full px-4 py-3 rounded-xl shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              id='password'
              type="password"
              name="password"
              placeholder="Password"
              style={{ boxShadow:" 3px 3px 8px rgb(0,0,0,0.3),  -4px -4px 8px rgb(255,255,255) "}} 
              className="w-full px-4 py-3 rounded-xl shadow-inner border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-200"
            />
            <Button
              variant="contained"
              type="submit"
              
              className="w-full rounded-full bg-blue-600 text-white py-2 hover:bg-blue-700 transition-all"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
  )
}

export default Login