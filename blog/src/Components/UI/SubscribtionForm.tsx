// importing some mui components
import { Button, FormControl, FormHelperText, TextField } from '@mui/material';
import { Stack } from '@mui/system';

// importing joi functions to validate the form
import Joi from 'joi';

import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SubscribtionForm = () => {
    const [Email , setEmail] = useState<string | undefined >();
    const [Error , setError] = useState<string | undefined >();
    const Navigate = useNavigate()



    const schema = Joi.object({
        Email: Joi.string().min(5).max(25).email({ tlds: { allow: false } }).required()
    })

    const ValidateForm = async(event: React.SyntheticEvent) => {
        event.preventDefault();
      
        const {error, value} =   schema.validate({Email} , { abortEarly: false })
        console.log('save' , error , value.Email)
        
        if(!error && value.Email.includes('.com') ) {
            localStorage.setItem('Email' , JSON.stringify(value.Email) );
            setError('')
            return null
        }else {
            setError(error?.message)
            console.log("error" , error?.message )
        }

    }   

 
    const ChangeHandler = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(e.target.value)
        ValidateForm(e)
    }

    const SubmitForm = () => {
    
        if(!Error && Email) {
            localStorage.setItem('Email' , JSON.stringify(Email) );
            Navigate('/register')
        }else{
            setError('Enter your Email')
        }
    }
    return (
<FormControl >
    <Stack direction='row' justifyContent='space-evenly'  gap={2} flexWrap='wrap' >
  <TextField sx={{width:{md:'400px'} , color:'black'}}  id="my-input" label="Email" variant="filled" onChange={ChangeHandler}  />
  <Button variant='contained' sx={{backgroundColor:'black' , color:'white'}} onClick={SubmitForm}>Subscribe</Button>
   </Stack>
   <FormHelperText id="my-helper-text" sx={{color:Error? 'red' : ''}}>{Error ? Error : `We'll never share your email.`}</FormHelperText>
</FormControl>
    );
};

export default SubscribtionForm;