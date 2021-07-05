package com.brillio.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brillio.ecommerce.model.Product;
import com.brillio.ecommerce.repository.ProductRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private ProductRepository productRepository;
	

	@PostMapping("/addproduct")
	public Product createStudent(@RequestBody Product product) {
		productRepository.save(product);
		return product;
	}

	
}