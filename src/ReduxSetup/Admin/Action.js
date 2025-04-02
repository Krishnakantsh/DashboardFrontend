import axios from "axios"
import { ADMIN_GET_PROFILE_FAILED, ADMIN_GET_PROFILE_REQUEST, ADMIN_GET_PROFILE_SUCCESS, ADMIN_LOGIN_FAILED, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT_REQUEST, ADMIN_LOGOUT_SUCCESS } from "./ActionType.js"
import { API_BASED_COMMON_URL, NORMAL_BASED_COMMON_URL } from "../../Config/ConfigItem.js"



const jwt = localStorage.getItem("jwt")


export const loginAdmin = (adminData, navigate) => async(dispatch) => {
  

  dispatch({type:ADMIN_LOGIN_REQUEST})
  
  try {
    const response = await axios.post(`${NORMAL_BASED_COMMON_URL}/login`,
       adminData,
        {
        headers:{
                  Authorization:`Bearer ${jwt}`,
                     } , 
                    withCredentials: true,
    });
    
    if( response.data ){
      localStorage.setItem("jwt" , response.data )
      navigate("/dashboard")
    }
    
    dispatch({type:ADMIN_LOGIN_SUCCESS , payload:response.data })
    
  } catch (error) {
    dispatch({type:ADMIN_LOGIN_FAILED, payload:error.message})
  }
}


export const getAdmin = (jwt) => async (dispatch) => {
  
  dispatch({type:ADMIN_GET_PROFILE_REQUEST});

  try {
    const response = await axios.get(`${API_BASED_COMMON_URL}/adminprofile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      withCredentials: true,
    })

    const admin = response.data;
    
    dispatch({type:ADMIN_GET_PROFILE_SUCCESS , payload:admin});
   
  } catch (error) {
    dispatch({type:ADMIN_GET_PROFILE_FAILED, payload:error.message})
  }

}

//  logout 

export const adminLogout = () =>async (dispatch) =>{
  
  const jwt = localStorage.getItem("jwt");
  
  dispatch({type:ADMIN_LOGOUT_REQUEST});

     const data = await axios.post(`${API_BASED_COMMON_URL}/logout`, {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true,
      }
     )

     if(data){
      dispatch({ type:ADMIN_LOGOUT_SUCCESS, payload:null})
      localStorage.removeItem("jwt");
      console.log("admin logged out successfully  ! ! ! ! ")
    }

}