package com.example.cognetSolutions;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class CognetSolutionsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CognetSolutionsApplication.class, args);
	}

}
