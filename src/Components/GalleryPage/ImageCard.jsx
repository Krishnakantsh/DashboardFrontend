import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteImageById } from "../../ReduxSetup/images/Action.js";

const ImageCard = ({data}) => {

  const date = new Date(data?.createAt);
  const month = date.toLocaleString('en-US', { month: 'long' }); 
  const dayNumber = date.getDate(); 
  const year = date.getFullYear(); 

  const exactCreatedTime = `${dayNumber} ${month} ${year}`

  const dispatch = useDispatch();


  const handleRemoveImage = (id) => {

    console.log(" current id : ", id);

     dispatch(deleteImageById(id))
     
  }
  

  return (
    <div key={data?._id}   className="flex flex-col items-center justify-between  border border-gray-300 bg-white p-3 rounded-lg shadow-md max-w-md">
      

      <div className="w-full aspect-[6/6]  rounded-md overflow-hidden flex items-center justify-center bg-gray-100">
        <img src={data?.image} alt={data?.title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col items-start  justify-start gap-5 w-full mt-3">
        <p className="text-sm  font-semibold">User : <span className="text-blue-500" > Dummy </span> </p>
        <p className="text-xs text-gray-500">Posted At: {exactCreatedTime}</p>
      </div>

      <div className="flex items-center justify-between w-full mt-4 gap-3">
        <Button
          variant="outlined"
           className=" bg-red-200"
          sx={{
            fontSize: "12px",
            width: "100%",
            color:"red",
            textTransform: "none",
            border:"1px solid red"
          }}

          onClick={()=> handleRemoveImage(data?._id)}
        >
          Remove
        </Button>
      </div>

    </div>
  );
};

export default ImageCard;
