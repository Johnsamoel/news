import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SliderText = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { lg: "3.5rem", md: "3.5rem", sm: "2rem", xs: "2rem" },
          fontWeight: "400px",
          color: "white",
          textAlign: "center",
          fontFamily: "Playfair Display",
          fontStyle:'italic',
          marginTop:'2rem',
          marginBottom:'2rem'
        }}
      >
        All About
        <Typography 
        component='span'
        sx={{ fontSize:{lg:'2rem' , md:'2rem' , sm:'2rem' , xs:'1rem'} , display:'block' }} 
        fontWeight="400px"
        color="white"
        textAlign="center"
        fontFamily='"Montserrat"'>stationary & travel gear</Typography>
      </Typography>
    </Box>
  );
};

export default SliderText;
