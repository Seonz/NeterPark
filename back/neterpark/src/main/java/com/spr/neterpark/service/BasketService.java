package com.spr.neterpark.service;

import com.spr.neterpark.repository.BasketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BasketService {

    @Autowired
    private BasketRepository basketRepository;
}
