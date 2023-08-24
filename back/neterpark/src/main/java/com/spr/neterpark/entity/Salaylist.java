package com.spr.neterpark.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Data
public class Salaylist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sno; // 결제 번호

    private int proNo; // 상품 번호

    @ManyToOne
    @JoinColumn(name = "proNo", insertable = false, updatable = false)
    private Product product;

    @Column(length = 10)
    private String userId;

    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    private User user; // 아이디

    @Column(length = 10)
    private int ticketN; // 티켓수

    @Column(length = 10)
    private String seatNum; // 좌석 번호

    @Column(length = 18)
    @Temporal(TemporalType.TIMESTAMP)
    private Date resDate; // 예약일

    @Column(length = 18)
    @Temporal(TemporalType.TIMESTAMP)
    private Date buyDate; // 구매일


}
