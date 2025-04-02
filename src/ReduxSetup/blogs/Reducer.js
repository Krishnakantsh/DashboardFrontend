import { DELETE_BLOG_BY_ID_FAILED, DELETE_BLOG_BY_ID_REQUEST, DELETE_BLOG_BY_ID_SUCCESS, GET_ALL_BLOGS_FAILED, GET_ALL_BLOGS_REQUEST, GET_ALL_BLOGS_SUCCESS, GET_BLOG_BY_ID_FAILED, GET_BLOG_BY_ID_REQUEST, GET_BLOG_BY_ID_SUCCESS, WRITE_BLOGS_REQUEST, WRITE_BLOGS_SUCCESS } from "./ActionType.js";

const initialState = {
  blogs:null,
  blog:null,
  isLoading:false,
  error:null,
}

export const BlogReducer = (state = initialState, action)=>{

  switch(action.type){

    case GET_ALL_BLOGS_REQUEST:
    case GET_BLOG_BY_ID_REQUEST:
    case WRITE_BLOGS_REQUEST:
    case DELETE_BLOG_BY_ID_REQUEST:
      return {...state ,isLoading:true, error:null };
    
    case GET_ALL_BLOGS_SUCCESS:
      return {...state , isLoading:false , error:null , blogs:action.payload};

    case WRITE_BLOGS_SUCCESS:
      return {...state , isLoading:false , error:null , blogs:action.payload};

    case GET_BLOG_BY_ID_SUCCESS:
      return {...state , isLoading:false , error:null , blog:action.payload};

    case DELETE_BLOG_BY_ID_SUCCESS:
        return {...state , isLoading:false , error:null, blog:null};

    case GET_ALL_BLOGS_FAILED:
    case GET_BLOG_BY_ID_FAILED:
    case DELETE_BLOG_BY_ID_FAILED:
      return {...state , isLoading:false , error:action.payload}


    default:
      return  {...state};

 }


 
}