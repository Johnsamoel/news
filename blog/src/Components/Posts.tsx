import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

//setting posts state 
import { useEffect , useContext} from 'react';

//importing my context
import { PostsContext } from '../Context/PostsContext';

//importing my components
import PostCard from './UI/PostCard';

//import Post interface
import { postObj } from '../Context/PostsContext';






const Posts = () => {

const { posts , FetchAllPosts } = useContext(PostsContext);


    useEffect( () => { FetchAllPosts()} , [])

    return (
    
     <Box sx={{ padding:'1rem'  ,  zIndex:{xl:'222' , lg:'222' , md:'222' , sm:'222'} ,
      position:{ xl: 'relative' , lg:'relative' , md:'relative' , sm:'relative'} ,
      top:{xl:'-15rem' , lg:'-15rem' , md:'-15rem' , sm:'-15rem'} ,
      marginLeft:'auto' , marginRight:'auto' }}>
    <Grid container justifyContent='center' sx={{paddingTop:'5rem' , gap:{  lg:'5rem' , md:'5rem'  , sm:"1rem" , xs:"1rem"}}}>

    
        {posts?.map(( { _id , title , description , postImage } : postObj ) => {

          return(  <Grid key={_id} item md={8} sm={8} xs={10}>
        <PostCard src={postImage} data={ {head: {title} , desc:{description}}} />
            </Grid>)
        })}

        {!posts  && <Typography  sx={{color:'black' , fontSize:{lg:'2.5rem' , md:'2.5rem' , sm:'2.5rem' , xs:'2.5rem'} , fontFamily:'Montserrat'}}   >No posts to show</Typography>}
    </Grid>
</Box>

    );
};

export default Posts;

