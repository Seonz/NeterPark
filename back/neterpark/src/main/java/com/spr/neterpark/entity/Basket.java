package com.spr.neterpark.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Data
public class Basket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int regNo; // 예약 번호

    private int proNo; // 상품 번호

    @ManyToOne
    @JoinColumn(name = "proNo", insertable = false, updatable = false)
    private Product product;

    @Column(length = 10)
    private String userId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    private User user; // 아이디

    @Column(length = 10)
    private int ticketN; // 티켓 수

    @Column(length = 10)
    private int seatNum; // 좌석번호
}
