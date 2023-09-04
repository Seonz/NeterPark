package com.spr.neterpark.service;

import com.spr.neterpark.entity.Notice;
import com.spr.neterpark.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoticeService {
    @Autowired
    private NoticeRepository noticeRepository;
    //게시글 작성, 수정
    public void Write(Notice notice) throws Exception{
        noticeRepository.save(notice);
    }
    //게시글 조회
    public List<Notice> List(){
        return noticeRepository.findAll();
    }
    //게시글 삭제
    public void delete(int nNo){
        noticeRepository.deleteById(nNo);
    }
}
