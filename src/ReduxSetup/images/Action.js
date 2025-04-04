import { DELETE_IMAGE_BY_ID_FAILED, DELETE_IMAGE_BY_ID_REQUEST, DELETE_IMAGE_BY_ID_SUCCESS, GET_ALL_IMAGE_FAILED, GET_ALL_IMAGE_REQUEST, GET_ALL_IMAGE_SUCCESS, GET_IMAGE_BY_ID_FAILED, GET_IMAGE_BY_ID_REQUEST, GET_IMAGE_BY_ID_SUCCESS, UPLOAD_IMAGE_FAILED, UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS } from "./ActionType.js";
import { API_BASED_COMMON_URL } from "../../Config/ConfigItem.js"
import axios from "axios";

 const jwt = localStorage.getItem("jwt");



export const getAllImages = () => async (dispatch) =>{
  
  
  dispatch({type:GET_ALL_IMAGE_REQUEST})

  try {

    const allImage = await axios.get(`${API_BASED_COMMON_URL}/api/p/getallimages`, 
      {
        headers:{
           Authorization:`Bearer ${jwt}`,
           },
           withCredentials:true
       }
   
    )

    if(allImage){
      console.log(" Image's details :  ", allImage.data);
      dispatch({ type:GET_ALL_IMAGE_SUCCESS, payload:allImage.data})
    }

  } catch (error) {
      console.log(error.message)
      dispatch({ type:GET_ALL_IMAGE_FAILED, payload:error.message || "Something went wrong ...."  })
  }

}



export const getImageById = (id) => async (dispatch) =>{
  
  
  dispatch({type:GET_IMAGE_BY_ID_REQUEST})

  try {

    const image = await axios.get(`${API_BASED_COMMON_URL}/api/${id}/getimage`, 
      {
        headers:{
           Authorization:`Bearer ${jwt}`
        },
        withCredentials:true
       }
   
    )

    if(image){
      console.log(" image details :  ", image.data);
      dispatch({ type:GET_IMAGE_BY_ID_SUCCESS, payload:image.data})
    }

  } catch (error) {
      dispatch({ type:GET_IMAGE_BY_ID_FAILED, payload:error.message || "Something went wrong ...."  })
  }

}



export const deleteImageById = (id) => async (dispatch) =>{
  
  
  dispatch({type:DELETE_IMAGE_BY_ID_REQUEST})

  try {

    const response = await axios.delete(`${API_BASED_COMMON_URL}/api/p/${id}/deleteimage`, 
      {
        headers:{
           Authorization:`Bearer ${jwt}`
        },
        withCredentials:true
       }
   
    )

    if(response){
      dispatch(getAllImages());
      console.log(" RESPONSE AFTER IMAGE DELETE :  ", response);
      dispatch({ type:DELETE_IMAGE_BY_ID_SUCCESS, payload:response})
    }

  } catch (error) {
      dispatch({ type:DELETE_IMAGE_BY_ID_FAILED, payload:error.message || "Something went wrong ...."  })
  }

}



export const addImage = (processData , navigate) => async (dispatch) =>{
  
  
  dispatch({type:UPLOAD_IMAGE_REQUEST})

  console.log(" data received on action tag : ", processData);

  try {

    const createdImage = await axios.post(`${API_BASED_COMMON_URL}/api/p/addimage`,  
      processData,
      {
       headers:{
        "Content-Type": "multipart/form-data", 
         Authorization:`Bearer ${jwt}`
       },
       withCredentials:true
      }
  
    )

    if(createdImage){
      dispatch(getAllImages());
      console.log(" Image's details ( ADD NEW ) :  ", createdImage.data);
      dispatch({ type:UPLOAD_IMAGE_SUCCESS})
      navigate("/dashboard/images")
    }

  } catch (error) {
      dispatch({ type:UPLOAD_IMAGE_FAILED, payload:error.message || "Something went wrong ...."  })
      navigate("/dashboard/images/add")
  }

}
