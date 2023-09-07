package com.spr.neterpark.controller;

import com.spr.neterpark.entity.Product;
import com.spr.neterpark.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/listpro")
    public List<Product> listPro(Product product){
       return productService.getproList(product);
    }

    @GetMapping("/listpro/{category}")
    public List<Product> catePro(@PathVariable String category){
        return productService.getCategory(category);
    }

    @GetMapping("/detapro")
    public Optional<Product> detailPro(Product product){
        return productService.getDetail(product);
    }


    @PostMapping("/addpro")
    public Product addPro(@RequestBody Product product){
        return productService.addProduct(product);
    }

    @PutMapping("/updapro")
    public Product updaPro(@RequestBody Product product){
        Product updateProduct = productService.getProductById(product);
        if (updateProduct != null) {
            if (product.getCategory() != null) {
                updateProduct.setCategory(product.getCategory());
            }
            if (product.getImgurl() != null) {
                updateProduct.setImgurl(product.getImgurl());
            }
            if (product.getProName() != null) {
                updateProduct.setProName(product.getProName());
            }
            if (product.getProTime() != null) {
                updateProduct.setProTime(product.getProTime());
            }
            if (product.getStartDate() != null) {
                updateProduct.setStartDate(product.getStartDate());
            }
            if (product.getEndDate() != null) {
                updateProduct.setEndDate(product.getEndDate());
            }
        }
            Product updated = productService.addProduct(updateProduct);
            return updated;

    }

    @DeleteMapping("/deletepro")
    public void deletePro(@RequestBody Product product){
        productService.deleteProduct(product);}
}
