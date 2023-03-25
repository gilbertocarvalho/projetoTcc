   package edu.curso.Livraria;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;




@Entity
public class Cliente {

	private String cpf;

	
	
	private String nome; 
	
                    
                      private String email;
                     

                   private String telefone;

	@Id
	public String getCpf() {
		return cpf;

	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

                   
                


	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome= nome;
	}

	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email= email;
	}
	

                    public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
}
