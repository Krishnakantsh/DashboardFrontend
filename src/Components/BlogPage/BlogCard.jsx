import React, { useState } from "react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../ReduxSetup/store";
import { deleteBlogById } from "../../ReduxSetup/blogs/Action";


const BlogCard = ({data}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleDeleteBlog = (id) =>{
    console.log("id get : ", id)
       dispatch(deleteBlogById(id)); 
   }
  
  const handleViewBlogWithId = (id) =>{
    navigate(`/dashboard/blog/${id}`)
  }

  const date = new Date(data?.createAt);
  const month = date.toLocaleString('en-US', { month: 'long' }); 
  const dayNumber = date.getDate(); 
  const year = date.getFullYear(); 

  const exactCreatedTime = `${dayNumber} ${month} ${year}`



  return (
    <div    className="max-w-md bg-white rounded-2xl h-95 shadow-lg overflow-hidden transition-transform transform hover:scale-105">

      <img src={data?.image} alt="hjfhf" className="w-full h-[60%] object-cover object-top " />


      <div className="p-4  flex flex-col items-start justify-between  w-full h-[40%]">
        <h2 className="text-sm text-left  text-black line-clamp-3 ">{data?.title}</h2>
        <p className="text-gray-500 text-left mt-2 text-sm">Posted At : {exactCreatedTime}</p>

        <div className="flex items-center  w-full justify-between mt-4">
        <Button  variant="outlined"  className="text-blue-600 font-semibold hover:underline text-nowrap  gap-2  "  onClick={()=> handleViewBlogWithId(data?._id)}  >

            Read More
        </Button>
        <Button  variant="outlined"  sx={{ color:"red", border:"1px solid red" }} className="text-blue-600  font-semibold hover:underline"   onClick={()=> handleDeleteBlog(data?._id)} >
            Remove
        </Button>

        </div>
      </div>
    </div>
  );
};

export default BlogCard;
