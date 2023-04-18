   package edu.curso.Livraria;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import javax.persistence.ManyToMany;


import java.util.List;

@Entity
public class Autor {

	private String nome;

	
	
	private int  codigo; 
	
                            @ManyToMany(mappedBy="autores")
                private List<Livro> livros;
   
	@Id
                       @GeneratedValue
	public int getCodigo() {
		return codigo;

	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

                   
                


	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome= nome;
	}

	
	
}
