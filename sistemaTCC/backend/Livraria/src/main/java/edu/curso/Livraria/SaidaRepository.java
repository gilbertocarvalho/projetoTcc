 package edu.curso.Livraria;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.repository.query.Param;



@Repository
public interface SaidaRepository extends JpaRepository<SaidaEstoque,Long>{

  @Transactional
     @Modifying
    @Query("UPDATE Livro livro SET livro.quantidade = livro.quantidade - :quantidade WHERE livro.isbn = :isbn")
  void   realizarentrada(@Param("quantidade")  long quantidade , @Param("isbn") String isbn);
            
}
 