package com.spring_car.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CarDto(
                    @NotBlank (message = "Model cannot be empty.")
                    String model,

                    @NotBlank (message = "Brand cannot be empty.")
                    String brand,

                    @NotNull (message = "Year cannot be empty.")
                    int year,

                    @NotBlank (message = "Color cannot be empty.")
                    String color,

                    @NotBlank (message = "Registration Plate cannot be empty.")
                    String registrationPlate,

                    @NotNull (message = "Client cannot be empty.")
                    Long idClient) {
}
