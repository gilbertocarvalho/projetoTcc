   package edu.curso.Livraria;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;




@Entity    
public class Livro{

	private String isbn;

	
	
	private String titulo; 
	
                    private double preco;
                     
                private long quantidade;




	@Id
	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

                   
                


	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public double getPreco(){

                                    return  preco;
                   }

                   public void setPreco(double preco){

                     this.preco = preco;
               }
         
               public void setQuantidade(long quantidade) {
		this.quantidade = quantidade;
	}

             public long getQuantidade() {
		return quantidade;
	}
         

	
}
