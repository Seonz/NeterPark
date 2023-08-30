package com.spr.neterpark.service;

import com.spr.neterpark.repository.SalaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SalaylistService {

    @Autowired
    private SalaylistRepository salaylistRepository;
}
