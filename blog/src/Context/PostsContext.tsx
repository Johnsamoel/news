import React  ,  { useState } from "react";
import axios from 'axios';

export interface postObj  {
    _id : string ;
    title:string ;
    description: string ;
    postImage: string ;
}



interface ValueObj {
    posts: postObj[] | undefined;
    FetchAllPosts : () => void ;
}

export const PostsContext = React.createContext<ValueObj>({
    posts: [] ,
    FetchAllPosts : () => {}
})



export const PostsContextProvider: React.FC<{children: React.ReactNode }> = (props) => {
    const [posts , setPosts] = useState<postObj[]>();

    const FetchAllPosts = () => { axios.get('http://localhost:3000/api/posts/')
    .then((response) => setPosts(response.data))
    .catch((error) => console.log(error.message)) }
   
   
    const  contextValue:ValueObj =  {
    FetchAllPosts ,
    posts 
  }
 
    

  return <PostsContext.Provider value={contextValue}>{props.children}</PostsContext.Provider>
}