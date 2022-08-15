
import { Button } from "@mui/material";
import { Stack , Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {

    const Navigate = useNavigate()
    
    const NavigateUserHandler = () => {
        Navigate('/register');
    }
    return (
          <Box sx={{height:'3.5rem' , position:'sticky' , top:'0px' , width:'100%' , backgroundColor:'white' , zIndex:'1000' }}>
            <Stack direction='row' justifyContent='space-between' alignItems='center' flexWrap='wrap' sx={{width:'100%' , height:'100%'}}>
                {/* logo section */}
                <Box sx={{ width:{lg:'50%' , md:'50%' , sm:'50%' , xs:"100%"}}}>
                <Stack sx={{ width:'100%' , height:'100%' , paddingRight:'50px' , paddingLeft:'50px'}} justifyContent='flex-start' flexDirection='row' alignItems='center'><Logo /></Stack>
                </Box>
                {/* button section */}
                <Box sx={{ width:{lg:'50%' , md:'50%' , sm:'50%' , xs:"100%"}}}>
                <Stack sx={{ width:'100%' , height:'100%' , paddingRight:'50px' , paddingLeft:'50px'}} justifyContent='flex-end' flexDirection='row' alignItems='center'>
                    <Button variant='contained' sx={{backgroundColor:'black' , color:'white'}} onClick={NavigateUserHandler}>Join Now</Button>
                </Stack>
                </Box>
            </Stack>
          </Box>
    );
};

export default Navbar;