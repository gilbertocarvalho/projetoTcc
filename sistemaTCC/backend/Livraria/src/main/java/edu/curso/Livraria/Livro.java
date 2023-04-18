   package edu.curso.Livraria;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import java.util.List;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
@Entity    
public class Livro{

	private String isbn;

	
	
	private String titulo; 
	
                    private double preco;
                     
                private long quantidade;

                private List<Autor> autores;

                     private Editora editora;



	@Id
	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

             @ManyToMany
          @JoinTable(name = "autorlivro", joinColumns = @JoinColumn(name="isbn"),inverseJoinColumns =@JoinColumn(name= "codigo"))
 public List<Autor> getAutores(){

           return autores;

}
        	public void setAutores(List<Autor> autores) {
		this.autores = autores;
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
                      @ManyToOne
                       @JoinColumn(name="codigo")
                 	public Editora getEditora() {
		return editora;
	}

	public void setEditora(Editora editora) {
		this.editora = editora;
	}


	
}
