import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const WriteNewBlock = () => {


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!image) {
      alert("Please upload an image first.");
      return;
    }
    console.log("Image uploaded:", image);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      
      <h2 className="text-xl font-semibold mb-4">Write New Blog</h2>
      
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        
    

        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 border rounded"
        />

     
        <TextField 
  label="Write here" 
  variant="outlined" 
  fullWidth 
  multiline 
  maxRows={15}  
/>



        <Button type="submit" variant="contained" color="primary">
          POST
        </Button>
      </form>
    </div>
  );
};



export default WriteNewBlock