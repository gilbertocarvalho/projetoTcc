 


  
 package edu.curso.Livraria;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.repository.query.Param;


import org.springframework.stereotype.Repository;

@Repository
public interface LivroRepository extends JpaRepository<Livro,Long>{


                   public List<Livro> findByTituloContaining(String titulo);

                   public Livro findByIsbn(String isbn);


                   public List<Livro> findAll();
                   
                  @Transactional
                   public void deleteByIsbn(String isbn);



    
    @Transactional
     @Modifying
    @Query("UPDATE Livro livro SET livro.preco = :preco WHERE livro.isbn = :isbn")
  void   alterarpreco(@Param("preco")  double preco , @Param("isbn") String isbn);
      


}
 