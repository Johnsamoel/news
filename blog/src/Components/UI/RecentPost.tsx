import { Avatar, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';


export interface RecentPostProps {
    id : string;
    src: string;
    title: string;
 
}



const RecentPost:React.FC<RecentPostProps> = ({src , title  , id}) => {
    return (
        <Box sx={{margin:'1rem'}}>
        <Stack justifyContent='space-around' gap={1} direction='row' flexWrap='wrap' > 
            <Avatar sx={{height:'4rem' , width:'4rem'}} alt={id} src={src}/>
            <Stack direction='row' gap={1} sx={{ width:{xs:"100%" , sm:'100%', md:'50%' , lg:'50%'}  }}>
            <Typography fontWeight='bold' >{title}</Typography>
            </Stack>
        </Stack>
        </Box>
    );
};

export default RecentPost;