package com.spr.neterpark.service;

import com.spr.neterpark.entity.Product;
import com.spr.neterpark.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    public List<Product> getproList(Product product){
        return productRepository.findAll();
    }

    public Product getProductById(Product product){
        return productRepository.findByProNo(product.getProNo());
    }

    public List<Product> getCategory(String category){
        return productRepository.findByCategory(category);
    }

    public Optional<Product> getDetail(Product product){
        return productRepository.findById(product.getProNo());
    }

    public Product addProduct(Product product){
        return productRepository.save(product);
    }

    public void deleteProduct(Product product){
        productRepository.deleteById(product.getProNo());}
}
