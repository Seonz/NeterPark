package com.spr.neterpark.service;

import com.spr.neterpark.entity.User;
import com.spr.neterpark.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUser(User user){
        try{
            return userRepository.findById(user.getUserId()).get();
        }catch (Exception i){
            return null;
        }
    }
    public int joinUser(User vo) {
        try{
            userRepository.save(vo);
            return 1;
        } catch (Exception i){
            return 0;
        }
    }
}
