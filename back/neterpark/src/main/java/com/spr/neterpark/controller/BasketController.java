package com.spr.neterpark.controller;


import com.spr.neterpark.entity.Basket;
import com.spr.neterpark.service.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BasketController {

    @Autowired
    private BasketService basketService;


    @GetMapping("listbas")
    public List<Basket> getList(Basket basket){
        return basketService.getList(basket);
    }


    @GetMapping("/detabas")
    public Optional<Basket> detailBasket(Basket basket){return basketService.detailBasket(basket);}

    @PostMapping("/addbas")
    public Basket addBasket(@RequestBody Basket basket){
        return basketService.addBasket(basket);
    }

    @PutMapping("/updabas")
    public Basket updateBasket(@RequestBody Basket basket){
        Basket updatebas = basketService.getBasketById(basket);
        if (updatebas != null) {
            int tiketN = basket.getTicketN();
            if(basket.getTicketN() != tiketN) {
                updatebas.setTicketN(basket.getTicketN());
            }
        }
        Basket upbas = basketService.addBasket(updatebas);
        return upbas;
    }


    @DeleteMapping("/delebas")
    public void deleteBasket(@RequestBody Basket basket){
        basketService.deleteBasket(basket);
    }
}
