package com.spr.neterpark.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int proNo; // 상품 번호

    @Column(length = 50)
    private String proName; // 상품 이름

    @Column(length = 10)
    private String category; // 카테고리

    @Column(length = 6)
    private int salay; // 금액

    @Temporal(TemporalType.TIMESTAMP)
    @Column(length = 18)
    private Date startDate; // 공연 시작 일자

    @Temporal(TemporalType.TIMESTAMP)
    @Column(length = 18)
    private Date endDate; // 공연 끝 일자

    @Column(length = 20)
    private String proTime; // 상영 시간

    @Column(length = 3)
    private int proNum; // 상영 횟수

    @Column
    private int rmno; // 상영관

    @Column
    private byte[] imgurl;

    @ManyToOne
    @JoinColumn(name = "rmno", insertable = false, updatable = false)
    private Room room;

}
