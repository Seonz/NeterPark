package com.spr.neterpark.repository;

import com.spr.neterpark.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    List<Product> findByCategory(String category);

    Product findByProNo(int proNo);
}
