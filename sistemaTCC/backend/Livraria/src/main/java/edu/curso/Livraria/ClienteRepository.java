 
 package edu.curso.Livraria;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente,Long>{


                   public List<Cliente> findByNome(String nome);
                   
                   public Cliente findByCpf(String cpf);
}
 