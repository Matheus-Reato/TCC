package com.spring_car.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.spring_car.dto.CarDto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;
    private String brand;
    private int year;
    private String color;
    private String registrationPlate;

    private Long idClient;

    @ManyToOne
    @JoinColumn(name = "client_id")
    @JsonBackReference
    private Client client;

    public Car() {
    }

    public Car(Long id, String model, String brand, int year, String color, String registrationPlate, Long idClient, Client client) {
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.color = color;
        this.registrationPlate = registrationPlate;
        this.idClient = idClient;
        this.client = client;
    }

    public Car(CarDto carDto) {
        this.model = carDto.model();
        this.brand = carDto.brand();
        this.year = carDto.year();
        this.color = carDto.color();
        this.registrationPlate = carDto.registrationPlate();
        this.idClient = carDto.idClient();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getRegistrationPlate() {
        return registrationPlate;
    }

    public void setRegistrationPlate(String registrationPlate) {
        this.registrationPlate = registrationPlate;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Long getIdClient() {
        return idClient;
    }

    public void setIdClient(Long idClient) {
        this.idClient = idClient;
    }

}