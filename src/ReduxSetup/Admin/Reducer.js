import { ADMIN_GET_PROFILE_FAILED, ADMIN_GET_PROFILE_REQUEST, ADMIN_GET_PROFILE_SUCCESS, ADMIN_LOGIN_FAILED, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT_FAILED, ADMIN_LOGOUT_REQUEST, ADMIN_LOGOUT_SUCCESS } from "./ActionType.js";


const initialState = {
  admin:null,
  isLoading:false,
  error:null,
  jwt:null
}

export const AdminReducer = (state = initialState, action)=>{

  switch(action.type){

    case ADMIN_LOGIN_REQUEST:
    case ADMIN_GET_PROFILE_REQUEST:
    case ADMIN_LOGOUT_REQUEST:
      return {...state ,isLoading:true, error:null };
    
    case ADMIN_LOGIN_SUCCESS:
      return {...state , isLoading:false , error:null , jwt:action.payload};

    case ADMIN_GET_PROFILE_SUCCESS:
      return {...state , isLoading:false , error:null , admin:action.payload};

    case ADMIN_LOGOUT_SUCCESS:
        return {...state , isLoading:false , error:null , admin:null};

    case ADMIN_LOGIN_FAILED:
    case ADMIN_GET_PROFILE_FAILED:
    case ADMIN_LOGOUT_FAILED:
      return {...state , isLoading:false , error:action.payload}

    default:
      return state;

 }


 
}