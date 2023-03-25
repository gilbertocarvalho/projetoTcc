  package edu.curso.Livraria;

import java.time.LocalDate;
import java.time.LocalTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;





@Entity
public class EntradaEstoque {

                      @ManyToOne
                @JoinColumn(name="isbn")
	private Livro livro;
                   
                    @Id
                    @GeneratedValue
                 private int codigoitem;


	
                    
                      private int quantidade;
                
                         private LocalDate data;

                         private LocalTime hora;

                 public int getCodigoitem(){


                           return codigoitem;
}

                             private void setCodigoitem(int codigoitem){

                                  this.codigoitem = codigoitem;

}


                
	public Livro  getLivro() {
		return livro;
	}

	public void setLivro  (Livro livro) {
		this.livro = livro;


	}

                   
                

	
	
	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int  quantidade) {
		this.quantidade = quantidade;

	}
	

                    public LocalDate getData() {
		return data;

	}

	public void setData(LocalDate data) {
		this.data= data  ;
	}


                      public LocalTime getHora() {
		return hora;

	}

	public void setHora(LocalTime hora) {
		this.hora= hora  ;
	}


}


