import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom'
import { adminLogout } from '../ReduxSetup/Admin/Action.js';



const LogoutPage = () => {

  const navigate = useNavigate();
  const dispatch= useDispatch();

  const handleLogoutconfirm = () => {
    console.log(" request sent ......")
    dispatch(adminLogout());
  }

  const handleLogoutcancle = () => {

    navigate("/dashboard/blogs");
  }



  return (
    <div className='h-fit flex items-center justify-center  w-full ' >
      <div className=' bg-white w-[40%] h-fit  flex flex-col items-start justify-between p-5 rounded-sm gap-10'  >
        <h1 className='text-4xl'  >  Are you sure to Logout</h1>
        <div className=' flex w-full  items-start justify-start gap-10 '  >
           <Button variant='contained'  sx={{  backgroundColor :"#463ACB"  }} onClick={handleLogoutconfirm}  >Confirm</Button>
           <Button variant='contained' onClick={handleLogoutcancle}  sx={{  backgroundColor :"RGB(255,0,0)" 
              
            }}  >Cancle</Button>
        </div>
      </div>
          
    </div>
  )
}

export default LogoutPage

// onClick={handleLogoutconfirm}
//  onClick={handleLogoutcancle}