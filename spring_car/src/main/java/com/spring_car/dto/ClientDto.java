package com.spring_car.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ClientDto(
                    @NotBlank (message = "Name cannot be empty.")
                    String name,

                    @NotBlank (message = "CPF cannot be empty.")
                    @Size(min = 11, max = 11, message = "CPF must have 11 characters.")
                    String cpf,

                    @NotBlank (message = "Phone Number cannot be empty.")
                    String phoneNumber) {
}
