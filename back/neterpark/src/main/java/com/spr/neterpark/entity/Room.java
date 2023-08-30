package com.spr.neterpark.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Data
public class Room {

    @Id
    @Column(length = 50)
    private String rmName; // 상영관 이름

    @Column(length = 5)
    private int rmSeat; // 좌석 수
}
