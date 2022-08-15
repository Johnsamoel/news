// importing some mui components
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

import LoadingButton from '@mui/lab/LoadingButton';

// importing some hooks from React.
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

//import context mehtods
import { AuthContext } from "../../Context/AuthContext";

interface ValueObj {
  userName: string;
  Email: string;
  password: string;
  postImage: string | null;
  showPassword: boolean;
  checked: boolean;
}

interface errors {
  userName: string;
  Email: string;
  password: string;
  postImage: string;
}

const RegisterForm = () => {
  const StoredEmail: string | null = localStorage.getItem("Email");

  const { SetNewUser, RequestError, Isregistered , isloading } = useContext(AuthContext);

  const [values, setValues] = useState<ValueObj>({
    userName: "",
    Email:  '',
    password: "",
    postImage: "",
    showPassword: false,
    checked: false,
  });

  const [error, setError] = useState<errors>({
    userName: "",
    Email: "",
    password: "",
    postImage: "",
  });

  const Navigate = useNavigate();

  const sendUserData = () => {
    SetNewUser({
      username: values.userName,
      email: values.Email,
      password: values.password,
      profileImage: values.postImage,
    });
  };

  const SubmitForm = (e: any): void => {
    e.preventDefault();

    if(values.Email ==='' && values.userName === '' && values.password ==='') {
      formik.setTouched({ username: true , Email: true  , password: true})
      formik.setErrors({username:'Required' , Email:'Required' , password:'Required'})
      return ;
    }

    const errors = validate({
      username: values.userName,
      password: values.password,
      Email: values.Email,
    });

    if (!errors.Email && !errors.password && !errors.userName) {
      sendUserData();
    }

    return;
  };

  useEffect(() => {
    if (Isregistered && !RequestError) Navigate("/login");
  }, [Isregistered , Navigate , RequestError]);

  const validate = (values: any) => {
    const errors = {
      userName: "",
      Email: "",
      password: "",
    };

    if (!values.username.trim()) {
      errors.userName = "Required";
      setError((prevValue) => {
        return { ...prevValue, userName: "Required" };
      });
    } else if (values.username.trim().length < 6) {
      errors.userName = "Minimum name is 6 characters";
      setError((prevValue) => {
        return { ...prevValue, userName: "Minimum name is 6 characters" };
      });
    } else if (values.username.trim().length > 20) {
      errors.userName = "It's too long username";
      setError((prevValue) => {
        return { ...prevValue, userName: "It's too long user name" };
      });
    } else if (isFinite(values.username)) {
      errors.userName = "Invalid username";
      setError((prevValue) => {
        return { ...prevValue, userName: "Invalid username" };
      });
    } else {
      setError((prevValue) => {
        return { ...prevValue, userName: "" };
      });
      setValues((prevValue) => {
        return { ...prevValue, userName: formik.values.username };
      });
    }

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
      setValues((prevValue) => {
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
      setValues((prevValue) => {
        return { ...prevValue, password: formik.values.password };
      });
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      Email: StoredEmail ? JSON.parse(StoredEmail! as string) : '',
      password: "",
    },
    validate,
    onSubmit: SubmitForm,
  });

  const onChangeImageHandler = (selectorFiles: FileList | null) => {
    const File = selectorFiles;
    if (File) {
      if (File.length === 1) {
        setValues((prev) => {
          return { ...prev, postImage: File[0].name };
        });
      }
    }
  };

 



  return (
    <FormControl>
      <Stack justifyContent="center" alignItems="center" gap={1}>
        <TextField
          sx={{ width: { md: "400px" }, color: "black" }}
          id="username"
          label="username"
          variant="outlined"
          autoComplete="off"
          onChange={formik.handleChange}
          error={Boolean(error.userName && formik.touched.username)}
          value={formik.values.username}
          onBlur={formik.handleBlur}
        />
        {error.userName && formik.touched.username && (
          <FormHelperText id="username" sx={{ color: "red", width: "100%" }}>
            {error.userName}
          </FormHelperText>
        )}

        <TextField
          sx={{ width: { md: "400px" }, color: "black" }}
          id="Email"
          label="Email"
          variant="outlined"
          autoComplete="off"
          onChange={formik.handleChange}
          error={Boolean(formik.errors.Email && formik.touched.Email)}
          value={formik.values.Email}
          onBlur={formik.handleBlur}
        />
        {error.Email && formik.touched.Email && (
          <FormHelperText id="Email" sx={{ color: "red", width: "100%" }}>
            {error.Email}
          </FormHelperText>
        )}

        <TextField
          sx={{ width: { md: "400px" }, color: "black" }}
          id="password"
          label="password"
          variant="outlined"
          autoComplete="off"
          onChange={formik.handleChange}
          error={Boolean(formik.errors.password && formik.touched.password)}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {error.password && formik.touched.password && (
          <FormHelperText
            id="password"
            sx={{ textAlign: "start", width: "100%", color: "red" }}
          >
            {error.password}
          </FormHelperText>
        )}

        <Button
          variant="contained"
          component="label"
          sx={{ width: "100%", textAlign: "center" , fontFamily:'poppins' }}
        >
          {" "}
          Upload Profile photo{" "}
          <input
            accept="image/*"
            name="file"
            type="file"
            hidden
            onChange={(e) => {
              onChangeImageHandler(e.target.files);
            }}
          />{" "}
        </Button>

        <LoadingButton variant="contained" size="large" sx={{width:'100%'}} color="success" type="submit" onClick={SubmitForm} disabled={isloading}  loading={isloading} loadingIndicator={ <CircularProgress color="inherit" />} >
        Create Account
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

export default RegisterForm;

//       Email: !!localStorage.getItem('Email') !== false ? JSON.parse(localStorage.getItem('Email') || '') : '',
