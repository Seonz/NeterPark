package com.spr.neterpark.controller;

import com.spr.neterpark.entity.User;
import com.spr.neterpark.repository.UserRepository;
import com.spr.neterpark.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService us;

    @PostMapping("/login")
    public int loginUser(@RequestBody User user) {
        User user2 = us.getUser(user);
        if (user2 != null) {
            if (user.getUserPwd().equals(user2.getUserPwd())) {
                return 1;
            } else {
                return -1;
            }
        }
        return -1;
    }
    @PostMapping("/signup")
    public int signup(User user) {
        int i = us.joinUser(user);
        return i;
    }
}
