package com.dream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.dream.models.User;
import com.dream.services.UserService;
import org.springframework.web.bind.annotation.RequestParam;


//the class is going to handle web requests and return data directly as JSON or XML
//  rather than rendering a view
@RestController
@CrossOrigin("*")
public class UserController {
    //ResponseEntity<Object> represents the entire http response, and it includes: status code, headers, body

    //status code: indicates the results of the http request, .e.g 200 OK, 201 CREATED, 400 BAD REQUEST, 404 NOT FOUND, 500 INTERNAL SERVER ERROR etc

    //headers: allow you to add metadata to the response, e.g. content type: JSON or xml, authorization

    //body: the actual data being returned in the response. This can be any type of object

    //@RequestBody is used to bind the body of an http request to a java object, and vice versa.

    @Autowired
    private UserService userService;

    @RequestMapping(
        value="/signup",
        consumes=MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE,
        method=RequestMethod.POST
    )

    public ResponseEntity<Object> signup(@RequestBody User user){
        try {
            User savedUser = userService.signUp(user);
            return new ResponseEntity<Object>(savedUser, HttpStatus.CREATED);
        }catch(DataIntegrityViolationException e){
            System.out.println("duplicate username");
            return new ResponseEntity<Object>("duplicate username", HttpStatus.BAD_REQUEST);
        }catch(Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }catch(Error e){
            System.out.println(e.getMessage());
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(
        value="/signin",
        consumes=MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE,
        method=RequestMethod.POST
    )

    public ResponseEntity<Object> signIn(@RequestBody User user){
        try{
            User loggedInUser = userService.signIn(user);
            return new ResponseEntity<Object>(loggedInUser, HttpStatus.OK);
        }catch(Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }catch(Error e){
            System.out.println(e.getMessage());
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(
        value="/finduserbyid/{id}",
        produces = MediaType.APPLICATION_JSON_VALUE,
        method=RequestMethod.GET
    )

    public ResponseEntity<Object> findUserById(@PathVariable Long id){
        try{
            User foundUser = userService.findById(id);
            return new ResponseEntity<Object>(foundUser, HttpStatus.OK);
        }catch(Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }catch(Error e){
            System.out.println(e.getMessage());
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
        
}



    

