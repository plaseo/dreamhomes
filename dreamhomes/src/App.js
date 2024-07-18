import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import PropertyList from './pages/PropertyList';
import PageWrapper from './reusables/PageWrapper';

function App() {
  const [user, setUser] = useState({id:undefined, firstName:"", lastName:"", email:"", password:""});

  useEffect(() => {
    const id = localStorage.getItem("userID");
    if(id){
      axios.get(`http://localhost:8080/finduserbyid/${id}`)
      .then((response) =>{
        setUser(response.data);
        console.log("response", response.data)
      })
      .catch((e) =>{
        console.log(e);
      })
    }
  }, []);

  //props: act like arguments passed to a function. They are used to receive data from parent components to child components
  //data flow: props establish a one-way, downward data flow. Parent components define the props, and child components receive and use them
  //props are read-only within the receiving component . You cannot modify props directly within the child component


  //State: it represents internal data managed by a single component. It can change over time based on user interactions or events.
  //it is local to the component.

  return (
  <PageWrapper>
  <Routes>
    <Route path="/" element = {<Home user={user} setUser={setUser}/>}/>
    <Route path="/signup" element = {<SignUp user={user} setUser={setUser}/>}/>
    <Route path="/signin" element = {<SignIn user={user} setUser={setUser}/>}/>
    <Route path="/properties" element = {<PropertyList user={user} setUser={setUser}/>}/>
  </Routes>
  </PageWrapper>
  );
}

export default App;
