import axios from "axios"
import { API_BASED_COMMON_URL } from "../../Config/ConfigItem"
import { DELETE_BLOG_BY_ID_FAILED, DELETE_BLOG_BY_ID_REQUEST, DELETE_BLOG_BY_ID_SUCCESS, GET_ALL_BLOGS_FAILED, GET_ALL_BLOGS_REQUEST, GET_ALL_BLOGS_SUCCESS, GET_BLOG_BY_ID_FAILED, GET_BLOG_BY_ID_REQUEST, GET_BLOG_BY_ID_SUCCESS, WRITE_BLOGS_FAILED, WRITE_BLOGS_REQUEST, WRITE_BLOGS_SUCCESS } from "./ActionType"

const jwt = localStorage.getItem("jwt")

export const addNewBlog = (formData) => async (dispatch) =>{
  
  
  dispatch({type:WRITE_BLOGS_REQUEST})

  try {

    const createdBlog = await axios.post(`${API_BASED_COMMON_URL}/addblog`, 
      formData,
      {
        Headers:{
           Authorization:`Bearer ${jwt}`
        },
        withCredentials:true
       }
   
    )

    if(createdBlog){

      getAllBlogs()

      console.log(" Blogs details :  ", createdBlog.data);

      dispatch({ type:WRITE_BLOGS_SUCCESS, payload:createdBlog.data})
    }

  } catch (error) {
      dispatch({ type:WRITE_BLOGS_FAILED, payload:error.message || "Something went wrong ...."  })
  }

}


export const getAllBlogs = () => async (dispatch) =>{
  
  
  dispatch({type:GET_ALL_BLOGS_REQUEST})

  try {

    const allBlogs = await axios.get(`${API_BASED_COMMON_URL}/getallblogs`, 
      {
        headers:{
           Authorization:`Bearer ${jwt}`
        },
        withCredentials:true
       }
   
    )

    if(allBlogs){
      
      dispatch({ type:GET_ALL_BLOGS_SUCCESS, payload:allBlogs.data})
    }

  } catch (error) {
      dispatch({ type:GET_ALL_BLOGS_FAILED, payload:error.message || "Something went wrong ...."  })
  }

}



export const getBlogById = (id) => async (dispatch) =>{
  
  
  dispatch({type:GET_BLOG_BY_ID_REQUEST})

  console.log(" request done here and id  : ", id)
  try {

    const blog = await axios.get(`${API_BASED_COMMON_URL}/${id}/getblog`, 
      {
        headers:{
           Authorization:`Bearer ${jwt}`
        },
        withCredentials:true
       }
   
    )

    if(blog){
      console.log(" Blog details :  ", blog.data);
      dispatch({ type:GET_BLOG_BY_ID_SUCCESS, payload:blog.data})
    }

  } catch (error) {
      dispatch({ type:GET_BLOG_BY_ID_FAILED, payload:error.message || "Something went wrong ...."  })
  }

}


export const deleteBlogById = (id) => async (dispatch) =>{
  
  
  dispatch({type:DELETE_BLOG_BY_ID_REQUEST})
 
  try {
    
    const blog = await axios.delete(`${API_BASED_COMMON_URL}/${id}/deleteblog`, 
      {
        headers:{
           Authorization:`Bearer ${jwt}`
        },
        withCredentials:true
       }
   
    )

    if(blog){
      dispatch(getAllBlogs());
      console.log(" RESPONSE AFTER DELETE :  ", blog.data);
      dispatch({ type:DELETE_BLOG_BY_ID_SUCCESS, payload:blog.data})
    }

  } catch (error) {
      console.log(error.message)
      dispatch({ type:DELETE_BLOG_BY_ID_FAILED, payload:error.message || "Something went wrong ...."  })
  }

}