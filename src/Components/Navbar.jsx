import React, { useEffect } from "react";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {store} from "../ReduxSetup/store.js"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Menu,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin } from "../ReduxSetup/Admin/Action.js";
import { getAllBlogs } from "../ReduxSetup/blogs/Action.js";
import { getAllImages } from "../ReduxSetup/images/Action.js";




export default function Navbar() {
 
  const dispatch = useDispatch();

  const admin = useSelector((store)=>store.admin.admin)
  
  const jwt = localStorage.getItem("jwt");

  useEffect(()=>{
      if(jwt && jwt !== "null" && jwt !== ""){
        dispatch(getAdmin(jwt));
      }
  },[jwt, dispatch])
  
  return (

    <div className="fixed top-0 left-0 w-full z-100 ">
      {/* Top Navbar */}
      <AppBar
        position="static"
        sx={{
          bgcolor: "rgb(255,255,255)",
          color: "rgb(0,0,0)",
          position: "relative",
        }}
      >
        <Toolbar
          sx={{
            color: "rgb(0,0,0)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
 
          <div className="flex items-center justify-center w-[fit-content] ">
            
            <Typography variant="h6" sx={{ ml: 2 }}>
              <p style={{ color: " #00246B", fontWeight: "700" }}>
                KrishnaTech
              </p>
            </Typography>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
