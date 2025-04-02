import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Blogs from "../Components/BlogPage/Blogs.jsx";
import Gallery from "../Components/GalleryPage/Gallery.jsx";
import BlogDetails from "../Components/BlogPage/BlogDetails.jsx";
import AddImage from "../Components/GalleryPage/AddImage.jsx";
import WriteNewBlock from "../Components/BlogPage/WriteNewBlock.jsx";
import LogoutPage from "../Components/LogoutPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../ReduxSetup/blogs/Action.js";
import { getAllImages } from "../ReduxSetup/images/Action.js";
import { store} from "../ReduxSetup/store.js"
import Dashboard from "../Components/Dashboard.jsx";


const HomePage = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const navigate = useNavigate();
  const dispatch= useDispatch();

  const handleNavigation = (url) => {
    setSidebarOpen(false); // Close sidebar on mobile
    navigate(url);
  };
  const handleLogout = ()=>{
    navigate("/login")
  }



  const jwt = localStorage.getItem("jwt");

  // const blogs = useSelector((store) => store.blogs?.blogs); 

   useEffect(()=>{
        if(jwt && jwt !== "null" && jwt !== ""){
          dispatch(getAllBlogs());
        }
   },[jwt])


  


  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Blogs", href: "/dashboard/blogs" },
    { name: "Gallery", href: "/dashboard/images" },
    { name: "Add New Blogs", href: "/dashboard/blogs/add" },
    { name: "Add New Image", href: "/dashboard/images/add" },
    { name: "Logout", href: "/dashboard/logout" },
  ];

  return (
    <div className="flex w-full h-screen  px-2 md:px-4  gap-5 pt-16 md:pt-20">
  
      <div
        className={`fixed md:relative top-20 md:top-0 left-0 h-[90vh] w-64 bg-white border-r border-gray-300 shadow-lg py-4 px-2 transform rounded ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 overflow-y-auto md:overflow-visible`}
      >
 
        <button
          className="md:hidden absolute top-2 right-2 text-gray-700"
          onClick={() => setSidebarOpen(false)}
        >
          <CloseIcon />
        </button>

        <div className="w-full border-b border-gray-300 pb-5 flex flex-col items-center gap-5">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              src="/logo1.png"
              alt="companyLogo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-lg lg:text-2xl">Krishna Tech</h1>
        </div>

        <div className="py-8 px-5">
          <ul className="flex flex-col gap-5 text-left ">
            {navigation.map((data) => (
              <li
                key={data.name}
                className={`border border-gray-300 p-2 px-3 rounded cursor-pointer text-md transition-all duration-200 ${
                  activeItem === data.name
                    ? "bg-gray-200 shadow-lg"
                    : "hover:bg-gray-300 hover:shadow-lg"
                }`}
                onClick={() => {
                  setActiveItem(data.name);
                  handleNavigation(data.href);
                }}
              >
                <p>{data.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

   
      <div className="flex-1  h-[90vh] overflow-y-auto bg-white p-4 rounded overflow-visible">
        <button
          className="absolute z-500 top-2 right-5 md:hidden text-gray-700"
          onClick={() => setSidebarOpen(true)}
        >
          <MenuIcon />
        </button>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/blogs" element={<Blogs />} />
          <Route path="/dashboard/blog/:id" element={<BlogDetails />} />
          <Route path="/dashboard/images" element={<Gallery />} />
          <Route path="/dashboard/images/:id" element={<Gallery />} />
          <Route path="/dashboard/blogs/add" element={<WriteNewBlock />} />
          <Route path="/dashboard/images/add" element={<AddImage />} />
          <Route path='/dashboard/logout' element={ <LogoutPage/>  }  />
        </Routes>
  
      </div>
    </div>
  );

};

export default HomePage;
