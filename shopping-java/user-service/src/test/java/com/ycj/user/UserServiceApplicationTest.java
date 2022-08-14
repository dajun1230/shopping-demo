package com.ycj.user;

import com.ycj.user.mapper.UserMapper;
import com.ycj.user.pojo.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserServiceApplicationTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void getUser() {
        User user = userMapper.queryUserById("1");
        System.out.println("user:" + user);
    }
}
