import { Box, Container, Stack, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Box sx={{backgroundImage:`url(https://jevelin.shufflehound.com/personal-blog/wp-content/uploads/sites/28/2019/09/bg-par2.jpg?id=277)` , backgroundRepeat:'no-repeat'
        , backgroundSize:'cover'
        , backgroundPosition:'center center', width:'100%' , height:'100%' , padding:'3rem' }}  >
        <Container maxWidth='md' sx={{backgroundColor:'#ffffffd6' , height:{md:'600px'} , padding:'2rem' }}>
            <Stack justifyContent='center' alignItems='center' sx={{ width:'100%' , height:'100%'}} gap={5}>
            <Typography sx={{color:'black' , fontFamily:'Montserrat' , fontWeight:'bold' , fontSize:'2rem' }}>keep in Touch!</Typography>
             
            
            <Typography sx={{fontFamily:'poppins' , fontWeight:'900px'}}>Don't Have an account?  <Link to='/register' style={{textDecoration : 'none'}}>Create one</Link></Typography>
            </Stack>
        </Container>
       </Box>
    );
};

export default Login;