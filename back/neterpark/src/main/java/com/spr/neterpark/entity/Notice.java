package com.spr.neterpark.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import javax.persistence.*;
import java.util.Date;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Data
public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int nNo; // 게시글 번호

    @Column(length = 20, nullable = false)
    private String nTitle; // 게시글 제목

    @Column(length = 200, nullable = false)
    private String nContent; // 게시글 내용

    @Column(length = 10)
    private String userId;

    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    private User user; // 아이디

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date regDate; // 작성 일자
}
