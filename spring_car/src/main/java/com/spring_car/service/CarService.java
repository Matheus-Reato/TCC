package com.spring_car.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.spring_car.entity.Car;
import com.spring_car.entity.Client;
import com.spring_car.repository.CarRepository;
import com.spring_car.repository.ClientRepository;

@Service
public class CarService {
    
    private CarRepository carRepository;

    private ClientRepository clientRepository;

    private CarService(CarRepository carRepository, ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
        this.carRepository = carRepository;
    }

    public Car createCar(Car car) {
        Client client = clientRepository.findById(car.getIdClient()).orElseThrow();
        car.setClient(client);
        return carRepository.save(car);
    }

    public List<Car> getAllCars() {
        return carRepository.findAllByOrderByIdAsc();
    }

    public Car getCarById(Long id){
        return carRepository.findById(id).orElseThrow();
    }

    public Car updateCar(Long id, Car car) {
        Client client = clientRepository.findById(car.getIdClient()).orElseThrow();
        Car carUpdate = carRepository.findById(id).orElseThrow();
        carUpdate.setModel(car.getModel());
        carUpdate.setBrand(car.getBrand());
        carUpdate.setYear(car.getYear());
        carUpdate.setColor(car.getColor());
        carUpdate.setRegistrationPlate(car.getRegistrationPlate());
        carUpdate.setIdClient(car.getIdClient());
        carUpdate.setClient(client);
        return carRepository.save(carUpdate);
    }

    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }
}
