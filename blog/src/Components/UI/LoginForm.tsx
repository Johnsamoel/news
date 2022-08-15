import { Button, CircularProgress, FormControl, Stack, TextField, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

// importing some react hooks
import {  useState , useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
//importing Auth context
import { AuthContext } from "../../Context/AuthContext";



interface userobj {
    Email: string;
    password: string;
    [key: string] : string;
}

const LoginForm = () => {
  const [userValues , setUserValues] = useState<userobj>({ Email:'' , password: '' });

  const [error , setError] = useState<{Email:string| null , password:string | null}>({Email:'' , password:''})
  const Navigate = useNavigate();

  const { loggedIn , isloading , RequestError , LogUserIn} = useContext(AuthContext);


  useEffect(() => {
    if(loggedIn) Navigate('/')
  } , [loggedIn])

  const validate = (values: any) => {

    const errors = {
      Email: "",
      password: "",
    };

    if (!values.Email.trim()) {
      errors.Email = "Required";
      setError((prevValue) => {
        return { ...prevValue, Email: "Required" };
      });
    } else if (values.Email.trim().length < 5) {
      errors.Email = "Minimum name is 4 characters";
      setError((prevValue) => {
        return { ...prevValue, Email: "Minimum name is 4 characters" };
      });
    } else if (values.Email.trim().length > 28) {
      errors.Email = "It's too long Email";
      setError((prevValue) => {
        return { ...prevValue, Email: "It's too long Email" };
      });
    } else if (isFinite(values.Email)) {
      errors.Email = "Invalid Email address";
      setError((prevValue) => {
        return { ...prevValue, Email: "Invalid Email address" };
      });
    } else if (!values.Email.includes(".com")) {
      errors.Email = "Invalid Email address";
      setError((prevValue) => {
        return { ...prevValue, Email: "Invalid Email address" };
      });
    } else if (!values.Email.includes("@")) {
      errors.Email = "Invalid Email address";
      setError((prevValue) => {
        return { ...prevValue, Email: "Invalid Email address" };
      });
    } else {
      setError((prevValue) => {
        return { ...prevValue, Email: "" };
      });
      setUserValues((prevValue) => {
        return { ...prevValue, Email: formik.values.Email };
      });
    }

    if (!values.password.trim()) {
      errors.password = "Required";
      setError((prevValue) => {
        return { ...prevValue, password: "Required" };
      });
    } else if (values.password.trim().length < 6) {
      errors.password = "Minimum name is 6 characters";
      setError((prevValue) => {
        return { ...prevValue, password: "Minimum name is 6 characters" };
      });
    } else if (values.password.trim().length > 20) {
      errors.password = "It's too long password";
      setError((prevValue) => {
        return { ...prevValue, password: "It's too long password" };
      });
    } else if (isFinite(values.password)) {
      errors.password = "Invalid password address";
      setError((prevValue) => {
        return { ...prevValue, password: "Invalid password" };
      });
    } else {
      setError((prevValue) => {
        return { ...prevValue, password: "" };
      });
      setUserValues((prevValue) => {
        return { ...prevValue, password: formik.values.password };
      });
    }

    return errors;
  };


  const LoginHandler = (userData: {email: string , password: string}) => {
    LogUserIn(userData);
  }

  const SubmitFormHandler= (e: any) => {
    e.preventDefault();

    if(userValues.Email === '' && userValues.password === ''){
            formik.setTouched({ Email: true  , password: true})
            formik.setErrors({ Email:'Required' , password:'Required'})
            return ;
    }


    if(!error.Email && !error.password ) {
        LoginHandler({email: userValues.Email , password: userValues.password} )
    }
  }

  const formik = useFormik({
    initialValues: {
      Email: '',
      password: "",
    },
    validate,
    onSubmit: SubmitFormHandler,
  });


  return (
    <FormControl >
    <Stack justifyContent="center" alignItems="center" gap={1}>

      

      <TextField
        sx={{ width: { md: "400px" }, color: "black" }}
        id="Email"
        label="Email"
        name="Email"
        variant="outlined"
        autoComplete="off"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(error.Email && formik.touched.Email)}
      />
     
    {error.Email && formik.touched.Email && <Typography sx={{color:'red' , textAlign:'start'}}>{error.Email}</Typography>}
      <TextField
        sx={{ width: { md: "400px" }, color: "black" }}
        id="password"
        label="password"
        name='password'
        variant="outlined"
        autoComplete="off"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(error.password && formik.touched.password)}
      />

    {error.password  && formik.touched.password && <Typography sx={{color:'red' , textAlign:'start'}}>{error.password}</Typography>}

    <LoadingButton variant="contained" size="large" sx={{width:'100%' , fontFamily:'poppins'}} color="success" type="submit" onClick={SubmitFormHandler} disabled={isloading}  loading={isloading} loadingIndicator={ <CircularProgress color="inherit" />} >
            Login
        </LoadingButton>
    </Stack>
    {RequestError && (
        <Typography sx={{ color: "red", width: "100%", textAlign: "center" }}>
          Something went wrong
        </Typography>
      )}
  </FormControl>
  );
};

export default LoginForm;