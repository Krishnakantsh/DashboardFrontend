import React, { useEffect } from 'react'
import BlogCard from '../BlogPage/BlogCard'
import ImageCard from './ImageCard'
import { store } from '../../ReduxSetup/store.js'
import { useDispatch, useSelector } from 'react-redux'
import { getAllImages } from '../../ReduxSetup/images/Action.js'



const Gallery = () => {

   const dispatch = useDispatch();

   const jwt = localStorage.getItem("jwt");

    useEffect(()=>{
         if(jwt && jwt !== null && jwt !== ""){
           dispatch(getAllImages());
         }
     },[jwt,dispatch])

 const imageList = useSelector((store) => store.images.images)



  return (
    <div  className='  flex flex-col items-center justify-start h-fit w-full pt-5  lg:pt-0 ' >
    <div className="w-full  mx-auto py-2">
        <div className="relative w-full h-40 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg  ">
         <img
              src="https://i.pinimg.com/736x/e4/36/06/e43606c84660f068bb821c526c907eee.jpg"
               alt="Responsive"
              className="w-full h-full object-cover object-top"
         />
           </div>
         </div>

<div className="w-full  mx-auto ">
  <div className="flex flex-col items-start justify-start   w-full h-fit ">
    {/* Heading */}
    <h1 className="text-lg sm:text-2xl my-5 font-bold text-gray-800">Latest Images</h1>

    {/* Blog Cards - Responsive Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:pl-5 gap-4 mt-4 w-full">
     {
      imageList?.map((data)=> 
      
        <ImageCard    data={data}  />
      
      )
     }
  
    </div>
  </div>
</div>




    </div>
  )
}



export default Gallery