import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER} from '../utils/mutations';

import isAuth from '../utils/isAuth';

const Login = (props) => {
    const [formState, setFormState] = useState({username: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        isAuth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  

      setFormState({
        email: '',
        password: '',
      });
    };


  return(

    // <form>
    //   <div className ="form-control">
    //     <label htmlFor="username">Username</label>
    //     <input type="text" id="username"/>
    //   </div>
    //   <div className ="form-control">
    //     <label htmlFor="password">Password</label>
    //     <input type="password" id="password"/>
    //   </div>
    //   <div className="form=actions">
    //     <button type="button">Sign Up</button>
    //     <button type="submit">Submit</button>
    //   </div>
    // </form>
    <div>
        <h1>Log in now! Or else!</h1>
    <form onSubmit={handleFormSubmit}>
      <input placeholder="Your username" name="username" value={formState.username} onChange={handleChange} ></input>
      <input placeholder="********" name="password" type="password" value={formState.password} onChange={handleChange} ></input>

        <button type="submit">Submit</button>

    </form>
    </div>
  )
}

export default Login;