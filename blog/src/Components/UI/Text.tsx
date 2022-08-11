import { Typography } from "@mui/material";

const Text = () => {
    return (
        <Typography
        sx={{ fontSize:{lg:'3.5rem' , md:'3.5rem' , sm:'2rem' , xs:'2rem' } }} 
        fontWeight="400px"
        color="white"
        textAlign="center"
        fontFamily='Playfair Display'
      >
        My Personal Journey With
        <Typography 
        sx={{ fontSize:{lg:'3.5rem' , md:'3.5rem' , sm:'2rem' , xs:'2rem'} }} 
        fontWeight="400px"
        color="white"
        textAlign="center"
        fontFamily='Yeseva One'>News</Typography>
      </Typography>
    );
};

export default Text;