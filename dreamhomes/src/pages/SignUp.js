import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
  const navigator = useNavigate();

  //this function is designed to handle any changes that occur within the form's input fields. 
  //it's triggerd whenever the user types in an input
  const signUpChangeHandler = (event) => {
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
  const signUpSubmitHandler = () => {
    //make a post request to the server with the user data
    axios.post("http://localhost:8080/signup", props.user)
    //defines what happens if the server responds successfully to the post request
    .then((response) => {
      // //stores the user's id(which might be part of the data returned by the server in response.data) in the browsers local storage. this is helpful to keep track of the logged-in user
      // localStorage.setItem("userID", response.data.id); //store the user id in local storage
      // //update the user state in the parent component with the data received from the server's response
      // props.setUser(response.data);
      navigator("/signin");
    })
    .catch((e) => {
      console.log(e);
    })
  };

  return (
  <div>
    <h1>Sign-Up</h1>

    <label>First Name</label>
    <input name='firstName' type='text' value={props.user.firstName} onChange={signUpChangeHandler}/>
    <label>Last Name</label>
    <input name='lastName' type='text'onChange={signUpChangeHandler}/>
    <label>Phone Number</label>
    <input name='phoneNumber' type='number' onChange={signUpChangeHandler}/>
    <label>Username</label>
    <input name='username' type='text' onChange={signUpChangeHandler}/>
    <label>Password</label>
    <input name='password' type='password'onChange={signUpChangeHandler}/>
    <button onClick={signUpSubmitHandler}>Sign up</button>

  </div>

  )
}

export default SignUp