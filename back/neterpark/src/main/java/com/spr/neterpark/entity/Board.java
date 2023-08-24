package com.spr.neterpark.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Data
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bno; // 게시글 번호

    @Column(length = 20, nullable = false)
    private String bTitle; // 게시글 제목

    @Column(length = 200, nullable = false)
    private String bContent; // 게시글 내용

    @Column(length = 10)
    private String userId;

    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    private User user; // 아이디

    @Column(length = 20, nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date regDate; // 작성 일자
}
