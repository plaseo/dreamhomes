import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/signin.css'

function SignIn(props) {
    const navigator = useNavigate();
    //this function is designed to handle any changes that occur within the form's input fields. 
    //it's triggerd whenever the user types in an input
    const signInChangeHandler = (event) => {

    //get the name attribute of the input field
    const name = event.target.name;
    let value;
    value = event.target.value;

    //create a copy of the user object from props
    //we create a tempuser object because we never want to directly modify the original prop user object
    const tempUser = {...props.user};

    //update the corresponding property in the temporary user object with the new value
    tempUser[name] = value;
    console.log("Updated user object", tempUser);

    //update the state with the modified user object
    props.setUser(tempUser);
    console.log("User state updated with new value");
    };
    //this function is called when the user click the submit button
    const signInSubmitHandler = () => {
        //make a post request to the server with the user data
        axios.post("http://localhost:8080/signin", props.user)
        //defines what happens if the server responds successfully to the post request
        .then((response) => {
            //stores the user's id(which might be part of the data returned by the server in response.data) in the browsers local storage. this is helpful to keep track of the logged-in user
            localStorage.setItem("userID", response.data.id); //store the user id in local storage
            //update the user state in the parent component with the data received from the server's response
            props.setUser(response.data);
            navigator("/");
        })
        .catch((e) => {
          console.log(e);
        })

    };
    
  return (
   
    <div>
      
      
     

    <div className='signinbox'>
    
    <div>
    <h1 className='signinbutton'>Login</h1>
    <label className="input flex items-center gap-2">
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        <path
          d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
      </svg>
      <input name='username' type="email" placeholder="Username" value={props.user.username} onChange={signInChangeHandler} />
    </label>
    <label className="input flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      </svg>
      <input name='password' type="password" placeholder="Password" value={props.user.password} onChange={signInChangeHandler}  />
      
    </label>
    <div className='signinbutton'>
    <button onClick={signInSubmitHandler} class="btn btn-primary">Sign In</button> <br/>
    </div>
      </div>
      </div>
    </div>



  )

}

export default SignIn