package com.spring_car.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.spring_car.entity.Car;

@Repository
public interface CarRepository extends JpaRepository <Car, Long> {
    
    List<Car> findAllByOrderByIdAsc();
    
}
