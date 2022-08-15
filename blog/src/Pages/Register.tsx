// mui components
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import RegisterForm from '../Components/UI/RegisterForm';

const Register = () => {
    return (
       <Box sx={{backgroundImage:`url(https://jevelin.shufflehound.com/personal-blog/wp-content/uploads/sites/28/2019/09/bg-par2.jpg?id=277)` , backgroundRepeat:'no-repeat'
        , backgroundSize:'cover'
        , backgroundPosition:'center center', width:'100%' , height:'100%' , padding:'3rem' }}  >
        <Container maxWidth='md' sx={{backgroundColor:'#ffffffd6' , height:{md:'600px'} , padding:'2rem' }}>
            <Stack justifyContent='center' alignItems='center' sx={{ width:'100%' , height:'100%'}} gap={5}>
            <Typography sx={{color:'black' , fontFamily:'Montserrat' , fontWeight:'bold' , fontSize:'2rem' }}>keep in Touch!</Typography>
            <RegisterForm /> 
            
            <Typography sx={{fontFamily:'poppins' , fontWeight:'900px'}}>Already Have an account?  <Link to='/login' style={{textDecoration : 'none'}}>Login.</Link></Typography>
            </Stack>
        </Container>
       </Box>
    );
};

export default Register;