package com.spring_car.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring_car.entity.Client;
import com.spring_car.repository.ClientRepository;

@Service
public class ClientService {

    private ClientRepository clientRepository;

    private ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public Client createClient(Client client) {
        return clientRepository.save(client);
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Client getClientById(Long id){
        return clientRepository.findById(id).orElseThrow();
    }

    public Client updateClient(Long id, Client client) {
        Client clientUpdate = clientRepository.findById(id).orElseThrow();
        clientUpdate.setName(client.getName());
        clientUpdate.setCpf(client.getCpf());
        clientUpdate.setPhoneNumber(client.getPhoneNumber());

        return clientRepository.save(clientUpdate);
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
    
}
