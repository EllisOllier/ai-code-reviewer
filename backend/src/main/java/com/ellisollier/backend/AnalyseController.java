package com.ellisollier.backend;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@RestController
public class AnalyseController {

    @PostMapping("/analyse")
    public ResponseEntity<String> analyseFile(@RequestParam("file") MultipartFile file) throws IOException {

        try{
            // Convert file to a string for analysis
            String code = new String(file.getBytes(), StandardCharsets.UTF_8);

            // Code analysis below

            // Code analysis above

            return ResponseEntity.ok("File has successfully been received");
        } catch (IOException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to read file!");
        }

    }
}
