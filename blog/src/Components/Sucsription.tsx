import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import SubscribtionForm from "./UI/SubscribtionForm";

const Sucsription = () => {
  return (
    <Box  sx={{ height:'100%' , width:'100%'}}>
      <Stack
        sx={{ width: "100%", height: "100%" }}
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <Typography
            sx={{
              fontSize: { lg: "2.5rem", md: "2.5rem", sm: "1.5rem", xs: "1.5rem" },
              fontFamily: "Playfair Display",
              textAlign: "center",
              padding: "3rem",
              width:{lg:'60%', md:'60%' , sm:'100%', xs:'100%'},
              color:'#3f3f3f',
              fontWeight:'bolder'
            }}
          >  Subscribe <Typography component='span' sx={{ display:'block' , fontSize: { lg: "2rem", md: "2rem", sm: "1rem", xs: "1rem" },
          fontFamily: "Playfair Display",
          textAlign: "center",
          width:{lg:'100%', md:'100%' , sm:'100%', xs:'100%'},
          color:'#3f3f3f',
          fontWeight:'400px'}}> to get My latest News</Typography>
          </Typography>

          <SubscribtionForm />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sucsription;
