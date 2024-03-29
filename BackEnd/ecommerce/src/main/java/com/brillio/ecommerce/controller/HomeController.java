package com.brillio.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brillio.ecommerce.model.Product;
import com.brillio.ecommerce.repository.ProductRepository;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class HomeController {
	
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping("/productlist")
	public List<Product> getProducts(){
		
		return productRepository.findAll();
	}
}
