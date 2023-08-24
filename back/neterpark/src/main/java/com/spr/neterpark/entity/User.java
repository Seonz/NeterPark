package com.spr.neterpark.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Data
public class User {

    @Id
    @Column(length = 10)
    private String userId; // 아이디

    @Column(length = 5, nullable = false)
    private String userName; // 이름

    @Column(length = 50, nullable = false)
    private String userPwd; // 비밀번호

    @Column(length = 20, nullable = false)
    private String userEmail; // 이메일

    @Column(length = 3)
    private String userPhoneF; // 휴대전화 앞자리 3자리

    @Column(length = 4)
    private String userPhoneM; // 휴대전화 중간 4자리

    @Column(length = 4)
    private String userPhoneL; // 휴대전화 끝자리 4자리

    @Column(length = 20)
    private String userAddr; // 주소

}
