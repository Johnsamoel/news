import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

//setting posts state 
import { useState , useEffect} from 'react';

//importing my components
import PostCard from './UI/PostCard';

//importing axios for fetching posts
import axios from 'axios';

interface postObj  {
    _id : string ;
    title:string ;
    description: string ;
    postImage: string ;
}



const Posts = () => {

    const [posts , setPosts] = useState<postObj[]>();

    const FetchAllPosts = () => { axios.get('http://localhost:3000/api/posts/')
    .then((response) => setPosts(response.data))
    .catch((error) => console.log(error.message)) }

    useEffect(() => { FetchAllPosts() } , [])

    return (
<Box sx={{minHeight:'400px' , marginBottom:'3rem' , position:{lg:'absolute' , md:'absolute'} , top:'64%' , left:'10%' , right:'10%'}}>
    <Grid container justifyContent='center' gap={5} sx={{paddingTop:'5rem'}}>

    
        {posts?.map(( { _id , title , description , postImage } : postObj ) => {

          return(  <Grid key={_id} item md={10} sm={10} xs={10}>
        <PostCard src={postImage} data={ {head: {title} , desc:{description}}} />
            </Grid>)
        })}

        {!posts  && <Typography  sx={{color:'black' , fontSize:{lg:'2.5rem' , md:'2.5rem' , sm:'2.5rem' , xs:'2.5rem'} , fontFamily:'Montserrat'}}   >No posts to show</Typography>}

     
    </Grid>
</Box>
    );
};

export default Posts;