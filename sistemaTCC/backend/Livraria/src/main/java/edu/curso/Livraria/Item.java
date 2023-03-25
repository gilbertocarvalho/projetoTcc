   package edu.curso.Livraria;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;





@Entity
public class Item {

                      @ManyToOne
                @JoinColumn(name="isbn")
	private Livro livro;
                   
                    @Id
                    @GeneratedValue
                 private int codigoitem;

	
	@ManyToOne
                @JoinColumn(name="codigo")
	private Venda venda; 
	
                    
                      private int quantidade;
                
                         private double subtotal;

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

                   
                

	public Venda getVenda() {
		return venda	;
	}

	public void setVenda(Venda venda) {
		this.venda= venda;
	}

	
	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int  quantidade) {
		this.quantidade = quantidade;

	}
	

                    public double getSubtotal() {
		return subtotal;

	}

	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal  ;
	}
}


