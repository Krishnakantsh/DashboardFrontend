import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addImage } from "../../ReduxSetup/images/Action";
import { useNavigate } from "react-router-dom";

const AddImage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()



  const handleSubmit = (event) => {

    event.preventDefault();
    const data= new FormData(event.target);
    const processData = {
      image:data.get("image"),
      title:data.get("title")
    }
    console.log(" data form for image upload : ", processData)
    dispatch(addImage(processData, navigate))
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      
      <h2 className="text-xl font-semibold mb-4">Upload an Image</h2>
      
      <form  encType="multipart/form-data"   onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        

        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full p-2 border rounded"
        />

        <input 
        label="Image Caption" 
        name="title" 
        variant="outlined"      
        placeholder="Write Title"  
        className="w-full p-2 border rounded" />

        <Button type="submit" variant="contained" color="primary">
          Upload Image
        </Button>
      </form>
    </div>
  );
};

export default AddImage;
