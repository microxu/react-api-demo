package com.chris.testapis;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan ({"com.chris"})
@SpringBootApplication
public class TestapisApplication {

	public static void main(String[] args) {
		SpringApplication.run(TestapisApplication.class, args);
	}

}
