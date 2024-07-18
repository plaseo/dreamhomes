package com.dream.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dream.models.User;
import com.dream.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User signUp(User user) throws Exception{
        return userRepository.save(user);
    }

    public User signIn (User user) throws Exception{
        User foundUser = userRepository.findByUsername(user.getUsername());
        if(foundUser == null){
            throw new Exception("User not found");
        }if(!foundUser.getPassword().equals(foundUser.getPassword())){
            throw new Exception("Invalid credentials");
        }
        return foundUser;
    }

    public User findById(Long id){
        User user = userRepository.findById(id).orElse(null);
        return user;
    }
}
