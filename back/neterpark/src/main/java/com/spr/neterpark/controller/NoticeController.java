package com.spr.neterpark.controller;

import com.spr.neterpark.entity.Notice;
import com.spr.neterpark.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.WeakHashMap;

@RestController
public class NoticeController {
    @Autowired
    private NoticeService nt;

    @GetMapping("/list")
    public List<Notice> list(){
        return nt.List();
    }
    @GetMapping("/write")
    public int write(Notice notice) throws Exception {
        nt.Write(notice);
        return 1;
    }
    @GetMapping("/delete")
    public int delete(int nNo)throws Exception{
        nt.delete(nNo);
        return 1;
    }

}
