import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const AddImage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file.");
    }
  };

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
      
      <h2 className="text-xl font-semibold mb-4">Upload an Image</h2>
      
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        
        {/* Image Preview */}
        {preview && (
          <div className="w-full h-48 flex items-center justify-center border rounded-md overflow-hidden bg-gray-100">
            <img src={preview} alt="Preview" className="object-cover w-full h-full" />
          </div>
        )}

        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />

        {/* Caption */}
        <TextField label="Image Caption" variant="outlined" fullWidth />

        {/* Upload Button */}
        <Button type="submit" variant="contained" color="primary">
          Upload Image
        </Button>
      </form>
    </div>
  );
};

export default AddImage;
