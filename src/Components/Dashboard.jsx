import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../ReduxSetup/store";
import { getAllBlogs } from "../ReduxSetup/blogs/Action";
import { getAllImages } from "../ReduxSetup/images/Action";

const Dashboard = () => {

  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  //  get admin details ( it is for check total count for blogs and images )
  const admin = useSelector((store)=>store.admin?.admin)
  const blogs = useSelector((store)=>store.blogs?.blogs)
  const images = useSelector((store)=>store.images?.images)

  useEffect(()=>{
    dispatch(getAllBlogs());
    dispatch(getAllImages());
  }, [jwt, dispatch])



  const handleViewAll = (url) => {
    navigateTo(url);
  };

  return (
    <div className=" flex flex-col items-center justify-start w-full h-full min-h-50  p-5 gap-5  ">
      <div className=" flex flex-col items-center justify-center w-full h-git gap-10  rounded">
        <div className=" h-40 w-40 rounded-full shadow-md  flex items-center justify-center ">
          <img src={admin?.image} alt="admin_profile_image"  className="  w-full h-full rounded-full object-cover object-center  shadow-2xl"   />
        </div>
        <h1 className="flex flex-col  gap-2 text-xl md:text-2xl lg:text-4xl font-bold text-wrap text-center w-4/5">
          <span>Welcome Back</span>{" "}
          <span className=" text-green-600 text-2xl md:text-3xl lg:text-4xl">
            {" "}
            Mr. {admin?.username}
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full h-fit"  >
        <div className=" shadow-md h-50 w-full flex flex-col items-start justify-between p-5 bg-white rounded relative hover:border-t-8 hover:border-green-500  "   style={{  boxShadow:"2px 2px 10px rgb(0,0,0,0.2) , -2px -2px 10px rgb(0,0,0,0.2)"  }}   >
          <h1 className=" text-2xl font-bold text-black">Total Active Users</h1>
          <div className=" flex items-center justify-between w-full ">
            <h2 className=" text-4xl text-green-500 font-bold">1</h2>
            <Button variant="outlined" onClick={() => handleViewAll()}>
               View All
            </Button>
          </div>
          <div className="absolute right-5 top-5 h-6 w-6 rounded-full bg-emerald-500 animate-ping"></div>
        </div>
        <div className=" shadow-md h-50 w-full flex flex-col items-start justify-between p-5 bg-white rounded relative hover:border-t-8 hover:border-green-500  "   style={{  boxShadow:"2px 2px 10px rgb(0,0,0,0.2) , -2px -2px 10px rgb(0,0,0,0.2)"  }}   >
          <h1 className=" text-2xl font-bold text-black">Total Posted Blogs</h1>
          <div     className=" flex items-center justify-between w-full "   >
            <h2 className=" text-4xl text-green-500 font-bold">{blogs?.length}</h2>
            <Button
              variant="outlined"
              onClick={() => handleViewAll("/dashboard/blogs")}
            >
              View All
            </Button>
          </div>
          <div className="absolute right-5 top-5 h-6 w-6 rounded-full  bg-amber-300  animate-ping"></div>
        </div>
        <div className=" shadow-md h-50 w-full flex flex-col items-start justify-between p-5 bg-white rounded relative hover:border-t-8 hover:border-green-500  "   style={{  boxShadow:"2px 2px 10px rgb(0,0,0,0.2) , -2px -2px 10px rgb(0,0,0,0.2)"  }}   >
          <h1 className=" text-2xl font-bold text-black">
            Total Posted Images
          </h1>
          <div   className=" flex items-center justify-between w-full "  >
            <h2 className=" text-4xl text-green-500 font-bold">{images?.length}</h2>
            <Button
              variant="outlined"
              onClick={() => handleViewAll("/dashboard/images")}
            >
              View All
            </Button>
          </div>
          <div className="absolute right-5 top-5 h-6 w-6 rounded-full bg-emerald-500 animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
