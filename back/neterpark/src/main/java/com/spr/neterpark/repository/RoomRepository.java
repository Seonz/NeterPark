package com.spr.neterpark.repository;

import com.spr.neterpark.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, String> {
}
