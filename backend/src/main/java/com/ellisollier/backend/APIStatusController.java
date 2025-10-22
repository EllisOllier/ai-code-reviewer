package com.ellisollier.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APIStatusController {

    @GetMapping("/api-check")
    public String APIStatus() {
        return "Online";
    }
}
