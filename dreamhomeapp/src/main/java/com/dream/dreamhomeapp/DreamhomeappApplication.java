package com.dream.dreamhomeapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.dream")
public class DreamhomeappApplication {

	public static void main(String[] args) {
		SpringApplication.run(DreamhomeappApplication.class, args);
	}

}
