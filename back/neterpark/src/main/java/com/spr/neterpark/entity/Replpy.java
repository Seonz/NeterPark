package com.spr.neterpark.entity;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Data
public class Replpy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rno; // 댓글 번호

    @Column(length = 100, nullable = false)
    private String rContent; // 댓글 내용

    @Column(length = 10)
    private String userId;

    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    private User user; // 아이디

    @Column(length = 18, nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date writeDate; // 작성 일자


    private int bno;


    @ManyToOne
    @JoinColumn(name = "bno", insertable = false, updatable = false)
    private Board board;
}
