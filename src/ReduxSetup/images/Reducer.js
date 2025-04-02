import { DELETE_IMAGE_BY_ID_FAILED, DELETE_IMAGE_BY_ID_REQUEST, DELETE_IMAGE_BY_ID_SUCCESS, GET_ALL_IMAGE_FAILED, GET_ALL_IMAGE_REQUEST, GET_ALL_IMAGE_SUCCESS, GET_IMAGE_BY_ID_FAILED, GET_IMAGE_BY_ID_REQUEST, GET_IMAGE_BY_ID_SUCCESS, UPLOAD_IMAGE_FAILED, UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS } from "./ActionType.js";

const initialState = {
  images:null,
  isLoading:false,
  error:null,
  image:null
}

export const ImageReducer = (state = initialState, action)=>{

  switch(action.type){

    case GET_ALL_IMAGE_REQUEST:
    case GET_IMAGE_BY_ID_REQUEST:
    case UPLOAD_IMAGE_REQUEST:
    case DELETE_IMAGE_BY_ID_REQUEST:
      return {...state ,isLoading:true, error:null };
    
    case GET_ALL_IMAGE_SUCCESS:
      return {...state , isLoading:false , error:null , images:action.payload};

    case UPLOAD_IMAGE_SUCCESS:
    case GET_IMAGE_BY_ID_SUCCESS:
      return {...state , isLoading:false , error:null , image:action.payload};

    case DELETE_IMAGE_BY_ID_SUCCESS:
        return {...state , isLoading:false , error:null , image:null};

    case GET_ALL_IMAGE_FAILED:
    case GET_IMAGE_BY_ID_FAILED:
    case UPLOAD_IMAGE_FAILED:
    case DELETE_IMAGE_BY_ID_FAILED:
      return {...state , isLoading:false , error:action.payload}


    default:
      return {...state};

 }


 
}