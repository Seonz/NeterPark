package com.spr.neterpark.service;

import com.spr.neterpark.entity.Basket;
import com.spr.neterpark.entity.Product;
import com.spr.neterpark.repository.BasketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BasketService {

    @Autowired
    private BasketRepository basketRepository;


    public List<Basket> getList(Basket basket){
        return basketRepository.findAll();
    }

    public Basket getBasketById(Basket basket){
        return basketRepository.findByRegNo(basket.getRegNo());
    }

    public Basket addBasket(Basket basket){
        return  basketRepository.save(basket);
    }

    public Optional<Basket> detailBasket(Basket basket){
        return basketRepository.findById(basket.getRegNo());
    }

    public void deleteBasket(Basket basket){
        basketRepository.deleteById(basket.getRegNo());
    }
}
