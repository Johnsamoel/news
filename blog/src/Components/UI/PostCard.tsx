import { Button, Typography } from '@mui/material';
import { Box, Stack  } from '@mui/system';
import React from 'react';

interface PostProps {
    src: string;
    data: { head:{title: string}, desc: { description: string} };
}


const PostCard:React.FC<PostProps> = (  {data , src}   ) => {
   const defaultImage = 'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/28/2019/09/101_0010_alexandru-acea-oumcLEqVwNc-unsplash-1200x675.jpg'
    return (
        <Box  sx={{   height:{lg:'320px' , md:'320px' , sm:'400px' , xs:'350px' } , boxSizing:'border-box' , backgroundColor:'white' }}>
        <Stack direction='row' justifyContent='center' alignItems='center' flexWrap='wrap' sx={{ width:'100%' , height:'100%' }}>
            {/* post image */}
            <Box sx={{width: { lg:'50%' ,  md:'50%'  ,sm:'50%' , xs:'100%'} , backgroundImage:`url(${src ? defaultImage : defaultImage})` , minHeight:"50%" , minWidth:"50%" , backgroundSize:'cover' , height:{lg:'100%' , md:'100%' , sm:'50%' , xs:'50%'}}} >
            </Box>

            {/* post data */}
            <Box sx={{width: { lg:'50%' ,  md:'50%'  ,sm:'50%' , xs:'100%'} , height:{lg:'100%' , md:'100%' , sm:'50%' , xs:'50%'} , padding:'2%',  '&:hover': {boxShadow:'0px 15px 45px -9px rgb(0 0 0 / 20%)'}}} >
                <Stack justifyContent='space-around' alignItems='center' sx={{height:'100%' , width:'100%' }} gap={1}>
                    <Typography fontFamily='Yeseva One' fontSize='1.8rem' textAlign='center'>{data.head.title}</Typography>
                    <Typography fontFamily='cursive' fontSize='1rem' textAlign='center' fontWeight='300px'>{data.desc.description}</Typography>
                    <Button variant='contained'  sx={{backgroundColor:'black' , color:'white'}}>Read more</Button>
                </Stack>
            </Box>
        </Stack>
        </Box>
    );
};

export default PostCard;