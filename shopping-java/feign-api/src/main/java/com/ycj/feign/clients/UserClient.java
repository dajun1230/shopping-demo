package com.ycj.feign.clients;

import com.ycj.user.pojo.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient("userservice")
public interface UserClient {

    @GetMapping("/user/query")
    User queryUser(@RequestParam("id") String id);

}
