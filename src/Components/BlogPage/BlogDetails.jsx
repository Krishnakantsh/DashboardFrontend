import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { store } from "../../ReduxSetup/store.js"
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "../../ReduxSetup/blogs/Action.js";




const BlogDetails = () => {


  const dispatch= useDispatch()

  const { id } = useParams();

  useEffect(()=>{

   dispatch(getBlogById(id))

  }, [id, dispatch])

  const blog = useSelector((store) => store.blogs?.blog)
  console.log(" current blog : ",blog )
  
  const date = new Date(blog?.createAt);
  const month = date.toLocaleString('en-US', { month: 'long' }); 
  const dayNumber = date.getDate(); 
  const year = date.getFullYear(); 

  const exactCreatedTime = `${dayNumber} ${month} ${year}`

  return (
    <div className='  flex flex-col items-center justify-start h-fit w-full  gap-10 mt-8  lg:mt-0  px-2 md:px-4 py-2'>

      <div className="relative w-full h-40 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg  shadow-amber-500 ">
        <img src={blog?.image } alt={blog?.title  } className="w-full h-full object-cover object-center opacity-80" />
    
      </div>
      <div className="flex  flex-col lg:flex-row w-full items-start lg:items-center justify-between" >
        <p className=" text-lg" > Title : <span  className=" text-blue-500"  >{blog?.title  }</span></p>
        <p className=" text-lg" > Posted At : <span  className=" text-blue-500"  >{exactCreatedTime }</span></p>
        <p className=" text-lg" > Reading : <span  className=" text-blue-500"  >{blog?.watching }</span></p>
        <p className=" text-lg" > Owner : <span  className=" text-blue-500"  >Dummy</span></p>
      </div>


      <div className="w-full mx-auto md:mt-2 ">
       
        <p className="text-gray-700 text-lg text-justify  ">
          {blog?.description }
        </p>
      </div>
    </div>

  );
};

export default BlogDetails;
