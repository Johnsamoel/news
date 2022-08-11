import { Button, FormControl, FormHelperText, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import Joi from 'joi';
import { useState } from 'react';


const SubscribtionForm = () => {
    const [Email , setEmail] = useState('');
    const [Error , setError] = useState('');

    const schema = {
        Email: Joi.string().min(5).max(20).email({ tlds: { allow: false } }).required()
    }

    const ValidateForm = (event: React.SyntheticEvent) => {
        event.preventDefault();
         
    }

    return (
<FormControl >
    <Stack direction='row' justifyContent='space-evenly'  gap={2} flexWrap='wrap' >
  <TextField sx={{width:{md:'400px'} , color:'black'}} id="my-input" label="Email" variant="filled" onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(e.target.value)} />
  <Button variant='contained' sx={{backgroundColor:'black' , color:'white'}} onClick={ValidateForm}>Subscribe</Button>
   </Stack>
   <FormHelperText id="my-helper-text">{Error ? Error : `We'll never share your email.`}</FormHelperText>
</FormControl>
    );
};

export default SubscribtionForm;