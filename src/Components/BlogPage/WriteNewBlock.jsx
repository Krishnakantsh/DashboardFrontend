import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewBlog } from "../../ReduxSetup/blogs/Action";

const WriteNewBlock = () => {

  const dispatch = useDispatch();

  const handleSubmit = (event) => {

    event.preventDefault();
 
    const data = new FormData(event.target);
    const actualData = {
      title : data.get("title"),
      image:data.get("image"),
      description:data.get("description")
    }
    dispatch(addNewBlog(actualData));
     console.log("actual data : ", actualData)
  };
  

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Write New Blog</h2>

      <form encType="multipart/form-data"   onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
   
        <input
          type="file"
          name="image"
          className="w-full p-2 border rounded"
        />

        <input
          label="Write here"
          id="title"
          placeholder="Write Title"
          name="title"
          className="w-full p-2 border rounded"
   
        />
          <TextField
          label="Write description"
          fullWidth
          multiline
          id="description"
          placeholder="Write Description"
          name="description"
          className="w-full p-2 border rounded"
          rows={5}
        />

         <Button type="submit" variant="contained" color="primary">
          POST
        </Button>
      </form>
    </div>
  );
};

export default WriteNewBlock;
